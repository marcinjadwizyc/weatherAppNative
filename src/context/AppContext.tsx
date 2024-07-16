import { getFromStorage, saveToStorage } from '@utils';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface IAppContext {
	favoriteLocations: {
		location: string;
		id: number;
	}[];
	setFavoriteLocations: Dispatch<SetStateAction<{ location: string; id: number }[]>>;
}

interface AppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({
	favoriteLocations: [],
	setFavoriteLocations: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const storageKey = 'weatherAppNative';

	const [favoriteLocations, setFavoriteLocations] = useState<{ location: string; id: number }[]>([]);

	const handleSaveToStorage = async () => {
		saveToStorage(storageKey, JSON.stringify(favoriteLocations));
	};

	const handleLoadFromStorage = async () => {
		const rawLocations = await getFromStorage(storageKey);
		const locations = await JSON.parse(rawLocations as string);

		if (locations) {
			setFavoriteLocations(locations);
		}
	};

	useEffect(() => {
		handleLoadFromStorage();
	}, []);

	useEffect(() => {
		handleSaveToStorage();
	}, [favoriteLocations]);

	return (
		<AppContext.Provider
			value={{
				favoriteLocations,
				setFavoriteLocations,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
