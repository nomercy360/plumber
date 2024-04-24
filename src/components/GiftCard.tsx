import { createEffect, createSignal, Show } from 'solid-js';
import Icons from '~/components/Icons';
import StepperButton from '~/components/StepperButton';

export default function GiftCard(props: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const MOBILE_BREAKPOINT = 640;

  const [email, setEmail] = createSignal('');
  const [recipientEmail, setRecipientEmail] = createSignal('');
  const [receivingDate, setReceivingDate] = createSignal('');
  const [receivingTime, setReceivingTime] = createSignal('');
  const [amount, setAmount] = createSignal(100);

  const increaseAmount = () => {
    if (amount() >= 1000) return;
    setAmount(amount() + 50);
  };

  const decreaseAmount = () => {
    if (amount() <= 50) return;
    setAmount(amount() - 50);
  };

  createEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target === document.getElementById('gift-card')) {
        props.setIsOpen(false);
      }
    });

    return () => {
      document.removeEventListener('click', () => {});
    };
  });

  return (
    <Show when={props.isOpen}>
      <div class='items center fixed left-0 top-0 z-50 flex h-screen w-full justify-center overflow-auto bg-white/10 backdrop-blur-sm sm:pt-28'>
        <div class='relative flex h-full min-h-fit w-full max-w-7xl flex-col items-center justify-between bg-[url(/images/gift-card-bg-mobile.png)] bg-cover bg-center px-5 py-7 sm:rounded-t-2xl sm:bg-[url(/images/gift-card-bg.png)]'>
          <button
            onClick={() => props.setIsOpen(false)}
            class='absolute right-5 top-5'>
            <Icons.close class='size-5 text-white' />
          </button>
          <div class='flex max-w-sm flex-col items-center justify-center text-center text-white'>
            <div class='flex flex-row items-center gap-2'>
              <Icons.logo class='h-6 w-24 text-white sm:w-32' />
              <span class='text-xl'>Gift Card</span>
            </div>
            <p class='mt-2.5 text-sm sm:text-base'>
              Send a compliment to your loved ones and provide them with the
              opportunity to choose. We'll send a virtual gift card to their
              email at the specified date and time. The card can be used
              multiple times until fully redeemed.
            </p>
          </div>
          <div class='mt-14 flex w-[280px] flex-col items-center gap-4'>
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
            <div class='flex h-11 w-full flex-row items-center justify-between rounded-lg bg-white pl-3 pr-1.5'>
              <p class='text-sm text-black sm:text-base'>${amount()}</p>
              <StepperButton
                onIncrease={increaseAmount}
                onDecrease={decreaseAmount}
              />
            </div>
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
