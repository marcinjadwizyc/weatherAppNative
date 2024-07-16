import { useAppContext } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { weatherDataMock } from '@utils';

import { Homepage } from './Homepage';

jest.mock('../../context', () => ({
	useAppContext: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useRoute: () => ({
		name: '',
	}),
}));

describe('Homepage', () => {
	it('should render empty state', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			currentWeatherData: '',
		});

		render(
			<NavigationContainer>
				<Homepage />
			</NavigationContainer>,
		);

		expect(screen.getByText('Search location to see the weather data')).toBeOnTheScreen();
	});

	it('should render the weather data', async () => {
		(useAppContext as jest.Mock).mockReturnValue({
			currentWeatherData: weatherDataMock,
		});

		render(
			<NavigationContainer>
				<Homepage />
			</NavigationContainer>,
		);

		expect(screen.getByText(weatherDataMock.name)).toBeOnTheScreen();
		expect(screen.getByText('See More')).toBeOnTheScreen();
	});

	it('should render error state', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			currentWeatherData: {
				cod: '404',
			},
		});

		render(
			<NavigationContainer>
				<Homepage />
			</NavigationContainer>,
		);

		expect(screen.getByText("Couldn't find the location, please try again")).toBeOnTheScreen();
	});
});
