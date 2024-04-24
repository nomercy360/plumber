export default function StepperButton(props: {
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div class='flex w-24 flex-row items-center justify-center rounded-lg bg-gray text-lg'>
      <button
        class='flex h-8 w-full items-center justify-center'
        onClick={props.onDecrease}>
        -
      </button>
      <div class='h-4 w-[3px] bg-neutral-200' />
      <button
        class='h-8 w-full items-center justify-center'
        onClick={props.onIncrease}>
        +
      </button>
    </div>
  );
}
