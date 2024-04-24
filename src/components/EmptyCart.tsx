import Icons from './Icons';
import NavbarCart from '~/components/NavbarCart';

export default function EmptyCart() {
  return (
    <main class='flex h-screen w-full flex-col items-center justify-start bg-white'>
      <NavbarCart />
      <div class='flex h-full flex-col items-center justify-between p-8 sm:justify-center'>
        <div></div>
        <div class='flex max-w-72 flex-col items-center justify-center text-center sm:max-w-sm'>
          <Icons.emptyCart class='h-36 w-36' />
          <p class='-mt-12 text-lg sm:mb-2.5 sm:text-xl'>Your bag is empty</p>
          <p class='mb-8 text-sm sm:text-base'>
            Add an item as soon as possible, and we will deliver this beauty to
            you.
          </p>
        </div>
        <div class='flex w-full flex-col items-center justify-center'>
          <button class='mb-4 h-11 w-56 rounded-3xl bg-gray text-black'>
            Restore Bag
          </button>
          <button
            class='h-11 w-56 rounded-3xl bg-black text-white'
            onClick={() => window.history.back()}>
            Back to shopping
          </button>
        </div>
      </div>
    </main>
  );
}
