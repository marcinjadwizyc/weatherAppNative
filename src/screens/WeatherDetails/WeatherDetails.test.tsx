import { render, screen } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useAppContext } from "@context";
import { WeatherDetails } from "./WeatherDetails";

jest.mock("../../context", () => ({
  useAppContext: jest.fn(),
}));

describe("WeatherDetails", () => {
  it("should render weather detials", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      locationData: {
        cod: 200,
        name: "Poznań",
        main: {
          temp: 20,
          feels_like: 21,
          humidity: 30,
          pressure: 1000,
        },
        weather: [
          {
            description: "Cloudy",
          },
        ],
      },
    });

    render(
      <NavigationContainer>
        <WeatherDetails />
      </NavigationContainer>
    );

    expect(screen.getByText("Poznań")).toBeTruthy();
    expect(screen.getByText("Humidity")).toBeTruthy();
    expect(screen.getByText("Feels like")).toBeTruthy();
    expect(screen.getByText("Pressure")).toBeTruthy();
  });

  it("should render favorite button if location not favorite", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      favoriteLocation: "",
      locationData: {
        cod: 200,
        name: "Poznań",
        main: {
          temp: 20,
          feels_like: 21,
          humidity: 30,
          pressure: 1000,
        },
        weather: [
          {
            description: "Cloudy",
          },
        ],
      },
    });

    render(
      <NavigationContainer>
        <WeatherDetails />
      </NavigationContainer>
    );

    expect(screen.getByText("Make Favorite")).toBeTruthy();
  });

  it("should not render favorite button if location favorite", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      favoriteLocation: "Poznań",
      locationData: {
        cod: 200,
        name: "Poznań",
        main: {
          temp: 20,
          feels_like: 21,
          humidity: 30,
          pressure: 1000,
        },
        weather: [
          {
            description: "Cloudy",
          },
        ],
      },
    });

    render(
      <NavigationContainer>
        <WeatherDetails />
      </NavigationContainer>
    );

    expect(screen.queryByText("Make Favorite")).not.toBeTruthy();
  });
});
