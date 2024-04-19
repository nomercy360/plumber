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
        Check n***@proton.me for the order confirmation letter. Once the order
        is ready, we will send you a tracking number. If you want to be in the
        know about all our new drops, why not give us a follow on Instagram?
      </p>
      <Switch fallback={<div />}>
        <Match when={emailSent()}>
          <div class='mt-5 flex h-14 w-full flex-row items-center justify-between rounded-lg bg-light-green/60 p-3 sm:mt-8'>
            <div class='flex flex-row items-center justify-start gap-2.5'>
              <Icons.check class='size-4 fill-light-green text-light-green' />
              <p class='text-sm text-light-green'>Subscribed</p>
            </div>
            <button
              class='text-light-green'
              onClick={() => setEmailSent(false)}>
              <Icons.close class='size-4 fill-light-green' />
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
