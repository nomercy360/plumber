import { createEffect, createSignal } from 'solid-js';

export default function PhotoGallery() {
  const [isMobile, setIsMobile] = createSignal(false);
  const [activeIndex, setActiveIndex] = createSignal(0);

  createEffect(() => {
    setIsMobile(window.innerWidth < 640);
  });

  const images = [
    {
      imgPath: '/images/preview.png',
    },
    {
      imgPath: '/images/preview_2.png',
    },
    {
      imgPath: '/images/preview_3.png',
    },
    {
      imgPath: '/images/preview_4.png',
    },
  ];

  return (
    <div>
      {isMobile() ? (
        <div
          class='relative mt-8 flex w-full flex-col items-center justify-end'
          onClick={() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
          }}>
          <img alt='' class='size-full' src={images[activeIndex()].imgPath} />
          <div class='absolute z-10 my-5 flex items-center justify-center gap-2'>
            {images.map((_, index) => (
              <div
                class={`size-2 rounded-full ${
                  index === activeIndex() ? 'bg-white' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div class='mt-8 grid grid-cols-2 gap-4'>
          {images.map((card, index) => (
            <img alt='' class='' src={card.imgPath} />
          ))}
        </div>
      )}
    </div>
  );
}
