import { fireEvent, render, screen } from '@testing-library/react-native';

import { SearchInput, SearchInputProps } from './SearchInput';

const mockProps: SearchInputProps = {
	value: 'Value',
	onChangeText: jest.fn(),
	onSearchPress: jest.fn(),
	onLocationPress: jest.fn(),
};

describe('SearchInput', () => {
	it('should render the value', () => {
		render(<SearchInput {...mockProps} />);

		expect(screen.getByDisplayValue(mockProps.value)).toBeOnTheScreen();
	});

	it('should update the value', () => {
		render(<SearchInput {...mockProps} />);

		fireEvent.changeText(screen.getByDisplayValue(mockProps.value), 'New Value');

		expect(mockProps.onChangeText).toHaveBeenCalledWith('New Value');
	});

	it('should call an search by text on button press', () => {
		render(<SearchInput {...mockProps} />);

		fireEvent.press(screen.getByLabelText('Search by Text'));

		expect(mockProps.onSearchPress).toHaveBeenCalled();
	});

	it('should call an search by location on button press', () => {
		render(<SearchInput {...mockProps} />);

		fireEvent.press(screen.getByLabelText('Search by Location'));

		expect(mockProps.onLocationPress).toHaveBeenCalled();
	});
});
