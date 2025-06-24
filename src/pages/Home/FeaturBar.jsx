// src/components/FeatureBar.jsx

import { Truck, ShieldCheck, Headphones, BadgeDollarSign, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: <Truck className="text-blue-500 w-8 h-8" />,
    title: "Free Shipping",
    desc: "Free shipping over $100",
  },
  {
    icon: <ShieldCheck className="text-blue-500 w-8 h-8" />,
    title: "Payment Secure",
    desc: "Got 100% Payment Safe",
  },
  {
    icon: <Headphones className="text-blue-500 w-8 h-8" />,
    title: "Support 24/7",
    desc: "Top quality 24/7 Support",
  },
  {
    icon: <BadgeDollarSign className="text-blue-500 w-8 h-8" />,
    title: "100% Money Back",
    desc: "Customers Money Backs",
  },
  {
    icon: <ThumbsUp className="text-blue-500 w-8 h-8" />,
    title: "Quality Products",
    desc: "We Insure Product Quality",
  },
];

export default function FeatureBar() {
  return (
    <section className="w-full bg-white border border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 px-6 py-6 border-b sm:border-b-0 sm:border-r last:border-r-0"
        >
          {item.icon}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
