
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import TraderProductList from './TraderProductList.jsx';
import cartReducer from '../Cart/CartSlice.jsx';

function renderWithStore() {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

  render(
    <Provider store={store}>
      <TraderProductList />
    </Provider>
  );

  return store;
}

test('renders products and add-to-purchase buttons', () => {
  renderWithStore();
  expect(screen.getAllByRole('button', {
    name: 'Add to Purchase',
  }).length).toBeGreaterThan(0);
});

test('adds a product to the cart when the button is clicked', async () => {
  renderWithStore();

  const user = userEvent.setup();

  const addButton = screen.getAllByRole('button', {
    name: 'Add to Purchase',
  })[0];

  await user.click(addButton);

  expect(
    screen.getAllByRole('button', {
      name: 'Added to Purchase',
    }).length
  ).toBeGreaterThan(0);
});

test('disables a button for the product already in the cart', () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        items: [
          {
            name: 'Test Item',
            image: 'test.jpg',
            cost: 10,
            quantity: 1,
          },
        ],
        cartLoaded: false,
      },
    },
  });

  render(
    <Provider store={store}>
      <TraderProductList />
    </Provider>
  );

  const buttons = screen.getAllByRole('button', {
    name: 'Added to Purchase',
  });

  expect(buttons.length).toBeGreaterThan(0);
  expect(buttons[0]).toBeDisabled();
});
