import { createSignal } from 'solid-js';

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
    <div class='mt-24 max-w-sm text-center'>
      <p class='text-xl'>PLUM® Secret Store</p>
      <p class='mt-3 text-base sm:mt-4'>
        Check n***@proton.me for the order confirmation letter. Once the order
        is ready, we will send you a tracking number. If you want to be in the
        know about all our new drops, why not give us a follow on Instagram?
      </p>
      <div class='bg-gray-bg mt-5 flex h-14 flex-row items-center justify-between rounded-xl p-3 sm:mt-8'>
        <input
          type='email'
          placeholder='Email'
          onInput={(e: any) => setEmail(e.target.value)}
          class='placeholder:text-gray-dark w-full bg-transparent focus:outline-none'
        />
        <button class='text-gray-dark text-base uppercase' onClick={subscribe}>
          Apply
        </button>
      </div>
    </div>
  );
}
