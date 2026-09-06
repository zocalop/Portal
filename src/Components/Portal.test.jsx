
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Portal from './Portal.jsx';

test('renders the portal text and link', () => {
  render(<Portal />);

  const portalLink = screen.getByText('Quod Est Forma Somniorum');

  expect(portalLink).toBeInTheDocument();
  expect(portalLink).toHaveAttribute('href', '/derive');
});
