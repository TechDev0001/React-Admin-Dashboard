// src/components/Testimonials.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Luies Charls",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Excellent product, worth every penny.",
    desc: "There are many variations of passages of lorem Ipsum available but the have alteration in some form by injected humour randomised words.",
  },
  {
    name: "Stefanie Rashford",
    role: "Founder",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Reliable product, consistently delivers.",
    desc: "Generation many variations of passages of even blievable lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum.",
  },
  {
    name: "Augusta Wind",
    role: "Web Designer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Excellent product, A+ customer service.",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages of lorem Ipsum available humour.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
        What Our Clients Say
      </h2>
      <div className="h-[2px] bg-sky-500 w-32 mb-8" />

      <div className="relative">
        {/* Cards Container */}
        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => {
            const t = testimonials[(index + i) % testimonials.length];
            return (
              <div
                key={i}
                className="bg-white border rounded-lg p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="font-semibold text-lg mb-2">“{t.quote}”</p>
                <p className="text-sm text-gray-600 mb-4">{t.desc}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-50"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
