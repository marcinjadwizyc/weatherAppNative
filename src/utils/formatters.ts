export const capitalize = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

export const asCelcius = (temp: number) => {
	return `${temp.toFixed()}°C`;
};

export const formatDate = (date: string) => {
	const temp = date.split(' ')[0].split('-').reverse().join('.').slice(0, -5);

	return temp;
};
