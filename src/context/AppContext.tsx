import { getFromStorage, saveToStorage } from '@utils';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface FavoriteLocation {
	id: number;
	name: string;
}

interface IAppContext {
	theme: Theme;
	favoriteLocations: FavoriteLocation[];
	toggleTheme: () => void;
	setFavoriteLocations: Dispatch<SetStateAction<FavoriteLocation[]>>;
}

interface AppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({
	theme: 'light',
	favoriteLocations: [],
	toggleTheme: () => {},
	setFavoriteLocations: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const themeStorageKey = 'weatherAppNative_theme';
	const favoritesStorageKey = 'weatherAppNative_favorites';

	const [theme, setTheme] = useState<Theme>('light');
	const [favoriteLocations, setFavoriteLocations] = useState<FavoriteLocation[]>([]);

	const toggleTheme = () => setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));

	const handleSaveThemeToStorage = async () => {
		await saveToStorage(themeStorageKey, theme);
	};

	const handleLoadThemeFromStorage = async () => {
		const theme = await getFromStorage(themeStorageKey);

		setTheme(theme as Theme);
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
