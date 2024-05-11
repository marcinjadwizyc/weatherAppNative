import { render, screen } from "@testing-library/react-native";

import { Container } from "./Container";
import { Text } from "react-native";

describe("Container", () => {
  it("should render the children", () => {
    render(
      <Container>
        <Text>Children</Text>
      </Container>
    );

    expect(screen.getByText("Children")).toBeVisible();
  });
});
