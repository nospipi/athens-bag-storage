const LocationCard = () => {
  const businessName = "Getaways Tour Agency";
  const address = "12 Lenorman St, Athens, Greece";
  const googleMapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=12+Lenorman+St,+Athens,+Greece";

  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 w-64">
      <h2 className="text-lg font-bold text-gray-800">{businessName}</h2>
      <p className="text-sm text-gray-600 mt-2">{address}</p>
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out"
      >
        Navigate with Google Maps
      </a>
    </div>
  );
};

export default LocationCard;
