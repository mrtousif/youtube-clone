import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading test', () => {
    test('renders correctly', () => {
        const result = render(<Loading />);
        expect(result).toMatchSnapshot();
    });
});
