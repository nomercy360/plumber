import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';
import Navbar from '~/components/Navbar';
import {
  clearCart,
  getCartItems,
  getTotalItems,
  decreaseQuantity,
  increaseQuantity,
  initCart,
} from '~/lib/cart';
import SuccessOrder from '~/components/SuccessOrder';
import Icons from '~/components/Icons';
import Divider from '~/components/Divider';
import { useRouter } from '@solidjs/router/dist/routing';
import { createStore } from 'solid-js/store';
import EmptyCart from '~/components/EmptyCart';

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
    initCart();
  }, []);

  createEffect(() => {
    setShippingCost(shippingOption() === 'standard' ? 30 : 50);
  });

  const [orderStatus, setOrderStatus] = createSignal('');

  const placeOrder = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setOrderStatus('success');
  };

  const [step, setStep] = createSignal<
    'bag' | 'deliveryInfo' | 'measurements' | 'prePayment'
  >('bag');

  const [isFormValid, setIsFormValid] = createSignal(false);

  createEffect(() => {
    const isValid =
      name() !== '' &&
      email() !== '' &&
      address() !== '' &&
      country() !== '' &&
      zip() !== '' &&
      phone() !== '';

    setIsFormValid(isValid);
  });

  const [measurements, setMeasurements] = createStore({
    height: '',
    sleeve: '',
    waist: '',
    chest: '',
    hips: '',
  });

  const updateMeasurements = (key: string, value: string) => {
    setMeasurements(key as any, value);
  };

  const afterMeasurements = (save: boolean) => {
    if (!save) {
      setMeasurements({
        height: '',
        sleeve: '',
        waist: '',
        chest: '',
        hips: '',
      });
    }

    setStep('prePayment');
  };

  return (
    <div class='bg-gray'>
      <Show when={getTotalItems() > 0}>
        <Switch fallback={<SuccessOrder />}>
          <Match when={orderStatus() === 'success'}>
            <SuccessOrder />
          </Match>
          <Match when={!orderStatus()}>
            <Navbar style={'light'} />
            <main class='mt-8 flex w-full items-start justify-center'>
              <div class='flex min-h-screen w-full max-w-2xl flex-col rounded-xl bg-white'>
                <Switch fallback={<div></div>}>
                  <Match when={step() === 'bag'}>
                    <div class='flex flex-col rounded-t-xl bg-white p-5'>
                      <div class='flex flex-row items-center justify-between'>
                        <p class='text-lg sm:text-xl'>
                          ${total()} for ${getTotalItems()} items
                        </p>
                        <button
                          class='h-8 text-gray-light'
                          onClick={() => clearCart()}>
                          Clear
                        </button>
                      </div>
                      <div class='mt-8 flex flex-col gap-5'>
                        <For each={getCartItems()}>
                          {(item) => (
                            <div class='flex flex-row items-center justify-between'>
                              <div class='flex flex-row items-center gap-3'>
                                <img
                                  alt=''
                                  class='size-10 rounded-full object-cover'
                                  src='/images/thumb.png'
                                />
                                <div class='flex flex-col'>
                                  <p class='text-sm sm:text-base'>
                                    {item.name}{' '}
                                    {item.quantity > 1 && `x ${item.quantity}`}
                                  </p>
                                  <p class='text-xs text-gray-light sm:text-sm'>
                                    Total ${item.price}
                                  </p>
                                </div>
                              </div>
                              <div class='flex w-24 flex-row items-center justify-center rounded-lg bg-gray text-lg'>
                                <button
                                  class='flex h-8 w-full items-center justify-center'
                                  onClick={() => decreaseQuantity(item.id)}>
                                  -
                                </button>
                                <div class='h-4 w-[3px] bg-neutral-200' />
                                <button
                                  class='h-8 w-full items-center justify-center'
                                  onClick={() => increaseQuantity(item.id)}>
                                  +
                                </button>
                              </div>
                            </div>
                          )}
                        </For>
                        <div class='flex flex-row items-center justify-between'>
                          <div class='flex flex-row items-center justify-start gap-2'>
                            <div class='flex size-10 items-center justify-center rounded-full bg-gray'>
                              <Icons.tShirt class='size-6' />
                            </div>
                            <div>
                              <p class='text-sm sm:text-base'>
                                Make it fit perfectly
                              </p>
                              <p class='text-xs text-gray-light'>
                                Add tailoring measurements. It’s absolutely free
                              </p>
                            </div>
                          </div>
                          <button
                            class='flex h-10 items-center justify-center px-2'
                            onClick={() => setStep('measurements')}>
                            <Icons.arrowRight class='h-3 w-2.5' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Divider></Divider>
                    <div class='flex flex-col items-center p-5'>
                      <TotalCostInfo total={total()} />
                      <div class='mt-10 flex w-full flex-row items-center justify-start gap-5'>
                        <div class='flex h-11 w-full flex-row items-center rounded-lg bg-gray px-3'>
                          <input
                            class='w-full bg-transparent focus:outline-none'
                            placeholder='Add promo-code'
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
                        <button
                          class='h-11 w-56 flex-shrink-0 rounded-3xl bg-black text-white'
                          onClick={() => setStep('deliveryInfo')}>
                          Continue • <span class='text-gray'>${total()}</span>
                        </button>
                      </div>
                    </div>
                  </Match>
                  <Match when={step() === 'deliveryInfo'}>
                    <div class='flex flex-col items-center rounded-t-xl bg-white p-5 text-center sm:items-start sm:text-start'>
                      <p class='mb-1 text-lg text-black sm:text-xl'>
                        Add delivery information
                      </p>
                      <p class='mb-8 text-sm text-gray-light'>
                        Use credentials the same way as they are shown in
                        recipient's ID
                      </p>
                      <div class='mb-8 flex w-full flex-col gap-4'>
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Name & surname'
                          onInput={(e) => setName(e.currentTarget.value)}
                        />
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Email'
                          onInput={(e) => setEmail(e.currentTarget.value)}
                        />
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Phone number'
                          onInput={(e) => setPhone(e.currentTarget.value)}
                        />
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Country'
                          onInput={(e) => setCountry(e.currentTarget.value)}
                        />
                        <div class='flex w-full flex-row items-center justify-start rounded-lg bg-gray'>
                          <input
                            class='h-11 w-full bg-transparent px-3 text-sm focus:outline-neutral-200 sm:text-base'
                            placeholder='Full address'
                            onInput={(e) => setAddress(e.currentTarget.value)}
                          />
                          <div class='h-8 w-0.5 bg-neutral-200'></div>
                          <input
                            class='h-11 w-24 bg-transparent px-3 text-sm focus:outline-neutral-200 sm:text-base'
                            placeholder='Post code'
                            onInput={(e) => setZip(e.currentTarget.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <Divider></Divider>
                    <div class='flex flex-col items-center p-5'>
                      <TotalCostInfo total={total()} />
                      <div class='mt-10 flex w-full flex-row items-center justify-between'>
                        <button
                          class='h-11 w-24 rounded-3xl bg-gray text-black'
                          onClick={() => setStep('bag')}>
                          Back
                        </button>
                        <button
                          class='h-11 w-56 flex-shrink-0 rounded-3xl text-white'
                          classList={{
                            'bg-black': isFormValid(),
                            'bg-black/60 cursor-not-allowed': !isFormValid(),
                          }}
                          onClick={placeOrder}>
                          Checkout • <span class='text-gray'>${total()}</span>
                        </button>
                      </div>
                    </div>
                  </Match>
                  <Match when={step() === 'measurements'}>
                    <div class='flex flex-col items-center rounded-t-xl bg-white p-5 text-center sm:items-start sm:text-start'>
                      <p class='mb-1 text-lg text-black sm:text-xl'>
                        Add measurements
                      </p>
                      <p class='mb-8 text-sm text-gray-light'>
                        Adding measurements is not necessary, but it will help
                        us to make your dress fit perfectly
                      </p>
                      <div class='mb-8 flex w-full flex-col gap-4'>
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Height'
                          onInput={(e) =>
                            updateMeasurements('height', e.currentTarget.value)
                          }
                        />
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Sleeve length'
                          onInput={(e) =>
                            updateMeasurements('sleeve', e.currentTarget.value)
                          }
                        />
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Waist'
                          onInput={(e) =>
                            updateMeasurements('waist', e.currentTarget.value)
                          }
                        />
                        <input
                          class='h-11 w-full rounded-lg bg-gray px-3 text-sm focus:outline-neutral-200 sm:text-base'
                          placeholder='Chest'
                          onInput={(e) =>
                            updateMeasurements('chest', e.currentTarget.value)
                          }
                        />
                        <div class='flex w-full flex-row items-center justify-start rounded-lg bg-gray'>
                          <input
                            class='h-11 w-full bg-transparent px-3 text-sm focus:outline-neutral-200 sm:text-base'
                            placeholder='Hips'
                            onInput={(e) =>
                              updateMeasurements('hips', e.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div class='mt-10 flex w-full flex-row items-center justify-between'>
                        <button
                          class='h-11 w-24 rounded-3xl bg-gray text-black'
                          onClick={() => afterMeasurements(false)}>
                          Skip
                        </button>
                        <button
                          class='h-11 w-56 flex-shrink-0 rounded-3xl bg-black text-white'
                          onClick={() => afterMeasurements(true)}>
                          Save measurements
                        </button>
                      </div>
                    </div>
                  </Match>
                </Switch>
              </div>
            </main>
          </Match>
        </Switch>
      </Show>
      <Show when={getTotalItems() === 0}>
        <EmptyCart />
      </Show>
    </div>
  );
}

const TotalCostInfo = (props: { total: number }) => {
  return (
    <div class='flex w-full flex-col gap-2'>
      <div class='flex w-full flex-row items-center justify-between'>
        <p class='text-sm text-gray-light sm:text-base'>Subtotal</p>
        <p class='text-sm text-gray-light sm:text-base'>${props.total}</p>
      </div>
      <div class='flex w-full flex-row items-center justify-between'>
        <p class='text-sm text-gray-light sm:text-base'>Worldwide delivery</p>
        <p class='text-sm text-gray-light sm:text-base'>approx $30</p>
      </div>
      <div class='mt-4 flex w-full flex-row items-center justify-between'>
        <p class='text-base text-black sm:text-lg'>Total</p>
        <p class='text-base text-black sm:text-lg'>${props.total}</p>
      </div>
      <div class='flex w-full flex-row items-center justify-between'>
        <p class='text-xs text-gray-light'>
          By clicking checkout, you are agreeing with Privacy Policy & Terms
        </p>
        <Icons.infoCircle class='size-3.5' />
      </div>
    </div>
  );
};

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
