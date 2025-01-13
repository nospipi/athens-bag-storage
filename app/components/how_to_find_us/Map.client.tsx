"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import LocationCard from "./LocationCard";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapClientMarker from "./MapClientMarker";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

//---------------------------------------------------------

type PickupCoordinates = {
  title: string;
  coordinates: LngLatLike;
};

type PickupCoordinatesList = PickupCoordinates[];

const Map = () => {
  const [devicePosition, setDevicePosition] = useState<[number, number]>([
    0, 0,
  ]);
  const [shouldWatchDevicePosition, setShouldWatchDevicePosition] =
    useState<boolean>(false);
  //   const [watchId, setWatchId] = useState<number | null>(null);
  //   const [shouldFollowVehicle, setShouldFollowVehicle] = useState<boolean>(true);
  const [shouldFollowClient, setShouldFollowClient] = useState<boolean>(false);
  const lenorman12Coordinates: LngLatLike = useMemo(() => {
    return [23.719046328113603, 37.98568449280477];
  }, []);

  const pickupCoordinates: PickupCoordinatesList = useMemo(() => {
    return [
      {
        title: "Omonoia Square",
        coordinates: [23.727983391134888, 37.98410884474147], //omonoia
      },
      {
        title: "Syntagma Square",
        coordinates: [23.734877886967404, 37.975567654268325], //syntagma
      },
      {
        title: "Monastiraki Square",
        coordinates: [23.725962873425313, 37.97650397672755], //monastiraki
      },
    ];
  }, []);

  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  //,,,,
  //map initialization
  useEffect(() => {
    if (mapContainer.current && map === null) {
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [23.726032602356256, 37.981985332492734],
        zoom: 13,
      });

      pickupCoordinates.forEach((pickupCoordinate) => {
        const customMarker = document.createElement("div");
        customMarker.className = "custom-pickup-marker";

        new mapboxgl.Marker(customMarker)
          .setLngLat(pickupCoordinate.coordinates)
          .setPopup(
            new mapboxgl.Popup({
              //offset: 10,
              closeButton: false,
              closeOnClick: false,
              closeOnMove: false,
            }).setText(pickupCoordinate.title)
          )
          .addTo(newMap)
          .togglePopup();
      });

      new mapboxgl.Marker({
        color: "red",
      })
        .setLngLat(lenorman12Coordinates)
        .setPopup(
          new mapboxgl.Popup({
            // offset: 20,
            closeButton: false,
            closeOnClick: false,
            closeOnMove: false,
            anchor: "bottom-left",
          })
        )
        .addTo(newMap)
        .togglePopup();

      setMap(newMap);
      newMap.scrollZoom.disable();
    }
  }, [mapContainer, map, lenorman12Coordinates, pickupCoordinates]);

  useEffect(() => {
    if (map) {
      const onStyleLoad = () => {
        if (map.getSource("line")) {
          map.removeLayer("line");
          map.removeSource("line");
        }

        pickupCoordinates.forEach((pickupCoordinate) => {
          const customMarker = document.createElement("div");
          customMarker.className = "custom-pickup-marker";

          new mapboxgl.Marker(customMarker)
            .setLngLat(pickupCoordinate.coordinates)
            .setPopup(
              new mapboxgl.Popup({
                //offset: 10,
                closeButton: false,
                closeOnClick: false,
                closeOnMove: false,
              }).setText(pickupCoordinate.title)
            )
            .addTo(map)
            .togglePopup();

          // Add line between lenorman12Coordinates and each pickupCoordinate
          map.addSource(`line-${pickupCoordinate.title}`, {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  lenorman12Coordinates,
                  pickupCoordinate.coordinates as [number, number],
                ],
              },
              properties: {},
            },
          });

          map.addLayer({
            id: `line-${pickupCoordinate.title}`,
            type: "line",
            source: `line-${pickupCoordinate.title}`,
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "dodgerblue",
              "line-width": 1,
              "line-dasharray": [2, 2],
            },
          });
        });
      };

      if (map.isStyleLoaded()) {
        // If style is already loaded, add the layer immediately
        onStyleLoad();
      } else {
        // Otherwise, wait for the style to finish loading
        map.on("style.load", onStyleLoad);
      }

      return () => {
        map.off("style.load", onStyleLoad);
      };
    }
  }, [map, lenorman12Coordinates, pickupCoordinates]);

  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <MapClientMarker
        map={map}
        clientPosition={devicePosition}
        shouldFollowClient={shouldFollowClient}
        shouldWatchDevicePosition={shouldWatchDevicePosition}
      />
      <div
        ref={mapContainer}
        style={{
          flex: 1,
          borderRadius: "20px",
          border: "2px solid #ffffff",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        }}
      />
    </div>
  );
};

export default Map;
