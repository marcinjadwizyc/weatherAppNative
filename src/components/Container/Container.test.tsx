import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Container } from './Container';

const text = 'Children';

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useRoute: () => ({
		name: '',
	}),
}));

describe('Container', () => {
	it('should render the children', () => {
		render(
			<Container>
				<Text>{text}</Text>
			</Container>,
			{ wrapper: NavigationContainer },
		);

		expect(screen.getByText(text)).toBeOnTheScreen();
	});
});
