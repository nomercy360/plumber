import { createEffect, createSignal, For, Show } from 'solid-js';
import Navbar from '~/components/Navbar';
import { getCartItems, getTotalItems } from '~/lib/cart';

export default function Home() {
  const [shippingOption, setShippingOption] = createSignal('standard');
  const [discount, setDiscount] = createSignal(0);
  const [promoCode, setPromoCode] = createSignal('');

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

  const [total, setTotal] = createSignal(0);
  const [shippingCost, setShippingCost] = createSignal(30);

  createEffect(() => {
    let total = 0;
    getCartItems().forEach((item) => {
      total += item.price;
    });
    total += shippingCost();
    total -= (total * discount()) / 100;
    setTotal(total);
  });

  createEffect(() => {
    setShippingCost(shippingOption() === 'standard' ? 30 : 50);
  });

  return (
    <div>
      <Navbar style={'light'} />
      <main class='mt-8 flex items-center justify-center sm:mt-14'>
        <div class='max-w-7xl grid-cols-2 gap-10 p-0 sm:grid sm:p-10'>
          <div class='p-5 sm:p-0'>
            <div class='mb-5 flex flex-row items-center justify-between'>
              <p class='text-lg'>Total order</p>
              <p class='text-lg'>${total()}</p>
            </div>
            <div class='mb-5 flex flex-row items-center justify-between'>
              <p class='uppercase'>{getTotalItems()} items in bag</p>
              <p>${total()}</p>
            </div>
            <div class='mb-10 flex flex-col items-center justify-between gap-6'>
              <For each={getCartItems()}>
                {(item) => (
                  <div class='flex w-full flex-row items-start justify-between'>
                    <div class='flex flex-row items-start gap-3'>
                      <img
                        alt=''
                        class='size-10 rounded-full object-cover'
                        src='/images/thumb.png'
                      />
                      <div class='flex flex-col'>
                        <p>{item.name}</p>
                        <p class='text-xs text-gray'>{item.size}</p>
                      </div>
                    </div>
                    <p>${item.price}</p>
                  </div>
                )}
              </For>
            </div>
            <div class='mb-3 flex flex-row items-center justify-between'>
              <p class='uppercase'>Shipping</p>
              <p>${shippingCost()}</p>
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
            <div class='mb-3 flex h-11 flex-row items-center rounded-xl bg-light-gray px-3'>
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
            <div class='mb-8 h-4 w-full'>
              <Show when={discount() !== 0}>
                <p class='text-xs text-light-green'>
                  Discount has been applied to your order
                </p>
              </Show>
            </div>
          </div>
          <div class='flex flex-col items-center bg-light-gray p-5 sm:items-start sm:rounded-xl'>
            <p class='text-center text-base sm:text-start sm:text-lg'>
              Fill in info for the delivery
            </p>
            <p class='mt-1 text-center text-gray sm:text-start'>
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
              Checkout <span class='text-gray'>${total()}</span>
            </button>
            <p class='mb-14 mt-16 text-center text-xs sm:mt-8 sm:text-start'>
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
