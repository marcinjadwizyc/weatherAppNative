import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';

import { ScreenHeader } from './ScreenHeader';

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useRoute: () => ({
		name: '',
	}),
}));

describe('ScreenHeader', () => {
	it('should render the icons', () => {
		render(<ScreenHeader />, { wrapper: NavigationContainer });

		expect(screen.getByLabelText('Go Back')).toBeOnTheScreen();
		expect(screen.getByLabelText('Go to Favorites')).toBeOnTheScreen();
		expect(screen.getByLabelText('Toggle Theme')).toBeOnTheScreen();
	});
});
