import { RouteProp } from "@react-navigation/native";

export enum Screens {
  HOMEPAGE = "Homepage",
  WEATHER_DETAILS = "WeatherDetails",
}

export type StackParamList = {
  [Screens.HOMEPAGE]: undefined;
  [Screens.WEATHER_DETAILS]: undefined;
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
