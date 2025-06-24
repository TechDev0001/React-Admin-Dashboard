// src/components/NewsUpdate.jsx
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";
import slowLaptop from "./allImg/Laptop-So-Slow.webp"
import Protect_headphone from "./allImg/Electronics-from-Damage.webp"
import Technology from "./allImg/Next-Electronics-Purchase.webp"
import Best_Way from "./allImg/RightSmartphone.webp"

const newsData = [
  {
    image: slowLaptop,
    date: "December 12, 2024",
    title: "Why Is My Laptop So Slow? Simple Fixes",
    desc: "Welcome to the ultimate shopping event that you’ve been waiting for. Our...",
  },
  {
    image:Protect_headphone,
    date: "December 12, 2024",
    title: "Easy Steps to Protect Your Headphones",
    desc: "Trends are patterns or shifts in behavior, preferences, or ideas that gain popularit...",
  },
  {
    image: Technology,
    date: "December 12, 2024",
    title: "How to Save Money on Your Next Gadget",
    desc: "Technology has become an integral part of our lives, revolutionizing the way we...",
  },
  {
    image:Best_Way,
    date: "December 12, 2024",
    title: "What’s the Best Way to Organize Headphones?",
    desc: "Fashion is not merely about clothing; it is an embodiment of elegance,...",
  },
];

export default function NewsUpdate() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const prev = () =>
    setStartIndex((prev) =>
      prev === 0 ? newsData.length - visibleCards : prev - 1
    );
  const next = () =>
    setStartIndex((prev) =>
      (prev + 1) % (newsData.length - visibleCards + 1)
    );

  return (
   <section className="px-4 md:px-12 py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
         Get Latest Update & News
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Stay in the loop with trends, reviews, and tips
      </p>
      <div className="mt-4 mx-auto h-1 w-20 bg-sky-500 rounded-full" />
    </div>

    {/* Cards Grid */}
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsData.slice(startIndex, startIndex + visibleCards).map((news, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-sky-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow">
                News
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Clock className="w-4 h-4 text-sky-500" />
                {news.date}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {news.desc}
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-sky-500 hover:underline flex items-center gap-1"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border shadow-md hover:bg-sky-50 text-sky-600 rounded-full p-2 z-10 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border shadow-md hover:bg-sky-50 text-sky-600 rounded-full p-2 z-10 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>

  );
}
