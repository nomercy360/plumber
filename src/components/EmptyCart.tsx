import Icons from './Icons';

export default function EmptyCart() {
  return (
    <main class='relative flex h-screen w-full items-center justify-center bg-white'>
      <nav class='absolute left-0 top-0 flex w-full flex-row  items-center justify-between p-5'>
        <Icons.logo class='h-6 w-32' />
        <button onClick={() => window.history.back()}>
          <Icons.close class='size-5' />
        </button>
      </nav>
      <div class='flex h-full flex-col items-center justify-between p-8 sm:justify-center'>
        <div></div>
        <div class='flex max-w-72 flex-col items-center justify-center text-center sm:max-w-sm'>
          <Icons.emptyCart class='h-36 w-36' />
          <p class='-mt-12 mb-2.5 text-lg sm:text-xl'>Your bag is empty</p>
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
      ;
    </main>
  );
}
