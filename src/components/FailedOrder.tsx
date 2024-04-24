import Icons from '~/components/Icons';
import NavbarCart from '~/components/NavbarCart';

export default function FailedOrder() {
  return (
    <main class='flex h-screen w-full flex-col items-center justify-start bg-white'>
      <NavbarCart />
      <div class='flex h-full flex-col items-center justify-between p-8 sm:justify-center'>
        <div></div>
        <div class='flex max-w-sm flex-col items-center gap-5 text-center'>
          <Icons.failmark />
          <p class='-mt-14 max-w-xs text-lg sm:text-xl'>Wooops...</p>
          <p class='max-w-xs text-lg sm:text-xl'>something went wrong</p>
          <p>
            Check n***@proton.me for the order confirmation letter. Once the
            order is ready, we will send you a tracking number. If you want to
            be in the know about all our new drops, why not give us a follow on
            Instagram?
          </p>
        </div>
        <button
          onClick={() => window.history.back()}
          class='mt-5 flex h-11 w-56 items-center justify-center rounded-3xl bg-black text-center text-white'>
          Try again
        </button>
      </div>
    </main>
  );
}
