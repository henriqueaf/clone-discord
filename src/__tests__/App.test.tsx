import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders CANAIS DE TEXTO string', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CANAIS DE TEXTO/i);
  expect(linkElement).toBeInTheDocument();
});
