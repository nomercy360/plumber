import Icons from './Icons';
import { createEffect, createSignal, Show } from 'solid-js';
import { getTotalItems, initCart } from '~/lib/cart';
import GiftCard from '~/components/GiftCard';

export default function Navbar(props: { style: 'dark' | 'light' }) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  createEffect(() => {
    initCart();
  }, []);

  createEffect(() => {
    if (isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const [isGiftCardOpen, setIsGiftCardOpen] = createSignal(false);

  const openGiftCard = () => {
    setIsMenuOpen(false);
    setIsGiftCardOpen(true);
  };

  return (
    <div class='w-full'>
      <GiftCard isOpen={isGiftCardOpen()} setIsOpen={setIsGiftCardOpen} />
      <nav
        class={`flex h-14 w-full flex-row items-center justify-between bg-transparent p-6 text-base ${props.style === 'dark' ? 'text-white' : 'text-black'}`}>
        <a href='/'>
          <Icons.logo
            class={`h-6 w-32 ${props.style === 'dark' ? 'text-white' : 'fill-black stroke-black'}`}
          />
        </a>
        <div class='flex flex-row items-center justify-between gap-3'>
          <a href='#' class='py-1'>
            <Icons.translate
              classList={{
                'h-5 w-5 sm:h-5 sm:w-6': true,
                'text-white': props.style === 'dark',
                'text-black': props.style === 'light',
              }}
            />
          </a>
          <button onClick={() => openGiftCard()} class='py-1'>
            <Icons.gift
              classList={{
                'h-5 w-5 sm:h-5 sm:w-6': true,
                'text-white': props.style === 'dark',
                'text-black': props.style === 'light',
              }}
            />
          </button>
          <CartButton cartItems={getTotalItems()} style={props.style} />
        </div>
      </nav>
    </div>
  );
}

const CartButton = (props: { cartItems: number; style: 'dark' | 'light' }) => {
  return (
    <a href='/checkout'>
      <div class='relative flex h-5 w-5 items-center justify-center sm:h-5 sm:w-6'>
        <span
          classList={{
            'absolute -bottom-1 left-0 flex size-3 items-center justify-center rounded-full text-[8px] text-white':
              true,
            'bg-violet': props.cartItems > 0,
            'bg-button': props.cartItems === 0,
          }}>
          {props.cartItems}
        </span>
        <Icons.cart
          classList={{
            'h-5 w-5 sm:h-5 sm:w-6': true,
            'text-white': props.style === 'dark',
            'text-black': props.style === 'light',
          }}
        />
      </div>
    </a>
  );
};
