import { Fragment } from "react";
import { Text, View } from "react-native";

import { Button, Container } from "../../components";
import { capitalize } from "../../utils/capitalize";
import { homepageStyles } from "./Homepage.styles";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../utils/navigation";
import { ApiResponse } from "../../utils/types";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { useAppContext } from "../../context";

export const Homepage = () => {
  const { currentLocation, setCurrentLocation, locationData, setLocationData } =
    useAppContext();
  const { navigate } = useNavigation();

  const handleSeeMore = () => navigate(Screens.WEATHER_DETAILS);

  const handleGetLocationData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=4106e5225b26a4b2b9c66f75ebb47425&units=metric`;

    const response = await fetch(url);
    const data = (await response.json()) as ApiResponse;

    setLocationData(data);
  };

  const getContent = () => {
    if (!locationData) {
      return (
        <Text style={homepageStyles.info}>
          Search location to see the weather data
        </Text>
      );
    }

    if (locationData.cod !== 200) {
      return (
        <Text style={homepageStyles.info}>
          Couldn't find the location, please try again
        </Text>
      );
    } else {
      return (
        <Fragment>
          <Text style={homepageStyles.city}>{locationData.name}</Text>
          <Text style={homepageStyles.temp}>
            {locationData.main.temp.toFixed()}&deg;C
          </Text>
          <Text style={homepageStyles.description}>
            {capitalize(locationData.weather[0].description)}
          </Text>
          <Button onPress={handleSeeMore}>Check Weather Details</Button>
        </Fragment>
      );
    }
  };

  return (
    <Container>
      <SearchInput
        value={currentLocation}
        onChangeText={setCurrentLocation}
        onPress={handleGetLocationData}
      />
      <View style={homepageStyles.content}>{getContent()}</View>
    </Container>
  );
};
