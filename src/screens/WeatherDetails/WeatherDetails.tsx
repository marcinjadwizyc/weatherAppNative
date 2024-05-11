import { Button, Container } from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WeatherDetailsScreenRouteProp } from "../../utils/navigation";

export const WeatherDetails = () => {
  const { goBack } = useNavigation();
  const {
    params: { locationData },
  } = useRoute<WeatherDetailsScreenRouteProp>();

  return (
    <Container>
      <Button onPress={goBack}>Go Back</Button>
    </Container>
  );
};
