import { useNavigation } from "@react-navigation/native";
import { Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./WeatherDetails.styles";

import { Button, Container, ExtraInfo } from "@components";
import { useAppContext } from "@context";

export const WeatherDetails = () => {
  const { favoriteLocation, setFavoriteLocation, locationData } =
    useAppContext();
  const { goBack } = useNavigation();

  const isFavoriteLocation = favoriteLocation === locationData?.name;

  const handleMakeFavoritePress = () => {
    if (locationData) {
      setFavoriteLocation(locationData.name);
    }
  };

  return (
    <Container>
      <Button onPress={goBack}>Go Back</Button>
      {locationData && (
        <Fragment>
          <View style={styles.container}>
            <Text style={styles.city}>{locationData.name}</Text>
            <Text style={styles.temp}>
              {locationData.main.temp.toFixed()}&deg;C
            </Text>
          </View>
          <View style={styles.extraInfoContainer}>
            <ExtraInfo
              value={`${locationData.main.feels_like.toFixed()}\u00B0C`}
              description="Feels like"
            />
            <ExtraInfo
              value={`${locationData.main.humidity}%`}
              description="Humidity"
            />
            <ExtraInfo
              value={`${locationData.main.pressure} hpa`}
              description="Pressure"
            />
          </View>
          {!isFavoriteLocation && (
            <Button onPress={handleMakeFavoritePress}>Make Favorite</Button>
          )}
        </Fragment>
      )}
    </Container>
  );
};
