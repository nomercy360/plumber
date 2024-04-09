import {
  cache,
  createAsync,
  RouteDefinition,
  RouteSectionProps,
} from '@solidjs/router';
import PhotoGallery from '~/components/PhotoGallery';
import Navbar from '~/components/Navbar';
import { createSignal, For } from 'solid-js';
import { addToCart } from '~/lib/cart';
import { products } from '~/lib/api';

const getProduct = cache(async (handle: string) => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return products.find((product) => product.handle === handle);
}, 'product');
export const route = {
  load({ params }) {
    void getProduct(params.id);
  },
} satisfies RouteDefinition;

export default function ProductPage(props: RouteSectionProps) {
  const product = createAsync(() => getProduct(props.params.handle));

  const [selectedSize, setSelectedSize] = createSignal<string>('');

  const handleAddToCart = () => {
    if (!selectedSize()) return;

    const item = {
      id: product()!.id,
      name: product()!.name,
      price: product()!.price,
      quantity: 1,
      size: selectedSize(),
    };

    addToCart(item);
  };

  return (
    <main
      class={`flex min-h-screen flex-col items-center justify-between bg-white p-2`}>
      <Navbar style={'light'} />
      <div class='flex flex-col gap-10 p-2 sm:flex-row sm:p-14'>
        <PhotoGallery />
        <div class='flex flex-col items-start text-start text-black sm:w-2/5'>
          <div class='mb-3 flex h-6 items-center justify-center rounded-full bg-[#F6F1FF] px-2 text-xs text-[#6E23E7]'>
            3 pieces left
          </div>
          <p class='text-base text-black sm:text-lg'>{product()?.name} </p>
          <p class='text-xs text-gray sm:text-base'>{product()?.description}</p>
          <div class='mt-5 flex h-9 w-full flex-row items-center justify-between sm:h-10'>
            <div class='flex flex-row items-center justify-start gap-1 text-xs sm:text-base'>
              <For each={product()?.sizes}>
                {(size) => (
                  <button
                    classList={{
                      'flex size-11 items-center justify-center rounded-full uppercase':
                        true,
                      'text-dark-gray bg-light-gray': size !== selectedSize(),
                      'text-white bg-black': size === selectedSize(),
                    }}
                    onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>
                )}
              </For>
            </div>
            <button
              class='bg-button flex h-9 flex-row items-center justify-between gap-2 rounded-full px-2.5 text-white sm:h-11 sm:text-base'
              onClick={handleAddToCart}>
              <p class='text-white'>Add to bag</p>
              <p class='text-gray'>${product()?.price}</p>
            </button>
          </div>
          <p class='mt-10 text-xs uppercase text-black sm:mt-14 sm:text-base'>
            FITS PERFECTLY
          </p>
          <p class='mt-2 text-xs text-gray sm:text-base'>
            The size grid is universal, if in doubt, look at the size chart. If
            you know your exact dimensions, send them with the order. We will
            pick the sizes for you individually. It's free.
          </p>
          <p class='mt-5 text-xs uppercase text-black sm:text-base'>
            WORLDWIDE DELIVERY
          </p>
          <p class='mt-2 text-xs text-gray sm:text-base'>
            Your items will be dispatched within 48 hours of receipt of payment
            excluding weekends and public holidays. Your orders will be shipped
            by ems. Please note that customers are responsible for clearance and
            custom charges. Delivery time is about 14-40 business days. The
            delivery time depends on the work of the customs office of the host
            country.
          </p>
          <p class='mt-5 text-xs uppercase text-black sm:text-base'>
            FREE RETURNS
          </p>
          <p class='mt-2 text-xs text-gray sm:text-base'>
            If the dress did not fit or you just did not like it, you can return
            it. Details for exchange requests are to be directed to
            shop@plumplum.co, within 24 hours of receiving your order.
          </p>
          <p class='mt-5 text-xs uppercase text-black sm:text-base'>
            EASY TO CARE
          </p>
          <p class='mt-2 text-xs text-gray sm:text-base'>
            Hand-wash it in lukewarm water with a mild detergent, avoiding harsh
            chemicals or bleach. Gently reshape and air dry the dress away from
            direct sunlight, and if ironing is needed, use a low heat setting
            and iron inside out while slightly damp. For stubborn stains or
            thorough cleaning, consider professional dry cleaning to maintain
            the fabric's integrity.
          </p>
        </div>
      </div>
    </main>
  );
}
