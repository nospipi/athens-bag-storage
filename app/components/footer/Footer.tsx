import Link from "next/link";

//--------------------------------------------------------------------------------------------------------------

const Footer = () => {
  return (
    //className="w-full h-[100dvh] bg-gradient-to-b from-pink-300 to-blue-300 flex flex-col"
    <footer className="py-12 text-sm">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Athens Bag Storage</h2>
          <p className="mb-4">
            We provide top-notch luggage storage services. Our team is committed
            to delivering the best experience.
          </p>
          <p className="font-semibold">Contact us:</p>
          <Link
            href={`mailto:info@athensbagstorage.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 hover:text-gray-400 transition"
          >
            Email: info@athensbagstorage.com
          </Link>
          <Link
            href={`tel:+306947845332`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            Phone: +30 6947845332
          </Link>
        </div>

        {/* Navigation Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#how-to-find-us"
                className="hover:text-gray-400 transition"
              >
                How to Find Us
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-gray-400 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-gray-400 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/#contact-us"
                className="hover:text-gray-400 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Legal Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <div className="flex space-x-6 mb-4">
            <Link
              href="https://facebook.com"
              className="hover:text-gray-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.789 4.661-4.789 1.325 0 2.464.099 2.795.142v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.126C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://x.com"
              className="hover:text-gray-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937c-.835.37-1.73.623-2.675.735a4.658 4.658 0 0 0 2.048-2.568 9.317 9.317 0 0 1-2.953 1.127 4.65 4.65 0 0 0-7.91 4.24 13.179 13.179 0 0 1-9.573-4.847 4.651 4.651 0 0 0 1.44 6.196 4.604 4.604 0 0 1-2.104-.583v.059a4.653 4.653 0 0 0 3.731 4.558 4.618 4.618 0 0 1-2.094.08 4.654 4.654 0 0 0 4.346 3.234 9.308 9.308 0 0 1-5.761 1.985c-.375 0-.744-.022-1.11-.065a13.153 13.153 0 0 0 7.122 2.084c8.545 0 13.211-7.075 13.211-13.211 0-.201-.004-.4-.014-.598A9.446 9.446 0 0 0 24 4.557a9.292 9.292 0 0 1-2.357.645z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-gray-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.545C0 23.226.793 24 1.77 24h20.458C23.207 24 24 23.226 24 22.273V1.727C24 .774 23.207 0 22.23 0zM7.06 20.452H3.564V9.005H7.06v11.447zM5.312 7.69c-1.121 0-2.03-.914-2.03-2.035a2.033 2.033 0 0 1 4.066 0c0 1.121-.91 2.035-2.03 2.035zm15.14 12.762h-3.495V14.81c0-1.35-.027-3.087-1.88-3.087-1.882 0-2.171 1.469-2.171 2.988v5.74h-3.496V9.005h3.357v1.566h.047c.467-.88 1.607-1.805 3.307-1.805 3.536 0 4.187 2.328 4.187 5.357v6.33z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} athensbagstorage.com - All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
