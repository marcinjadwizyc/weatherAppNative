import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiResponse } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [currentLocation, setCurrentLocation] = useState(favoriteLocation);
  const [locationData, setLocationData] = useState<ApiResponse>();

  const handleSaveFavoriteLocationToStorage = async () => {
    await AsyncStorage.setItem(storageKey, favoriteLocation);
  };

  const handleLoadFavoriteLocationFromStorage = async () => {
    const location = await AsyncStorage.getItem(storageKey);

    if (location) {
      setCurrentLocation(location);
    }
  };

  useEffect(() => {
    handleLoadFavoriteLocationFromStorage();
  }, []);

  useEffect(() => {
    handleSaveFavoriteLocationToStorage();
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
