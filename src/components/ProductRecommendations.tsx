import { For, Suspense } from 'solid-js';
import { cache, createAsync } from '@solidjs/router';
import { products } from '~/lib/api';

const getProducts = cache(async () => {
  'use server';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return products.slice(0, 4);
}, 'students');

export default function ProductRecommendations(props: { products: any[] }) {
  const products = createAsync(() => getProducts());

  return (
    <Suspense fallback={<LoaderSkeleton />}>
      <div class='flex w-screen flex-row gap-3 overflow-x-auto p-5 sm:grid sm:w-full sm:grid-cols-4 sm:gap-10 sm:overflow-x-hidden sm:p-14'>
        <For each={products()}>
          {(product) => (
            <a
              class='flex min-w-[170px] flex-col items-start justify-start'
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
    </Suspense>
  );
}

const LoaderSkeleton = () => (
  <div class='flex w-screen flex-row gap-10 overflow-x-auto p-5 sm:grid sm:w-full sm:grid-cols-4 sm:overflow-x-hidden sm:p-14'>
    <For each={[1, 2, 3, 4]}>
      {(_, i) => (
        <div class='flex min-w-[170px] flex-col items-start justify-start'>
          <div class='h-[420px] w-full animate-pulse rounded-lg bg-gray' />
        </div>
      )}
    </For>
  </div>
);
