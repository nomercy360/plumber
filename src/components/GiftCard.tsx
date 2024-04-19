import { createEffect, createSignal, Show } from 'solid-js';
import Icons from '~/components/Icons';

export default function GiftCard(props: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  createEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const [email, setEmail] = createSignal('');
  const [recipientEmail, setRecipientEmail] = createSignal('');
  const [receivingDate, setReceivingDate] = createSignal('');
  const [receivingTime, setReceivingTime] = createSignal('');
  const [amount, setAmount] = createSignal(100);

  return (
    <Show when={props.isOpen}>
      <div class='items center fixed left-0 top-0 z-50 flex h-screen w-full justify-center bg-white sm:pt-28'>
        <div class='relative flex w-full max-w-7xl flex-col items-center justify-between bg-[url(/images/gift-card-bg-mobile.png)] bg-cover bg-center px-5 py-7 sm:rounded-t-2xl sm:bg-[url(/images/gift-card-bg.png)]'>
          <button
            onClick={() => props.setIsOpen(false)}
            class='absolute right-5 top-5'>
            <Icons.close class='size-5 text-white' />
          </button>
          <div class='max-w-sm text-center text-white'>
            <h1 class='text-lg sm:text-xl'>PLUM® Gift Card</h1>
            <p class='mt-2.5 text-sm sm:text-base'>
              Send a compliment to your loved ones and provide them with the
              opportunity to choose. We'll send a virtual gift card to their
              email at the specified date and time. The card can be used
              multiple times until fully redeemed.
            </p>
          </div>
          <div class='flex w-[280px] flex-col items-center gap-4'>
            <input
              class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
              placeholder='Your email'
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
              placeholder='Recipient email'
              value={recipientEmail()}
              onInput={(e) => setRecipientEmail(e.currentTarget.value)}
            />
            <input
              class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
              placeholder='Receiving date'
              value={receivingDate()}
              onInput={(e) => setReceivingDate(e.currentTarget.value)}
            />
            <input
              class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
              placeholder='Receiving time'
              value={receivingTime()}
              onInput={(e) => setReceivingTime(e.currentTarget.value)}
            />
            <input
              class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
              placeholder='Amount'
              value={`$${amount()}`}
              onInput={(e) => setAmount(e.currentTarget.value as any)}
            />
            <button class='h-11 w-full rounded-3xl bg-gray text-sm sm:text-base'>
              Checkout • ${amount()}
            </button>
            <p class='text-center text-xs text-white'>
              By clicking checkout, you are agreeing with Privacy Policy and
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </Show>
  );
}
