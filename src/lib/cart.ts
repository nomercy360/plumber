import { createStore } from 'solid-js/store';

const initialState = {
  items: [] as CartItem[],
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const [cart, setCart] = createStore(initialState);

export const addToCart = (item: CartItem) => {
  setCart('items', [...cart.items, item]);
  localStorage.setItem('cart', JSON.stringify(cart.items));
};

export const getTotalItems = () => cart.items.length;

export const getCartItems = () => cart.items;

export const initCart = () => {
  const items = localStorage.getItem('cart');
  if (items) {
    setCart('items', JSON.parse(items));
  }
};
