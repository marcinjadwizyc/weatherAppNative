import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Container } from './Container';

const text = 'Children';

describe('Container', () => {
	it('should render the children', () => {
		render(
			<Container>
				<Text>{text}</Text>
			</Container>,
		);

		expect(screen.getByText(text)).toBeTruthy();
	});
});
