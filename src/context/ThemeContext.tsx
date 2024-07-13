import { createContext, ReactNode, useContext, useState } from 'react';

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
	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
		setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
	};

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
