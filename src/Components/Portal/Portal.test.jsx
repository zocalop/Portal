
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Portal from './Portal.jsx';
import Derive from '../Derive.jsx';
import { register } from './PortalAPI.js';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

vi.mock('./PortalAPI.js', () => ({
  register: vi.fn()
}));

test('renders the portal text and sucessfully registers', async () => {
  const user = userEvent.setup();

  register.mockResolvedValue({
    id: 123
  });

  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/derive" element={<Derive />} />
      </Routes>
    </MemoryRouter>
  );

  const portalText = screen.getByText('Quod Est Forma Somniorum');

  expect(portalText).toBeInTheDocument();

  await user.click(portalText);

  expect(
    screen.getByRole('button', { name: /Identify yourself/i })
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText('Stranger')
  ).toBeInTheDocument();

  await user.click(
    screen.getByRole('checkbox')
  );

  await user.click(
    screen.getByRole('button', { name: /Identify yourself/i })
  );

  expect(
     screen.getByRole('button', { name: /And your last name?/ })
  ).toBeInTheDocument();

  await user.click(
    screen.getByRole('button', { name: /And your last name?/ })
  );

  expect(
    await screen.findByText(/You are hereforth known as/i)
  ).toBeInTheDocument();
});

// Create another test that actually renders Derive upon successful registration/login
