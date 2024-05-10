import { useState } from "react";
import { Text } from "react-native";

import { Container } from "../../components";

export const Homepage = () => {
  const [favoriteLocation, setFavoriteLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState(favoriteLocation);
  const [locationData, setLocationData] = useState({});

  return (
    <Container>
      <Text>Homepage</Text>
    </Container>
  );
};
