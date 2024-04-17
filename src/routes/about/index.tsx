import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

export default function Terms() {
  return (
    <div>
      <main
        class={`flex min-h-screen flex-col items-center justify-between bg-white`}>
        <Navbar style={'light'} />
        <div class='mb-11 mt-8 max-w-xs p-5 text-center sm:mb-28 sm:mt-28 sm:p-0'>
          <p class='mb-4 text-lg sm:text-xl'>Contacts</p>
          <div class='mt-10 space-y-1 text-sm sm:text-base'>
            <p class='uppercase'>orders, complaints & compliments</p>
            <p>+995 551 546 841</p>
            <p>support@plumplum.co</p>
          </div>
          <div class='mt-10 space-y-1 text-sm sm:text-base'>
            <p class='uppercase'>Sales, cooperation, wholesale</p>
            <p>Nikita Beketov</p>
            <p>+995 551 546 841</p>
            <p>nikita@plumplum.co</p>
          </div>
          <div class='mt-10 space-y-1 text-sm sm:text-base'>
            <p class='uppercase'>Collaborations, shootings, press</p>
            <p>Nastya Cishevskaya</p>
            <p>+995 551 546 841</p>
            <p>nastya@plumplum.co</p>
          </div>
          <div class='mt-10 space-y-1 text-sm sm:text-base'>
            <p class='uppercase'>Individual Entrepreneur: Nikita Beketov</p>
            <p>VAT: 316368220</p>
            <p>
              Address: Georgia, Rustavi city, micro / district VIII, N 5a,
              basement
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
