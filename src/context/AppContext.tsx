import { getFromStorage, saveToStorage } from '@utils';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface IFavoriteLocation {
	id: number;
	name: string;
}

interface IAppContext {
	favoriteLocations: IFavoriteLocation[];
	theme: Theme;
	setFavoriteLocations: Dispatch<SetStateAction<{ name: string; id: number }[]>>;
	toggleTheme: () => void;
}

interface AppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({
	favoriteLocations: [],
	theme: 'light',
	setFavoriteLocations: () => {},
	toggleTheme: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const favoritesStorageKey = 'weatherAppNative_favorites';
	const themeStorageKey = 'weatherAppNative_theme';

	const [favoriteLocations, setFavoriteLocations] = useState<IFavoriteLocation[]>([]);
	const [theme, setTheme] = useState<Theme>('light');

	const handleSaveThemeToStorage = async () => {
		saveToStorage(themeStorageKey, theme);
	};

	const handleLoadThemeFromStorage = async () => {
		const theme = await getFromStorage(themeStorageKey);

		setTheme(theme as Theme);
	};

	const handleSaveFavoritesToStorage = async () => {
		saveToStorage(favoritesStorageKey, JSON.stringify(favoriteLocations));
	};

	const toggleTheme = () => setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));

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
	}, [favoriteLocations]);

	useEffect(() => {
		handleSaveThemeToStorage();
	}, [theme]);

	return (
		<AppContext.Provider
			value={{
				theme,
				favoriteLocations,
				toggleTheme,
				setFavoriteLocations,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
