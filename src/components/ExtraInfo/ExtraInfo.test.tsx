import { render, screen } from '@testing-library/react-native';

import { ExtraInfo } from './ExtraInfo';

const value = 'Value';
const description = 'Description';

describe('ExtraInfo', () => {
	it('should render the values & description', () => {
		render(<ExtraInfo value={value} description={description} />);
		expect(screen.getByText(value)).toBeTruthy();
		expect(screen.getByText(description)).toBeTruthy();
	});
});
