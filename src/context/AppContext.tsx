import { getFromStorage, saveToStorage } from '@utils';
import { CurrentResponse, ThreeHourResponse } from 'openweathermap-ts/dist/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface FavoriteLocation {
	id: number;
	name: string;
}

interface IAppContext {
	theme: Theme;
	currentWeatherData: CurrentResponse | undefined;
	forecastWeatherData: ThreeHourResponse | undefined;
	favoriteLocations: FavoriteLocation[];
	toggleTheme: () => void;
	setCurrentWeatherData: Dispatch<SetStateAction<CurrentResponse | undefined>>;
	setForecastWeatherData: Dispatch<SetStateAction<ThreeHourResponse | undefined>>;
	setFavoriteLocations: Dispatch<SetStateAction<FavoriteLocation[]>>;
}

interface AppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({
	theme: 'light',
	currentWeatherData: undefined,
	forecastWeatherData: undefined,
	favoriteLocations: [],
	toggleTheme: () => {},
	setCurrentWeatherData: () => {},
	setForecastWeatherData: () => {},
	setFavoriteLocations: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const themeStorageKey = 'weatherAppNative_theme';
	const favoritesStorageKey = 'weatherAppNative_favorites';

	const [theme, setTheme] = useState<Theme>('light');
	const [currentWeatherData, setCurrentWeatherData] = useState<CurrentResponse | undefined>();
	const [forecastWeatherData, setForecastWeatherData] = useState<ThreeHourResponse | undefined>();
	const [favoriteLocations, setFavoriteLocations] = useState<FavoriteLocation[]>([]);

	const toggleTheme = () => setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));

	const handleSaveThemeToStorage = async () => {
		await saveToStorage(themeStorageKey, theme);
	};

	const handleLoadThemeFromStorage = async () => {
		const theme = await getFromStorage(themeStorageKey);

		if (theme === 'light' || theme === 'dark') {
			setTheme(theme);
		}
	};

	const handleSaveFavoritesToStorage = async () => {
		await saveToStorage(favoritesStorageKey, JSON.stringify(favoriteLocations));
	};

	const handleLoadFavoritesFromStorage = async () => {
		const rawLocations = await getFromStorage(favoritesStorageKey);
		const locations = await JSON.parse(rawLocations as string);

		if (locations) {
			setFavoriteLocations(locations);
		}
	};

	useEffect(() => {
		handleLoadFavoritesFromStorage();
		handleLoadThemeFromStorage();
	}, []);

	useEffect(() => {
		handleSaveFavoritesToStorage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favoriteLocations]);

	useEffect(() => {
		handleSaveThemeToStorage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	return (
		<AppContext.Provider
			value={{
				theme,
				currentWeatherData,
				forecastWeatherData,
				favoriteLocations,
				toggleTheme,
				setCurrentWeatherData,
				setForecastWeatherData,
				setFavoriteLocations,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
