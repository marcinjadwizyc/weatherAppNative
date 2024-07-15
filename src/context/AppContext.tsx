import { getFromStorage, saveToStorage } from '@utils';
import { CurrentResponse } from 'openweathermap-ts/dist/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface IAppContext {
	favoriteLocation: string;
	currentLocation: string;
	locationData: CurrentResponse | undefined;
	setFavoriteLocation: (value: string) => void;
	setCurrentLocation: (value: string) => void;
	setLocationData: (value: CurrentResponse) => void;
}

interface AppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({
	favoriteLocation: '',
	currentLocation: '',
	locationData: undefined,
	setFavoriteLocation: () => {},
	setCurrentLocation: () => {},
	setLocationData: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const storageKey = 'weatherAppNative';

	const [favoriteLocation, setFavoriteLocation] = useState('');
	const [currentLocation, setCurrentLocation] = useState('');
	const [locationData, setLocationData] = useState<CurrentResponse>();

	const handleSaveToStorage = async () => {
		const savedLocation = await getFromStorage(storageKey);

		if (favoriteLocation !== savedLocation) {
			saveToStorage(storageKey, favoriteLocation);
		}
	};

	const handleLoadFromStorage = async () => {
		const location = await getFromStorage(storageKey);

		if (location) {
			setCurrentLocation(location);
			setFavoriteLocation(location);
		}
	};

	useEffect(() => {
		handleLoadFromStorage();
	}, []);

	useEffect(() => {
		handleSaveToStorage();
	}, [favoriteLocation]);

	return (
		<AppContext.Provider
			value={{
				favoriteLocation,
				currentLocation,
				locationData,
				setFavoriteLocation,
				setCurrentLocation,
				setLocationData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
