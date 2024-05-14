import { fireEvent, render, screen } from "@testing-library/react-native";
import { SearchInput, SearchInputProps } from "./SearchInput";

const mockProps: SearchInputProps = {
  value: "Value",
  onChangeText: jest.fn(),
  onPress: jest.fn(),
};

describe("SearchInput", () => {
  it("should render the value", () => {
    render(<SearchInput {...mockProps} />);
    expect(screen.getByDisplayValue(mockProps.value)).toBeTruthy();
  });

  it("should update the value", () => {
    render(<SearchInput {...mockProps} />);
    fireEvent.changeText(
      screen.getByDisplayValue(mockProps.value),
      "New Value"
    );
    expect(mockProps.onChangeText).toHaveBeenCalledWith("New Value");
  });

  it("should call an action on button press", () => {
    render(<SearchInput {...mockProps} />);
    fireEvent.press(screen.getByText("Search"));
    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
