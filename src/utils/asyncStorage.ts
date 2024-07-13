import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (key: string, data: string) => {
	try {
		await AsyncStorage.setItem(key, data);
	} catch (error) {
		console.log(error);
	}
};

export const getFromStorage = async (key: string) => {
	try {
		const data = await AsyncStorage.getItem(key);

		return data;
	} catch (error) {
		console.log(error);
	}
};
