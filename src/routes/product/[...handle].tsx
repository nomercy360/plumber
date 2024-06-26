import {
  cache,
  createAsync,
  RouteDefinition,
  RouteSectionProps,
} from '@solidjs/router';
import PhotoGallery from '~/components/PhotoGallery';
import Navbar from '~/components/Navbar';
import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';
import { addToCart } from '~/lib/cart';
import { products } from '~/lib/api';
import Footer from '~/components/Footer';
import ProductRecommendations from '~/components/ProductRecommendations';
import SecretStore from '~/components/SecretStore';

const getProduct = cache(async (handle: string) => {
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
  const [wasAddedToCart, setWasAddedToCart] = createSignal(false);

  const handleAddToCart = () => {
    const item = {
      id: product()!.id,
      name: product()!.name,
      price: product()!.price,
      quantity: 1,
      size: selectedSize(),
    };

    addToCart(item);

    setWasAddedToCart(true);
  };

  createEffect(() => {
    if (product()?.sizes) {
      setSelectedSize(product()!.sizes[0]);
    }
  });

  const [secretStoreIsOpen, setSecretStoreIsOpen] = createSignal(false);

  const chooseSize = (size: string) => {
    setSelectedSize(size);

    if (wasAddedToCart()) {
      setWasAddedToCart(false);
    }
  };

  return (
    <div>
      <SecretStore
        isOpen={secretStoreIsOpen()}
        setIsOpen={setSecretStoreIsOpen}
      />
      <main
        class={`mb-12 flex min-h-screen flex-col items-center justify-between bg-white sm:mb-28`}>
        <Navbar style={'light'} />
        <div class='mt-0 flex max-w-[1440px] flex-col gap-10 px-5 sm:mt-28 sm:flex-row sm:px-14'>
          <Show when={product()?.images}>
            <PhotoGallery images={product()!.images} />
          </Show>
          <div class='flex w-full flex-col items-start text-start text-black sm:w-[360px] sm:min-w-[360px]'>
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
                      onClick={() => chooseSize(size)}>
                      {size}
                    </button>
                  )}
                </For>
              </div>
              <Switch>
                <Match when={!wasAddedToCart()}>
                  <button
                    class='flex h-11 min-w-[140px] flex-row items-center justify-between gap-2 rounded-full bg-button px-3.5 text-base text-white'
                    onClick={handleAddToCart}>
                    <p class='text-white'>Add to Bag</p>
                    <p class='text-gray-light'>${product()?.price}</p>
                  </button>
                </Match>
                <Match when={wasAddedToCart()}>
                  <div class='flex h-11 min-w-[140px] flex-row items-center justify-center gap-2 rounded-full bg-light-green px-3.5 text-base text-white'>
                    <p class='text-white'>Added</p>
                  </div>
                </Match>
              </Switch>
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
            <button
              class='mt-5 flex h-10 w-full flex-row items-center justify-between rounded-3xl bg-violet/10 px-3'
              onClick={() => setSecretStoreIsOpen(true)}>
              <span class='text-sm text-black'>
                Get 5% by subscribing to our newsletter
              </span>
              <span class='text-sm text-violet'>Subscribe</span>
            </button>
          </div>
        </div>
        <section class='mt-14 flex w-full flex-col items-center justify-center sm:mt-24 sm:max-w-[1440px]'>
          <p class='mb-2 text-sm uppercase sm:mb-12 sm:text-base'>
            You may also like
          </p>
          <ProductRecommendations products={products.slice(0, 4)} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
