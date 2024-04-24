import Icons from '~/components/Icons';

export default function NavbarCart() {
  return (
    <nav class='flex h-14 w-full flex-row items-center justify-between bg-transparent p-5 sm:p-6'>
      <a href='/'>
        <Icons.logo class='h-6 w-32' />
      </a>
      <button onClick={() => window.history.back()}>
        <Icons.close class='size-5 fill-black' />
      </button>
    </nav>
  );
}
