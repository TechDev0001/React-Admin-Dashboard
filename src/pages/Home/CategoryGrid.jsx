// src/components/CategoryGrid.jsx
import { motion } from "framer-motion";
import camera from "./allImg/camera.webp"
import speaker from "./allImg/speaker.jpg"
import smartWatch from "./allImg/watch.webp"
import phone from "./allImg/SmartPhone.jpg"

const categories = [
  {
    title: "Camera & Photo",
    image:camera,
  },
  {
    title: "Laptop & Computer",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Speaker & Audio",
    image:speaker,
  },
  {
    title: "Smart Watches",
    image:smartWatch,
  },
  {
    title: "Smart Phone",
    image:phone,
  },
];

export default function CategoryGrid() {
  return (
    <div className="px-4 py-10 md:px-12 lg:px-20 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-md group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 text-center rounded-md py-4 px-2 text-sm font-semibold text-gray-800 shadow-sm">
              {cat.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
