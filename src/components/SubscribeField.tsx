export default function SubscribeField() {
  return (
    <div class='mt-5 flex h-10 w-full flex-row items-center justify-between rounded-3xl bg-violet/10 px-3'>
      <input
        type='email'
        placeholder='Get 5% by subscribing to our newsletter'
        class='h-full w-full border-none bg-transparent text-sm text-black placeholder-black outline-none sm:text-base'
      />
      <button class='text-violet'>Subscribe</button>
    </div>
  );
}
