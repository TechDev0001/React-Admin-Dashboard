// src/components/ProductGrid.jsx
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import smartphone from "./allImg/smartphone.webp"
import tablet from "./allImg/tablet.webp"
import Homepod from "./allImg/Homepod.jpg"
import entertainment from "./allImg/entertainment.webp"
import appleWatch from "./allImg/Apple_watch.webp"

const products = [
  {
    title: "New MagSafe Charger",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=532&hei=582&fmt=png-alpha&.v=1682363492046",
    price: 55,
    oldPrice: 75,
    rating: 5,
    status: "Sold out",
  },
  {
    title: "iPhone 13 white color",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021?wid=532&hei=582&fmt=png-alpha&.v=1629908073000",
    price: 110,
    oldPrice: 130,
    rating: 5,
    status: "Sold out",
  },
  {
    title: "iPhone 14 pro max",
    image:smartphone,
    price: 999,
    rating: 5,
    status: "Sold out",
  },
  {
    title: "iPhone Lightning Cable",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKQ42?wid=532&hei=582&fmt=png-alpha&.v=1645056671883",
    price: 70,
    oldPrice: 85,
    rating: 4,
    status: "Sold out",
  },
  {
    title: "iPad Pro black color",
    image:tablet,
    price: 499,
    oldPrice: null,
    rating: 5,
    status: "Sold out",
  },
  {
    title: "Homepod mini 2025",
    image:Homepod,
    price: 39,
    oldPrice: 60,
    rating: 5,
    status: "Sold out",
  },
  {
    title: "Home entertainment",
    image:entertainment,
    price: 79,
    oldPrice: null,
    rating: 4,
    status: "Sold out",
    actions: true,
  },
  {
    title: "Apple Watch Ultra",
    image:appleWatch,
    price: 70,
    oldPrice: 85,
    rating: 5,
    status: "Sold out",
  },
];

export default function ProductGrid() {
  return (
    <div className="px-6 py-10 md:px-12 lg:px-20 bg-gradient-to-b from-white to-white-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Latest Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-xl shadow-lg group overflow-hidden   hover:border-2 hover:border-blue-700 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Badge */}
            {product.status && (
              <div className="absolute top-3 left-3 z-10 bg-black text-white  text-[11px] px-2 py-1 rounded-full uppercase font-semibold tracking-wide shadow-sm">
                {product.status}
              </div>
            )}

            {/* Image */}
            <div className="w-full h-44 p-4 bg-white flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              {/* Title */}
              <h3 className="text-base font-semibold text-gray-800">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="text-xs text-yellow-400 mt-1 mb-2">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>

              {/* Price */}
              <div className="flex justify-center items-center gap-2">
                <span className="text-lg font-bold text-sky-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm line-through text-gray-400">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* CTA */}
              <button
                disabled
                className="mt-4 flex items-center justify-center w-full text-sm font-medium text-white bg-gray-400 cursor-not-allowed rounded-md px-3 py-2 gap-2 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                Out of Stock
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
