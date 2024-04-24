import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';

export default function PhotoGallery(props: { images: string[] }) {
  const [isMobile, setIsMobile] = createSignal(false);
  const [activeIndex, setActiveIndex] = createSignal(0);

  createEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  });

  return (
    <div class='max-w-full'>
      <Switch>
        <Match when={isMobile()}>
          <div
            class='relative flex w-full flex-col items-center justify-end'
            onClick={() => {
              setActiveIndex(
                (prevIndex) => (prevIndex + 1) % props.images.length,
              );
            }}>
            <img alt='' class='size-full' src={props.images[activeIndex()]} />
            <div class='absolute z-10 my-5 flex items-center justify-center gap-2'>
              <Show when={props.images.length > 1}>
                <For each={props.images}>
                  {(image, index) => (
                    <div
                      classList={{
                        'w-2 h-2 bg-white rounded-full': true,
                        'bg-black': index() === activeIndex(),
                      }}
                    />
                  )}
                </For>
              </Show>
            </div>
          </div>
        </Match>
        <Match when={!isMobile()}>
          <Switch>
            <Match when={props.images.length === 1}>
              <img
                alt=''
                class='w-full rounded-lg object-cover'
                src={props.images[0]}
              />
            </Match>
            <Match when={props.images.length > 1}>
              <div class='grid w-full flex-shrink-0 grid-cols-2 gap-4'>
                <For each={props.images}>
                  {(image) => (
                    <img alt='' class='rounded-lg object-cover' src={image} />
                  )}
                </For>
              </div>
            </Match>
          </Switch>
        </Match>
      </Switch>
    </div>
  );
}
