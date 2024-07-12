import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { ApiResponse } from "@utils";

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
  const storageKey = "weatherAppNative";

  const [favoriteLocation, setFavoriteLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [locationData, setLocationData] = useState<ApiResponse>();

  const handleSaveToStorage = async () => {
    try {
      const savedLocation = await AsyncStorage.getItem(storageKey);

      if (favoriteLocation !== savedLocation) {
        await AsyncStorage.setItem(storageKey, favoriteLocation);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadFromStorage = async () => {
    try {
      const location = await AsyncStorage.getItem(storageKey);

      if (location) {
        setCurrentLocation(location);
        setFavoriteLocation(location);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadFromStorage();
  }, []);

  useEffect(() => {
    handleSaveToStorage();
  }, [favoriteLocation]);

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
