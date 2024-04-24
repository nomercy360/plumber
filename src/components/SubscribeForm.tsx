import { createSignal, Match, Show, Switch } from 'solid-js';
import Icons from '~/components/Icons';

export default function SubscribeForm(props: { style: 'dark' | 'light' }) {
  const [email, setEmail] = createSignal('');
  const [emailSent, setEmailSent] = createSignal(false);

  const subscribe = async () => {
    if (!emailRegex.test(email())) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setEmailSent(true);
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return (
    <div
      class='flex max-w-md flex-col items-center justify-center p-8 text-center'
      classList={{
        'text-white': props.style === 'dark',
        'text-black': props.style === 'light',
      }}>
      <div class='flex flex-row items-center gap-2'>
        <Icons.logo
          class='h-6 w-24 sm:w-32'
          classList={{
            'text-white': props.style === 'dark',
            'text-black': props.style === 'light',
          }}
        />
        <span class='text-xl'>Secret Store</span>
      </div>
      <p class='mt-3 text-base sm:mt-4'>
        Receive monthly news from the brand, a letter from the founders,
        exclusive product discounts, and enjoy a perpetual 5% off
      </p>
      <Switch fallback={<div />}>
        <Match when={emailSent()}>
          <div class='mt-5 flex h-14 w-full flex-row items-center justify-between rounded-lg bg-light-green p-3 sm:mt-8'>
            <div class='flex flex-row items-center justify-start gap-2.5'>
              <Icons.check class='size-4 fill-white text-white' />
              <p class='text-sm text-white'>Subscribed</p>
            </div>
            <button class='p-2 text-white' onClick={() => setEmailSent(false)}>
              <Icons.close class='size-4 fill-white' />
            </button>
          </div>
        </Match>
        <Match when={!emailSent()}>
          <div class='mt-5 flex h-14 w-full flex-row items-center justify-between rounded-xl bg-gray p-3 sm:mt-8'>
            <input
              type='email'
              placeholder='Email'
              onInput={(e: any) => setEmail(e.target.value)}
              class='w-full bg-transparent text-black placeholder:text-dark-gray focus:outline-none'
            />
            <Show when={email()}>
              <button
                class='text-base uppercase text-dark-gray'
                onClick={subscribe}>
                Subscribe
              </button>
            </Show>
          </div>
        </Match>
      </Switch>
    </div>
  );
}
