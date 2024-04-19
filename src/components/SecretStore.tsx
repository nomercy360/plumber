import { createEffect, createSignal, Show } from 'solid-js';
import Icons from '~/components/Icons';
import SubscribeForm from '~/components/SubscribeForm';

export default function SecretStore(props: {
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

  return (
    <Show when={props.isOpen}>
      <div class='items center fixed left-0 top-0 z-50 flex h-screen w-full justify-center bg-white sm:pt-28'>
        <div class='relative flex w-full max-w-7xl flex-col items-center justify-between bg-[url(/images/secret-store-bg-mobile.png)] bg-cover bg-center px-5 py-7 sm:rounded-t-2xl sm:bg-[url(/images/secret-store-bg.png)]'>
          <button
            onClick={() => props.setIsOpen(false)}
            class='absolute right-5 top-5'>
            <Icons.close class='size-5 text-white' />
          </button>
          <SubscribeForm style={'dark'} />
          <p class='text-center text-xs text-black'>
            By clicking checkout, you are agreeing with Privacy Policy and Terms
            and Conditions
          </p>
        </div>
      </div>
    </Show>
  );
}
