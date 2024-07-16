import { fireEvent, render, screen } from '@testing-library/react-native';

import { IconButton, IconButtonProps } from './IconButton';

const mockProps: IconButtonProps = {
	name: 'moon',
	label: 'Label',
	onPress: jest.fn(),
};

describe('IconButton', () => {
	it('should have accessibility label', () => {
		render(<IconButton {...mockProps} />);

		expect(screen.getByLabelText(mockProps.label)).toBeOnTheScreen();
	});

	it('should call an action on press', () => {
		render(<IconButton {...mockProps} />);

		fireEvent.press(screen.getByLabelText(mockProps.label));

		expect(mockProps.onPress).toHaveBeenCalled();
	});
});
