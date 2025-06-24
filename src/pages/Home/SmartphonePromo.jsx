// src/components/SmartphonePromo.jsx
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import latestIphone from "./allImg/latestIphone.webp"

export default function SmartphonePromo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date().getTime() + 465 * 24 * 60 * 60 * 1000; // future date, update as needed

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 bg-gray-50 rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Content */}
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase mb-4">
            Just starting at $999
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center gap-3 mb-6">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HRS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEC", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 rounded-md text-center shadow-sm"
              >
                <div className="text-xl font-bold text-gray-800 leading-none">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] text-gray-500 font-medium tracking-widest">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Premium Smartphones <br className="hidden sm:inline" />
            From our exclusive collections.
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Hurry up! Summer sale up to 40% off
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-sky-500 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow hover:bg-sky-600 transition"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Image & Stamp */}
        <div className="relative flex justify-center">
          {/* Smartphone Image */}
          <img
            src={latestIphone}
            alt="iPhone 14 Pro"
            className="w-60 sm:w-72 md:w-80 object-contain transition-transform duration-500 hover:scale-105"
          />

          {/* Circular Stamp */}
          <div className="absolute -top-4 -right-4 rotate-[25deg]">
            <p className="text-[12px] font-medium text-gray-500 tracking-wider rotate-[25deg]">
              <span className="inline-block transform rotate-[25deg]">⭐</span> Best Quality and Unique Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
