import Navbar from '~/components/Navbar';
import { For } from 'solid-js';
import { products } from '~/lib/api';
import Footer from '~/components/Footer';

export default function Home() {
  return (
    <div>
      <main class='flex min-h-screen flex-col items-center justify-between bg-white p-2 pb-60'>
        <div class='h-[600px] w-full rounded-lg bg-[url(/images/hero-mobile.webp)] bg-cover bg-center sm:bg-[url(/images/hero.webp)] sm:px-6 sm:py-4'>
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
      <Footer />
    </div>
  );
}
