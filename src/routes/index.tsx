import Navbar from '~/components/Navbar';
import { For } from 'solid-js';
import { products } from '~/lib/api';

export default function Home() {
  return (
    <main
      class={`flex min-h-screen flex-col items-center justify-between bg-white`}>
      <div
        class='h-[600px] w-full rounded-lg bg-cover bg-center sm:px-6 sm:py-4'
        style={{
          'background-image': 'url(/images/hero.png)',
          'background-size': 'cover',
          'background-position': 'center',
        }}>
        <Navbar style={'dark'} />
      </div>
      <div class='mt-4 grid grid-cols-2 gap-4 px-2 sm:mt-16 sm:grid-cols-4 sm:gap-10 sm:px-10'>
        <For each={products}>
          {(product) => (
            <a
              class='flex flex-col items-start justify-start'
              href={`/product/${product.handle}`}>
              <img
                alt=''
                class='w-full rounded-lg object-cover'
                src={product.image}
              />
              <p class='mb-1 mt-4 text-xs'>{product.name}</p>
              <p class='text-xs'>{product.price}</p>
            </a>
          )}
        </For>
      </div>
    </main>
  );
}
