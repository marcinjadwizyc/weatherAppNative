import { getFromStorage, saveToStorage } from '@utils';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface IThemeContext {
	theme: Theme;
	toggleTheme: () => void;
}

interface ThemeContextProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
	theme: 'light',
	toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const storageKey = 'weatherAppNativeTheme';

	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
		setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		const getThemeFromStorage = async () => {
			const savedTheme = await getFromStorage(storageKey);

			if (savedTheme === 'light' || savedTheme === 'dark') {
				setTheme(savedTheme);
			}
		};

		getThemeFromStorage();
	}, []);

	useEffect(() => {
		saveToStorage(storageKey, theme);
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
