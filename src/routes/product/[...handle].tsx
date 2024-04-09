import {
  cache,
  createAsync,
  RouteDefinition,
  RouteSectionProps,
  useParams,
} from '@solidjs/router';
import PhotoGallery from '~/components/PhotoGallery';
import Navbar from '~/components/Navbar';
import { createSignal, For } from 'solid-js';
import { addToCart } from '~/hooks/useCart';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const products = [
  {
    id: 1,
    name: 'A silk dress with a diagonal slit and lines at the waist',
    price: 420,
    handle: 'silk-dress',
    title: '',
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 2,
    name: 'Spaghetti strap dress with a sweetheart neckline',
    price: 380,
    handle: 'spaghetti-strap-dress',
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 3,
    name: 'Notched lapel blazer with a single button closure',
    price: 620,
    handle: 'notched-lapel-blazer',
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 4,
    name: 'High-waisted denim shorts with a frayed hem',
    price: 180,
    handle: 'high-waisted-denim-shorts',
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 5,
    name: 'A-line midi skirt with a button-up front',
    price: 240,
    handle: 'a-line-midi-skirt',
    sizes: ['XS', 'S', 'M'],
  },
];

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
          <p class='text-[#262626]'>
            A silk dress with a diagonal slit and lines at the waist
          </p>
          <p class='text-xs text-[#A8A8A8]'>
            A flirty diagonal slit that adds a dash of sass, while cute cotton
            lines at the waist hug your curves in all the right places. Perfect
            for twirling and turning heads at any special occasion.
          </p>
          <div class='mt-5 flex h-10 w-full flex-row items-center justify-between'>
            <div class='flex flex-row items-center justify-start gap-1 text-xs sm:text-base'>
              <For each={product()?.sizes}>
                {(size) => (
                  <button
                    classList={{
                      'flex h-10 w-8 items-center justify-center rounded-full text-xs uppercase':
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
              class='flex h-10 flex-row items-center justify-between gap-2 rounded-full bg-[#141414] px-2.5 text-xs text-white sm:text-base'
              onClick={handleAddToCart}>
              <p class='text-white'>Add to bag</p>
              <p class='text-[#A8A8A8]'>${product()?.price}</p>
            </button>
          </div>
          <p class='mt-10 text-xs uppercase text-black'>FITS PERFECTLY</p>
          <p class='mt-2 text-xs text-[#A8A8A8]'>
            The size grid is universal, if in doubt, look at the size chart. If
            you know your exact dimensions, send them with the order. We will
            pick the sizes for you individually. It's free.
          </p>
          <p class='mt-5 text-xs uppercase text-black'>WORLDWIDE DELIVERY</p>
          <p class='mt-2 text-xs text-[#A8A8A8]'>
            Your items will be dispatched within 48 hours of receipt of payment
            excluding weekends and public holidays. Your orders will be shipped
            by ems. Please note that customers are responsible for clearance and
            custom charges. Delivery time is about 14-40 business days. The
            delivery time depends on the work of the customs office of the host
            country.
          </p>
          <p class='mt-5 text-xs uppercase text-black'>FREE RETURNS</p>
          <p class='mt-2 text-xs text-[#A8A8A8]'>
            If the dress did not fit or you just did not like it, you can return
            it. Details for exchange requests are to be directed to
            shop@plumplum.co, within 24 hours of receiving your order.
          </p>
          <p class='mt-5 text-xs uppercase text-black'>EASY TO CARE</p>
          <p class='mt-2 text-xs text-[#A8A8A8]'>
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
