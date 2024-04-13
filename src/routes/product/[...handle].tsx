import {
  cache,
  createAsync,
  RouteDefinition,
  RouteSectionProps,
} from '@solidjs/router';
import PhotoGallery from '~/components/PhotoGallery';
import Navbar from '~/components/Navbar';
import { createSignal, For, Show, Suspense } from 'solid-js';
import { addToCart } from '~/lib/cart';
import { products } from '~/lib/api';
import Footer from '~/components/Footer';
import SubscribeField from '~/components/SubscribeField';

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
    <div>
      <main
        class={`flex min-h-screen flex-col items-center justify-between bg-white`}>
        <Navbar style={'light'} />
        <div class='flex max-w-7xl flex-col gap-10 p-2 sm:flex-row sm:p-14'>
          <Show when={product()?.images}>
            <PhotoGallery images={product()!.images} />
          </Show>
          <div class='flex w-full flex-col items-start text-start text-black'>
            <div class='mb-3 flex h-6 items-center justify-center rounded-full bg-violet/10 px-2 text-xs uppercase text-violet'>
              3 pieces left
            </div>
            <p class='mb-1 text-lg text-black sm:text-xl'>{product()?.name} </p>
            <p class='text-sm text-gray-light sm:text-base'>
              {product()?.description}
            </p>
            <div class='mt-5 flex h-9 w-full flex-row items-center justify-between sm:h-10'>
              <div class='flex flex-row items-center justify-start gap-1 text-xs sm:text-base'>
                <For each={product()?.sizes}>
                  {(size) => (
                    <button
                      classList={{
                        'flex size-11 items-center justify-center rounded-full uppercase':
                          true,
                        'text-dark-gray bg-gray': size !== selectedSize(),
                        'text-white bg-black': size === selectedSize(),
                      }}
                      onClick={() => setSelectedSize(size)}>
                      {size}
                    </button>
                  )}
                </For>
              </div>
              <button
                class='flex h-9 flex-row items-center justify-between gap-2 rounded-full bg-button px-2.5 text-white sm:h-11 sm:text-base'
                onClick={handleAddToCart}>
                <p class='text-white'>Add to bag</p>
                <p class='text-gray-light'>${product()?.price}</p>
              </button>
            </div>
            <p class='mt-10 text-sm uppercase text-black sm:mt-14 sm:text-base'>
              FITS PERFECTLY
            </p>
            <p class='mt-2 text-sm text-gray-light sm:text-base'>
              The size grid is universal, if in doubt, look at the size chart.
              If you know your exact dimensions, send them with the order. We
              will pick the sizes for you individually. It's free.
            </p>
            <p class='mt-5 text-sm uppercase text-black sm:text-base'>
              WORLDWIDE DELIVERY
            </p>
            <p class='mt-2 text-sm text-gray-light sm:text-base'>
              Your items will be dispatched within 48 hours of receipt of
              payment excluding weekends and public holidays. Your orders will
              be shipped by ems. Please note that customers are responsible for
              clearance and custom charges. Delivery time is about 14-40
              business days. The delivery time depends on the work of the
              customs office of the host country.
            </p>
            <p class='mt-5 text-sm uppercase text-black sm:text-base'>
              FREE RETURNS
            </p>
            <p class='mt-2 text-sm text-gray-light sm:text-base'>
              If the dress did not fit or you just did not like it, you can
              return it. Details for exchange requests are to be directed to
              shop@plumplum.co, within 24 hours of receiving your order.
            </p>
            <p class='mt-5 text-sm uppercase text-black sm:text-base'>
              EASY TO CARE
            </p>
            <p class='mt-2 text-sm text-gray-light sm:text-base'>
              Hand-wash it in lukewarm water with a mild detergent, avoiding
              harsh chemicals or bleach. Gently reshape and air dry the dress
              away from direct sunlight, and if ironing is needed, use a low
              heat setting and iron inside out while slightly damp. For stubborn
              stains or thorough cleaning, consider professional dry cleaning to
              maintain the fabric's integrity.
            </p>
            <SubscribeField />
          </div>
        </div>
        <div class='flex w-full flex-col items-center justify-center'>
          <p class='mb-14 text-sm uppercase sm:text-base'>You may also like</p>
          <div class='grid max-w-7xl grid-cols-4 gap-10 p-14'>
            <For each={products.slice(0, 4)}>
              {(product) => (
                <a
                  class='flex flex-col items-start justify-start'
                  href={`/product/${product.handle}`}>
                  <img
                    alt=''
                    class='w-full rounded-lg object-cover'
                    src={product.image}
                  />
                  <p class='mb-1 mt-2.5 text-sm sm:mt-4 sm:text-base'>
                    {product.name}
                  </p>
                  <p class='text-xs text-gray-light sm:text-base'>
                    ${product.price}
                  </p>
                </a>
              )}
            </For>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
