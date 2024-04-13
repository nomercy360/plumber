import { createStore } from 'solid-js/store';

const initialState = {
  items: [] as CartItem[],
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
};

const [cart, setCart] = createStore(initialState);

export const addToCart = (item: CartItem) => {
  const existingItem = cart.items.find((i) => i.id === item.id);
  if (existingItem) {
    setCart(
      'items',
      cart.items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  } else {
    setCart('items', [...cart.items, item]);
  }

  saveToLocalStorage();
};

export const clearCart = () => {
  setCart('items', []);
  localStorage.removeItem('cart');
};

export const decreaseQuantity = (id: number) => {
  const item = cart.items.find((i) => i.id === id);
  if (!item) return;

  if (item.quantity > 1) {
    setCart(
      'items',
      cart.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
      ),
    );
  } else {
    setCart(
      'items',
      cart.items.filter((i) => i.id !== id),
    );
  }

  saveToLocalStorage();
};

export const increaseQuantity = (id: number) => {
  setCart(
    'items',
    cart.items.map((i) =>
      i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
    ),
  );

  saveToLocalStorage();
};

export const getTotalItems = () => cart.items.length;

export const getCartItems = () => cart.items;

export const initCart = () => {
  const items = localStorage.getItem('cart');
  if (items) {
    setCart('items', JSON.parse(items));
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.items));
};
