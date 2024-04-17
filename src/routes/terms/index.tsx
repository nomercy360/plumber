import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

export default function Terms() {
  return (
    <div>
      <main
        class={`flex min-h-screen flex-col items-center justify-between bg-white`}>
        <Navbar style={'light'} />
        <div class='mb-11 mt-8 max-w-3xl p-5 sm:mb-28 sm:mt-28 sm:p-0 '>
          <p class='mb-4 text-lg sm:text-xl'>Privacy policy</p>
          <ol class='list-inside list-decimal space-y-2 text-sm sm:text-base'>
            <li>
              Collection of Information:{' '}
              <span class='text-gray-light'>
                We may collect personal information such as name, address,
                email, and payment details when you make a purchase on our
                e-commerce platform. Additionally, we may collect non-personal
                information such as IP addresses and browsing history for
                analytical purposes.
              </span>
            </li>
            <li>
              Use of Information:{' '}
              <span class='text-gray-light'>
                Your information is primarily used to process your orders,
                improve our services, and communicate with you regarding your
                purchases. We may also use your information for marketing
                purposes with your consent.
              </span>
            </li>
            <li>
              Protection of Information:{' '}
              <span class='text-gray-light'>
                We employ industry-standard security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction.
              </span>
            </li>
            <li>
              Sharing of Information:{' '}
              <span class='text-gray-light'>
                We may share your information with third-party service providers
                who assist us in operating our website and fulfilling orders.
                Your information may also be disclosed if required by law or to
                protect our rights and property.
              </span>
            </li>
            <li>
              Cookies:{' '}
              <span class='text-gray-light'>
                Our website may use cookies to enhance your browsing experience
                and personalize content. You can choose to disable cookies in
                your browser settings, although this may affect the
                functionality of our website.
              </span>
            </li>
            <li>
              Third-Party Links:{' '}
              <span class='text-gray-light'>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                websites.
              </span>
            </li>
            <li>
              Updates to Privacy Policy:{' '}
              <span class='text-gray-light'>
                We reserve the right to update our privacy policy periodically.
                Any changes will be posted on this page, and your continued use
                of our website constitutes acceptance of these changes.
              </span>
            </li>
          </ol>
          <p class='mb-4 mt-7 text-lg sm:text-xl'>Terms of service</p>
          <ol class='list-inside list-decimal space-y-2 text-sm sm:text-base'>
            <li>
              Acceptance of Terms:{' '}
              <span class='text-gray-light'>
                By accessing or using our website, you agree to be bound by
                these terms and conditions. If you do not agree with any part of
                these terms, you may not use our services.
              </span>
            </li>
            <li>
              Product Descriptions:{' '}
              <span class='text-gray-light'>
                We make every effort to accurately display the colors and
                details of our products. However, we cannot guarantee that your
                device's display will accurately represent the products. We
                reserve the right to modify or discontinue any product without
                prior notice.
              </span>
            </li>
            <li>
              Pricing and Payment:{' '}
              <span class='text-gray-light'>
                All prices are listed in Belarusian rubles (BYN) and are
                inclusive of VAT. Payment can be made through secure payment
                gateways, and we accept various payment methods. We reserve the
                right to change prices at any time without prior notice.
              </span>
            </li>
            <li>
              Shipping and Delivery:{' '}
              <span class='text-gray-light'>
                We aim to process and ship orders in a timely manner. However,
                delivery times may vary depending on your location and other
                factors beyond our control. We are not responsible for any
                delays or damages caused by shipping carriers.
              </span>
            </li>
            <li>
              Returns and Exchanges:{' '}
              <span class='text-gray-light'>
                We accept returns and exchanges within a specified period,
                provided that the items are unused and in their original
                condition. Customers are responsible for return shipping costs
                unless the return is due to a defect or error on our part.
              </span>
            </li>
            <li>
              Intellectual Property:{' '}
              <span class='text-gray-light'>
                All content on our website, including images, logos, and text,
                is the property of our company and is protected by copyright and
                other intellectual property laws. You may not use, reproduce, or
                distribute any content from our website without prior written
                consent.
              </span>
            </li>
            <li>
              Governing Law:{' '}
              <span class='text-gray-light'>
                These terms and conditions are governed by the laws of Georgia.
                Any disputes arising from or related to these terms shall be
                resolved through arbitration in accordance with the laws of
                Georgia.
              </span>
            </li>
          </ol>
          <p class='mt-7 text-sm sm:text-base'>
            Individual Entrepreneur: Nikita Beketov
          </p>
          <p class='text-sm sm:text-base'>Unique Taxpayer Number: 316368220</p>
          <p class='text-sm sm:text-base'>
            Address: Georgia, Rustavi city, micro / district VIII, N 5a,
            basement
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
