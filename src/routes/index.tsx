import Navbar from '~/components/Navbar';

export default function Home() {
  return (
    <main
      class={`flex min-h-screen flex-col items-center justify-between bg-white p-2`}>
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
        <a class='flex flex-col items-start justify-start' href='/product/a'>
          <img
            alt=''
            class='w-full rounded-lg object-cover'
            src='/images/showcase.png'
          />
          <p class='mb-1 mt-4 text-xs'>
            A silk dress with a diagonal slit and lines at the waist.
          </p>
          <p class='text-xs'>$800</p>
        </a>
        <div class='flex flex-col items-start justify-start'>
          <img
            alt=''
            class='w-full rounded-lg object-cover'
            src='/images/showcase_2.png'
          />
          <p class='mb-1 mt-4 text-xs'>
            A silk dress with a diagonal slit and lines at the waist.
          </p>
          <p class='text-xs'>$800</p>
        </div>
        <div class='flex flex-col items-start justify-start'>
          <img
            alt=''
            class='w-full rounded-lg object-cover'
            src='/images/showcase_3.png'
          />
          <p class='mb-1 mt-4 text-xs'>
            A silk dress with a diagonal slit and lines at the waist.
          </p>
          <p class='text-xs'>$800</p>
        </div>
        <div class='flex flex-col items-start justify-start'>
          <img
            alt=''
            class='w-full rounded-lg object-cover'
            src='/images/showcase_4.png'
          />
          <p class='mb-1 mt-4 text-xs'>
            A silk dress with a diagonal slit and lines at the waist.
          </p>
          <p class='text-xs'>$800</p>
        </div>
      </div>
    </main>
  );
}
