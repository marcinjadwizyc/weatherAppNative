import { Button, Container } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../context";
import { Text, View } from "react-native";
import { Fragment } from "react";
import { weatherDetialsStyles } from "./WeatherDetails.styles";
import { ApiResponse } from "../../utils/types";

export const WeatherDetails = () => {
  const {
    favoriteLocation,
    setFavoriteLocation,
    setCurrentLocation,
    locationData,
  } = useAppContext();
  const { goBack } = useNavigation();

  const handleToggleFavoriteLocation = () => {
    setFavoriteLocation((locationData as ApiResponse).name);
  };

  return (
    <Container>
      <Button onPress={goBack}>Go Back</Button>
      {locationData && (
        <Fragment>
          <View style={weatherDetialsStyles.container}>
            <Text style={weatherDetialsStyles.city}>{locationData.name}</Text>
            <Text style={weatherDetialsStyles.temp}>
              {locationData.main.temp.toFixed()}&deg;C
            </Text>
          </View>
          <View style={weatherDetialsStyles.extraInfoContainer}>
            <View style={weatherDetialsStyles.extraInfoSection}>
              <Text style={weatherDetialsStyles.extraInfoValue}>
                {locationData.main.feels_like.toFixed()}&deg;C
              </Text>
              <Text style={weatherDetialsStyles.extraInfoDescription}>
                Feels like
              </Text>
            </View>
            <View style={weatherDetialsStyles.extraInfoSection}>
              <Text style={weatherDetialsStyles.extraInfoValue}>
                {locationData.main.humidity}%
              </Text>
              <Text style={weatherDetialsStyles.extraInfoDescription}>
                Humidity
              </Text>
            </View>
            <View style={weatherDetialsStyles.extraInfoSection}>
              <Text style={weatherDetialsStyles.extraInfoValue}>
                {locationData.main.pressure} hPa
              </Text>
              <Text style={weatherDetialsStyles.extraInfoDescription}>
                Pressure
              </Text>
            </View>
          </View>
          <Button onPress={handleToggleFavoriteLocation}>Make Favorite</Button>
        </Fragment>
      )}
    </Container>
  );
};
