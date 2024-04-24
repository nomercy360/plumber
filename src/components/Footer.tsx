export default function Footer() {
  return (
    <footer class='flex w-full flex-col items-start justify-start gap-14 bg-gray p-5 text-black'>
      <div class='flex flex-col items-start justify-start gap-2'>
        <a href='#'>Delivery & returns</a>
        <a href='#'>Instagram</a>
        <a href='/terms'>Policy & terms</a>
        <a href='/gift-card'>Gift Card</a>
      </div>
      <div class='flex w-full flex-row justify-between text-xs text-gray-light'>
        <p>PLUM® All rights reserved. 2024</p>
        <p>Design & engineering by Apparat</p>
      </div>
    </footer>
  );
}
