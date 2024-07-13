import { AppContextProvider, ThemeContextProvider } from '@context';
import { Outfit_400Regular, Outfit_800ExtraBold, useFonts } from '@expo-google-fonts/outfit';
import { StackNavigator } from '@navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { Fragment, useEffect } from 'react';

const App = () => {
	const [fontLoaded, fontError] = useFonts({
		Outfit_400Regular,
		Outfit_800ExtraBold,
	});

	useEffect(() => {
		if (fontLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontLoaded]);

	if (!fontLoaded && !fontError) {
		return null;
	}

	return (
		<Fragment>
			<ThemeContextProvider>
				<AppContextProvider>
					<NavigationContainer>
						<StackNavigator />
					</NavigationContainer>
				</AppContextProvider>
			</ThemeContextProvider>
		</Fragment>
	);
};

registerRootComponent(App);
