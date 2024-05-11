import { RouteProp } from "@react-navigation/native";
import { ApiResponse } from "./types";

export enum Screens {
  HOMEPAGE = "Homepage",
  WEATHER_DETAILS = "WeatherDetails",
}

export type StackParamList = {
  [Screens.HOMEPAGE]: undefined;
  [Screens.WEATHER_DETAILS]: {
    locationData: ApiResponse;
    favoriteLocation: string;
    setFavoriteLocation: (value: string) => void;
  };
};

export type WeatherDetailsScreenRouteProp = RouteProp<
  StackParamList,
  Screens.WEATHER_DETAILS
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
