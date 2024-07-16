import { useAppContext } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { forecastDataMock, weatherDataMock } from '@utils';

import { WeatherDetails } from './WeatherDetails';

jest.mock('../../context', () => ({
	useAppContext: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useRoute: () => ({
		name: '',
		params: {
			name: 'Poznań',
		},
	}),
}));

describe('WeatherDetails', () => {
	it('should render weather detials', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			favoriteLocations: [],
			currentWeatherData: weatherDataMock,
			forecastWeatherData: forecastDataMock,
		});

		render(
			<NavigationContainer>
				<WeatherDetails />
			</NavigationContainer>,
		);

		expect(screen.getByText('Poznań')).toBeOnTheScreen();
		expect(screen.getByText('Humidity')).toBeOnTheScreen();
		expect(screen.getByText('Feels like')).toBeOnTheScreen();
		expect(screen.getByText('Pressure')).toBeOnTheScreen();
		expect(screen.getByText('Five Day Forecast:')).toBeOnTheScreen();
	});

	it('should render favorite button if location not favorite', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			favoriteLocations: [],
			currentWeatherData: weatherDataMock,
			forecastWeatherData: forecastDataMock,
		});

		render(
			<NavigationContainer>
				<WeatherDetails />
			</NavigationContainer>,
		);

		expect(screen.getByText('Make Favorite')).toBeOnTheScreen();
	});

	it('should not render favorite button if location favorite', () => {
		(useAppContext as jest.Mock).mockReturnValue({
			favoriteLocations: [{ id: weatherDataMock.id, name: weatherDataMock.name }],
			currentWeatherData: weatherDataMock,
			forecastWeatherData: forecastDataMock,
		});

		render(
			<NavigationContainer>
				<WeatherDetails />
			</NavigationContainer>,
		);

		expect(screen.queryByText('Make Favorite')).not.toBeOnTheScreen();
	});
});
