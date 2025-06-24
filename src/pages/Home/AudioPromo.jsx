// src/components/AudioPromo.jsx
import { ArrowRight, PlayCircle } from "lucide-react";
import newlatest from "./allImg/new_latest1.webp"
import newlatest1 from "./allImg/new_latest.jpg"

export default function AudioPromo() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-20 pb-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Two Images */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 overflow-hidden rounded-xl">
            <img
              src={newlatest}
              alt="Homepod Mini"
              className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full h-12/12 md:pb-10  sm:w-1/2 overflow-hidden rounded-xl md:-mt-16">
            <img
              src={newlatest1}
              alt="Bluetooth Speaker"
              className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Boost Your Audio Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Next Level Sound for Your<br className="hidden md:inline" /> Everyday Life.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
            Elevate your music, calls, and entertainment with our premium smart
            audio devices. Engineered with advanced acoustic technology and
            sleek modern design, each speaker delivers crystal-clear sound and
            powerful bass. Whether at home or on the go, experience immersive
            audio like never before.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-sky-500 text-white font-medium text-sm px-4 py-2 rounded-md shadow hover:bg-sky-600 transition"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </a>
            <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition">
              <PlayCircle className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
