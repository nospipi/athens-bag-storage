"use client";
import { createContext, useState, ReactNode } from "react";

//------------------------------------------------------
export const AppContext = createContext({});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        openMenu: () => {
          setIsMenuOpen(true);
        },
        closeMenu: () => {
          const root = document.querySelector("#root");
          const wrapper = document.querySelector("#wrapper");
          root?.classList.remove("lift_effect_root");
          //root?.classList.add("reset_effect_root");
          wrapper?.classList.remove("lift_effect_wrapper");
          // wrapper?.classList.add("reset_effect_wrapper");
          const shouldAcceptLiftEffect = document.querySelectorAll(
            ".accept_lift_effects"
          );
          for (const element of shouldAcceptLiftEffect) {
            element.classList.remove("lift_effect");
          }
          setIsMenuOpen(false);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
