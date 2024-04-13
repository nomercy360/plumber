export default function Divider() {
  return (
    <div class='relative flex h-4 w-full flex-row justify-between divide-y-2 divide-dashed divide-gray'>
      <div class='absolute -left-2 top-0 size-3 -translate-y-1/2 transform rounded-full bg-gray' />
      <div class='absolute -right-2 top-0 size-3 -translate-y-1/2 transform rounded-full bg-gray' />
      <div class='h-2 w-full'></div>
      <div class='h-2 w-full'></div>
    </div>
  );
}
