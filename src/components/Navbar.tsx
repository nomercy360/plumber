import Icons from './Icons';
import { createEffect, createSignal, Show } from 'solid-js';
import { addToCart, getTotalItems, initCart } from '~/hooks/useCart';

export default function Navbar(props: { style: 'dark' | 'light' }) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen());

    if (isMenuOpen()) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  createEffect(() => {
    initCart();
  }, []);

  return (
    <nav
      class={`flex w-full flex-row items-center justify-between gap-3 bg-transparent p-5 text-base ${props.style === 'dark' ? 'text-white' : 'text-black'}`}>
      <a href='/'>
        <Icons.logo
          class={`h-6 w-32 sm:h-10 sm:w-64 ${props.style === 'dark' ? 'text-white' : 'fill-black stroke-black'}`}
        />
      </a>
      <div class='hidden flex-row items-center justify-between gap-3 sm:flex'>
        <a href='#'>Gift Card</a>
        <a href='#'>Bespoke & Tailoring</a>
        <a href='#'>About</a>
        <a href='/checkout'>
          <Icons.cart class='size-4' />
          <span class='text-xs'>{getTotalItems()}</span>
        </a>
      </div>
      <div class='flex flex-row items-center justify-between gap-3 sm:hidden'>
        <a href='#'>
          <Icons.cart class='size-4' />
        </a>
        <button onClick={handleMenu}>
          <Icons.menu class='size-4' />
        </button>
      </div>
      <Show when={isMenuOpen()}>
        <div class='absolute left-0 top-0 z-50 flex size-full flex-col items-center justify-center bg-white'>
          <button onClick={handleMenu}>
            <Icons.close class='absolute right-7 top-8 size-4' />
          </button>
          <a href='#'>Gift Card</a>
          <a href='#'>Bespoke & Tailoring</a>
          <a href='#'>About</a>
        </div>
      </Show>
    </nav>
  );
}
