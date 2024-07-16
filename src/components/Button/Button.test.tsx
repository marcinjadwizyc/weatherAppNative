import { fireEvent, render, screen } from '@testing-library/react-native';

import { Button } from './Button';

const text = 'Children';
const mockOnPress = jest.fn();

describe('Button', () => {
	it('should render the text', () => {
		render(<Button onPress={mockOnPress}>{text}</Button>);

		expect(screen.getByText(text)).toBeOnTheScreen();
	});

	it('should call an action on press', () => {
		render(<Button onPress={mockOnPress}>{text}</Button>);

		fireEvent.press(screen.getByText(text));

		expect(mockOnPress).toHaveBeenCalled();
	});
});
