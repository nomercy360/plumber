import { createEffect, createSignal, For } from 'solid-js';
import Navbar from '~/components/Navbar';
import { getCartItems, getTotalItems } from '~/hooks/useCart';

export default function Home() {
  const [shippingOption, setShippingOption] = createSignal('standard');
  const [discount, setDiscount] = createSignal(0);
  const [promoCode, setPromoCode] = createSignal('');

  createEffect(() => {
    console.log('Shipping option:', shippingOption());
  });

  const fetchDiscount = async () => {
    if (!promoCode()) return;
    await new Promise((resolve) => setTimeout(resolve, 400));
    setDiscount(10);
  };

  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [address, setAddress] = createSignal('');
  const [country, setCountry] = createSignal('');
  const [zip, setZip] = createSignal('');
  const [phone, setPhone] = createSignal('');

  const total = '$1400';

  return (
    <div>
      <Navbar style={'light'} />
      <main class='mt-14 flex items-center justify-center p-10'>
        <div class='grid max-w-7xl grid-cols-2 gap-10'>
          <div>
            <div class='mb-5 flex flex-row items-center justify-between'>
              <p class='text-xl'>Total</p>
              <p class='text-xl'>{total}</p>
            </div>
            <div class='mb-8 flex flex-row items-center justify-between'>
              <p class='uppercase'>{getTotalItems()} items in bag</p>
              <p>{total}</p>
            </div>
            <div class='mb-10 flex flex-col items-center justify-between gap-6'>
              <For each={getCartItems()}>
                {(item) => (
                  <div class='flex w-full flex-row items-start justify-between'>
                    <div class='flex flex-row items-center gap-3'>
                      <img
                        alt=''
                        class='h-10 w-10 rounded-full'
                        src='/images/thumb.png'
                      />
                      <div class='flex flex-col'>
                        <p>{item.name}</p>
                        <p class='text-xs text-gray'>XS, Blue</p>
                      </div>
                    </div>
                    <p>${item.price}</p>
                  </div>
                )}
              </For>
            </div>
            <div class='mb-3 flex flex-row items-center justify-between'>
              <p class='uppercase'>Shipping</p>
              <p>$30</p>
            </div>
            <div class='mb-10 flex flex-col items-start justify-start'>
              <ShippingButton
                title='Standard Shipping'
                description='3-5 business days'
                price='$30'
                selected={shippingOption() === 'standard'}
                onClick={() => setShippingOption('standard')}
              />
              <ShippingButton
                title='Express Shipping'
                description='1-2 business days'
                price='$50'
                selected={shippingOption() === 'express'}
                onClick={() => setShippingOption('express')}
              />
            </div>
            <div class='mb-3 flex flex-row items-center justify-between'>
              <p class='uppercase'>Discount</p>
              <p>-{discount()}%</p>
            </div>
            <div class='mb-8 flex h-11 flex-row items-center rounded-xl bg-light-gray px-3'>
              <input
                class='w-full bg-transparent focus:outline-none'
                placeholder='Enter discount code'
                type='text'
                onInput={(e) => setPromoCode(e.currentTarget.value)}
              />
              <button
                classList={{
                  'font-medium': true,
                  'text-light-green': discount() !== 0,
                }}
                onClick={fetchDiscount}>
                {discount() === 0 ? 'Apply' : 'Applied'}
              </button>
            </div>
          </div>
          <div class='rounded-xl bg-light-gray p-5'>
            <p class='text-xl'>Fill in info for the delivery</p>
            <p class='text-gray'>
              Use identical information from recipient's documents.
            </p>
            <input
              class='mt-4 h-11 w-full rounded-xl bg-white p-3'
              placeholder='Name'
              type='text'
              onInput={(e) => setName(e.currentTarget.value)}
            />
            <input
              class='mt-4 h-11 w-full rounded-xl bg-white p-3'
              placeholder='Email'
              type='email'
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              class='mt-4 h-11 w-full rounded-xl bg-white p-3'
              placeholder='Address'
              type='text'
              onInput={(e) => setAddress(e.currentTarget.value)}
            />
            <input
              class='mt-4 h-11 w-full rounded-xl bg-white p-3'
              placeholder='Country'
              type='text'
              onInput={(e) => setCountry(e.currentTarget.value)}
            />
            <input
              class='mt-4 h-11 w-full rounded-xl bg-white p-3'
              placeholder='ZIP'
              type='text'
              onInput={(e) => setZip(e.currentTarget.value)}
            />
            <input
              class='mt-4 h-11 w-full rounded-xl bg-white p-3'
              placeholder='Phone'
              type='text'
              onInput={(e) => setPhone(e.currentTarget.value)}
            />
            <button class='mt-8 h-11 w-40 rounded-3xl bg-black text-white'>
              Checkout <span class='text-gray'> {total}</span>
            </button>
            <p class='mb-14 mt-10 text-xs'>
              By placing an order, you agree to our{' '}
              <a href='#' class='text-light-purple'>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href='#' class='text-light-purple'>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function ShippingButton(props: {
  title: string;
  description: string;
  price: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      classList={{
        'flex w-full flex-row items-center justify-between rounded-xl p-3 text-start':
          true,
        'bg-lighter-purple': props.selected,
        'bg-white': !props.selected,
      }}
      onClick={props.onClick}>
      <div>
        <p
          classList={{
            'text-purple': props.selected,
            'text-black': !props.selected,
          }}>
          {props.title}
        </p>
        <p
          classList={{
            'text-xs': true,
            'text-gray': !props.selected,
            'text-light-purple': props.selected,
          }}>
          {props.description}
        </p>
      </div>
      <div class='flex flex-row items-center gap-1'>
        <p
          classList={{
            'text-black': props.selected,
            'text-gray': !props.selected,
          }}>
          {props.price}
        </p>
        <div
          classList={{
            'flex size-4 items-center justify-center rounded-full': true,
            'bg-purple': props.selected,
            'bg-white border border-gray': !props.selected,
          }}>
          <div
            classList={{
              'size-1.5 rounded-full': true,
              'bg-lighter-purple': props.selected,
              'bg-white': !props.selected,
            }}></div>
        </div>
      </div>
    </button>
  );
}
