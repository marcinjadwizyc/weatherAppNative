import { useAppContext } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';

import { FavoriteLocations } from './FavoriteLocations';

const mockFavorites = [
	{ id: 1, name: 'Poznań' },
	{ id: 2, name: 'Warszawa' },
];

jest.mock('../../context', () => ({
	useAppContext: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useRoute: () => ({
		name: '',
	}),
}));

describe('FavoriteLocation', () => {
	it('should render buttons for favorites', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			favoriteLocations: mockFavorites,
		});

		render(<FavoriteLocations />, { wrapper: NavigationContainer });

		expect(screen.getByText(mockFavorites[0].name)).toBeOnTheScreen();
		expect(screen.getByText(mockFavorites[1].name)).toBeOnTheScreen();
	});
});
