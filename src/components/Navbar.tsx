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
        class={`flex h-14 w-full flex-row items-center justify-between gap-3 bg-transparent p-6 text-base ${props.style === 'dark' ? 'text-white' : 'text-black'}`}>
        <a href='/'>
          <Icons.logo
            class={`h-6 w-32 ${props.style === 'dark' ? 'text-white' : 'fill-black stroke-black'}`}
          />
        </a>
        <div class='hidden flex-row items-center justify-between gap-3 sm:flex'>
          <button onClick={() => openGiftCard()}>Gift Card</button>
          <a href='#'>Bespoke & Tailoring</a>
          <a href='/about'>About</a>
          <CartButton cartItems={getTotalItems()} />
        </div>
        <div class='flex flex-row items-center justify-between gap-3 sm:hidden'>
          <CartButton cartItems={getTotalItems()} />
          <button onClick={() => setIsMenuOpen(true)}>
            <Icons.menu class='size-4' />
          </button>
        </div>
        <Show when={isMenuOpen()}>
          <div class='absolute left-0 top-0 z-50 flex size-full flex-col items-center justify-center bg-white text-black'>
            <button onClick={() => setIsMenuOpen(false)}>
              <Icons.close class='absolute right-7 top-8 size-4' />
            </button>
            <button onClick={() => openGiftCard()} class='py-1'>
              Gift Card
            </button>
            <a href='#' class='py-1'>
              Bespoke & Tailoring
            </a>
            <a href='/about' class='py-1'>
              About
            </a>
          </div>
        </Show>
      </nav>
    </div>
  );
}

const CartButton = (props: { cartItems: number }) => {
  return (
    <a href='/checkout'>
      <div class='relative flex h-4 w-5 items-center justify-center'>
        <span
          classList={{
            'absolute -bottom-1 left-0 flex size-3 items-center justify-center rounded-full text-[8px] text-white':
              true,
            'bg-purple': props.cartItems > 0,
            'bg-button': props.cartItems === 0,
          }}>
          {props.cartItems}
        </span>
        <Icons.cart class='h-4 w-5' />
      </div>
    </a>
  );
};
