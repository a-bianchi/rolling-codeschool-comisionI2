import React from 'react';
import { render } from '@testing-library/react';
import TitleTable from './TitleTable';

test('Testeo mi componente titletable', () => {
  const { getByText } = render(<TitleTable />);
  const linkElement = getByText(/Tabla de posts/i);
  expect(linkElement).toBeInTheDocument();
});


