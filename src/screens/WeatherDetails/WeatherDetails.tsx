import { Button, Container, ExtraInfo } from '@components';
import { useAppContext, useThemeContext } from '@context';
import { useNavigation } from '@react-navigation/native';
import { Fragment } from 'react';
import { Text, View } from 'react-native';

import { styles } from './WeatherDetails.styles';
import { themeStyles } from '@styles';

export const WeatherDetails = () => {
	const { favoriteLocation, setFavoriteLocation, locationData } = useAppContext();
	const { goBack } = useNavigation();
	const { theme } = useThemeContext();

	const fontClass = themeStyles[`font_${theme}`];

	const isFavoriteLocation = favoriteLocation === locationData?.name;

	const handleMakeFavoritePress = () => {
		if (locationData) {
			setFavoriteLocation(locationData.name);
		}
	};

	return (
		<Container>
			<Button onPress={goBack}>Go Back</Button>
			{locationData && (
				<Fragment>
					<View style={styles.container}>
						<Text style={[styles.city, fontClass]}>{locationData.name}</Text>
						<Text style={[styles.temp, fontClass]}>{locationData.main.temp.toFixed()}&deg;C</Text>
					</View>
					<View style={[styles.extraInfoContainer, themeStyles[`card_${theme}`]]}>
						<ExtraInfo
							value={`${locationData.main.feels_like.toFixed()}\u00B0C`}
							description='Feels like'
						/>
						<ExtraInfo value={`${locationData.main.humidity}%`} description='Humidity' />
						<ExtraInfo value={`${locationData.main.pressure} hpa`} description='Pressure' />
					</View>
					{!isFavoriteLocation && <Button onPress={handleMakeFavoritePress}>Make Favorite</Button>}
				</Fragment>
			)}
		</Container>
	);
};
