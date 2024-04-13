import { createSignal } from 'solid-js';
import Icons from '~/components/Icons';

export default function SubscribeForm() {
  const [email, setEmail] = createSignal('');

  const subscribe = () => {
    if (!emailRegex.test(email())) {
      alert('Please enter a valid email address');
      return;
    }

    alert('Subscribed!');
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return (
    <div class='mt-24 flex max-w-sm flex-col items-center justify-center p-8 text-center'>
      <div class='flex flex-row items-center gap-2'>
        <Icons.logo class='h-6 w-24 fill-black stroke-black sm:w-32' />
        <span class='text-xl'>Secret Store</span>
      </div>
      <p class='mt-3 text-base sm:mt-4'>
        Check n***@proton.me for the order confirmation letter. Once the order
        is ready, we will send you a tracking number. If you want to be in the
        know about all our new drops, why not give us a follow on Instagram?
      </p>
      <div class='mt-5 flex h-14 w-full flex-row items-center justify-between rounded-xl bg-gray p-3 sm:mt-8'>
        <input
          type='email'
          placeholder='Email'
          onInput={(e: any) => setEmail(e.target.value)}
          class='w-full bg-transparent placeholder:text-gray-dark focus:outline-none'
        />
        <button class='text-base uppercase text-gray-dark' onClick={subscribe}>
          Apply
        </button>
      </div>
    </div>
  );
}
