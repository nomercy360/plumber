import Icons from '~/components/Icons';

export default function SuccessOrder() {
  return (
    <div class='fixed z-50 flex h-screen w-screen items-center justify-center bg-white'>
      <div class='flex flex-col items-center gap-5'>
        <Icons.checkmark />
        <div>
          <Icons.logo class='h-4 w-16 fill-black stroke-black sm:h-10 sm:w-64' />
          <span>got your order. So what’s next?</span>
        </div>
        <p>Wait for tracking number</p>
      </div>
    </div>
  );
}
