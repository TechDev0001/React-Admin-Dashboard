
import { Mail, Phone, MapPin, CreditCard } from "lucide-react";

import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from "react-icons/fa";
"lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1220] text-white pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 - Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Information</h3>
          <div className="h-1 w-10 bg-sky-500 mb-4 rounded" />
          <p className="text-sm leading-relaxed text-gray-300">
            Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service.
          </p>

          {/* App Store Buttons */}
          <div className="mt-4 space-y-2">

            {/* <img src="/apple-store.png" alt="App Store" className="h-10" /> */}
            <h1 className="h-10 font-bold">App Store</h1>
            <h1 className="h-10 font-bold">Google Play</h1>
            {/* <img src="/google-play.png" alt="Google Play" className="h-10" />
           */}
          </div>
        </div>

        {/* Column 2 - Products */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <div className="h-1 w-10 bg-sky-500 mb-4 rounded" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Gadget</li>
            <li>Android TV</li>
            <li>Electronic</li>
            <li>Wireless Printer</li>
            <li>Smart Watch</li>
            <li>Android Tablet</li>
          </ul>
        </div>

        {/* Column 3 - Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <div className="h-1 w-10 bg-sky-500 mb-4 rounded" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>FAQs</li>
            <li>Sitemap</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Size Chart</li>
          </ul>
        </div>

        {/* Column 4 - Account */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Your Account</h3>
          <div className="h-1 w-10 bg-sky-500 mb-4 rounded" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Search</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>Policy for Sellers</li>
          </ul>
        </div>

        {/* Column 5 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="h-1 w-10 bg-sky-500 mb-4 rounded" />
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-1 text-sky-400" />
              Electech- Electronics Store<br />
              507-Union Trade Ipsum<br />
              Doler, Centre France
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-4 h-4 text-sky-400" />
              hello@blocks.com
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4 h-4 text-sky-400" />
              (+91) 9876-543-210
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-gray-400">
          © 2025, <strong>Electech</strong> - Electronics Store. Powered by Shopify
        </div>

        {/* Payment Icons */}
        <div className="flex gap-3">
          {/* <img src="/visa.png" alt="Visa" className="h-5" /> */}
          < FaCcVisa className="w-10 h-10"/>
          <FaCcMastercard className="w-10 h-10"/>
          <FaCcPaypal className="w-10 h-10"/>
          <FaCcDiscover className="w-10 h-10"/>
          {/* <img src="/mastercard.png" alt="MasterCard" className="h-5" /> */}
          {/* <img src="/paypal.png" alt="PayPal" className="h-5" /> */}
          {/* <img src="/discover.png" alt="Discover" className="h-5" /> */}
        </div>
      </div>
    </footer>
  );
}
