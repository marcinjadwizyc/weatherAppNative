import { ReactNode, createContext, useContext, useState } from "react";
import { ApiResponse } from "../utils/types";

interface IAppContext {
  favoriteLocation: string;
  currentLocation: string;
  locationData: ApiResponse | undefined;
  setFavoriteLocation: (value: string) => void;
  setCurrentLocation: (value: string) => void;
  setLocationData: (value: ApiResponse) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext>(undefined!);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [favoriteLocation, setFavoriteLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState(favoriteLocation);
  const [locationData, setLocationData] = useState<ApiResponse>();

  return (
    <AppContext.Provider
      value={{
        favoriteLocation,
        currentLocation,
        locationData,
        setFavoriteLocation,
        setCurrentLocation,
        setLocationData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
