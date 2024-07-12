import { AppContextProvider } from '@context';
import { Outfit_400Regular, Outfit_800ExtraBold, useFonts } from '@expo-google-fonts/outfit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens, StackParamList } from '@utils';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Fragment, useEffect } from 'react';

import { Homepage, WeatherDetails } from './screens';

const App = () => {
	const Stack = createNativeStackNavigator<StackParamList>();

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
			<AppContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName={Screens.HOMEPAGE}
						screenOptions={{
							headerShown: false,
							animation: 'none',
						}}
					>
						<Stack.Screen name={Screens.HOMEPAGE} component={Homepage} />
						<Stack.Screen name={Screens.WEATHER_DETAILS} component={WeatherDetails} />
					</Stack.Navigator>
				</NavigationContainer>
			</AppContextProvider>
			<StatusBar style='light' />
		</Fragment>
	);
};

registerRootComponent(App);
