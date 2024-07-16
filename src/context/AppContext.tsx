import { getFromStorage, saveToStorage } from '@utils';
import { CurrentResponse } from 'openweathermap-ts/dist/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface IAppContext {
	favoriteLocations: {
		location: string;
		id: number;
	}[];
	currentLocation: string;
	locationData: CurrentResponse | undefined;
	setFavoriteLocations: Dispatch<SetStateAction<{ location: string; id: number }[]>>;
	setCurrentLocation: Dispatch<SetStateAction<string>>;
	setLocationData: Dispatch<SetStateAction<CurrentResponse | undefined>>;
}

interface AppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({
	favoriteLocations: [],
	currentLocation: '',
	locationData: undefined,
	setFavoriteLocations: () => {},
	setCurrentLocation: () => {},
	setLocationData: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const storageKey = 'weatherAppNative';

	const [favoriteLocations, setFavoriteLocations] = useState<{ location: string; id: number }[]>([]);
	const [currentLocation, setCurrentLocation] = useState('');
	const [locationData, setLocationData] = useState<CurrentResponse>();

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
				currentLocation,
				locationData,
				setFavoriteLocations,
				setCurrentLocation,
				setLocationData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
