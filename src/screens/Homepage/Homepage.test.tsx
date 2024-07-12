import { useAppContext } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';

import { Homepage } from './Homepage';

jest.mock('../../context', () => ({
	useAppContext: jest.fn(),
}));

describe('Homepage', () => {
	it('should render empty state', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			currentLocation: '',
		});

		render(
			<NavigationContainer>
				<Homepage />
			</NavigationContainer>,
		);

		expect(screen.getByText('Search location to see the weather data')).toBeTruthy();
	});

	it('should render the weather data', async () => {
		(useAppContext as jest.Mock).mockReturnValue({
			locationData: {
				cod: 200,
				name: 'Poznań',
				main: {
					temp: 20,
				},
				weather: [
					{
						description: 'Cloudy',
					},
				],
			},
		});

		render(
			<NavigationContainer>
				<Homepage />
			</NavigationContainer>,
		);

		expect(screen.getByText('Poznań')).toBeTruthy();
		expect(screen.getByText('See More')).toBeTruthy();
	});

	it('should render error state', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			locationData: {
				cod: '404',
			},
		});

		render(
			<NavigationContainer>
				<Homepage />
			</NavigationContainer>,
		);

		expect(screen.getByText("Couldn't find the location, please try again")).toBeTruthy();
	});
});
