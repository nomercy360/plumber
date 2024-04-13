import Icons from '~/components/Icons';
import NavbarCart from '~/components/NabarCart';

export default function SuccessOrder() {
  return (
    <main class='flex h-screen w-full flex-col items-center justify-start bg-white'>
      <NavbarCart />
      <div class='flex h-full flex-col items-center justify-between p-8 sm:justify-center'>
        <div></div>
        <div class='flex max-w-sm flex-col items-center gap-5 text-center'>
          <Icons.checkmark />
          <p class='-mt-14 max-w-xs text-lg sm:text-xl'>
            Plum has received your order. So what’s next?
          </p>
          <p>
            Check n***@proton.me for the order confirmation letter. Once the
            order is ready, we will send you a tracking number. If you want to
            be in the know about all our new drops, why not give us a follow on
            Instagram?
          </p>
        </div>
        <a
          href='https://www.instagram.com/'
          class='mt-5 flex h-11 w-56 items-center justify-center rounded-3xl bg-black text-center text-white'>
          Subscribe to Instagram
        </a>
      </div>
    </main>
  );
}
