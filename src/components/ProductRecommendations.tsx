import { For } from 'solid-js';

export default function ProductRecommendations(props: { products: any[] }) {
  return (
    <section class='flex w-full flex-col items-center justify-center'>
      <p class='mb-6 text-sm uppercase sm:mb-14 sm:text-base'>
        You may also like
      </p>
      <div class='flex w-screen flex-row gap-10 overflow-x-auto p-5 sm:grid sm:w-full sm:max-w-7xl sm:grid-cols-4 sm:overflow-x-hidden sm:p-14'>
        <For each={props.products}>
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
    </section>
  );
}
