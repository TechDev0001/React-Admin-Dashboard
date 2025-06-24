// src/components/PromoGrid.jsx

import bgImage from "./allImg/promo_f1.jpg";
import dresser from "./allImg/promo_f2.jpg";
import chair2 from "./allImg/promo_f3.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PromoGrid() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12 bg-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Left Side - Small Cards */}
      <motion.div
        ref={leftRef}
        initial={{ x: -100, opacity: 0 }}
        animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 relative z-10"
      >
        {/* Card 1 */}
        <div
          className="flex justify-between items-center rounded-xl overflow-hidden h-48 md:h-56 bg-cover bg-center shadow-md"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="bg-white/0 p-6 md:p-8 rounded-r-xl w-full max-w-[70%]">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800">20% Off On New Chair</h3>
            <p className="text-sm text-gray-600 mt-1">Get Instant Cashback</p>
            <a href="#" className="text-xs mt-2 inline-block underline font-semibold">VIEW MORE</a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex justify-end items-center rounded-xl overflow-hidden h-48 md:h-56 bg-cover bg-right shadow-md"
          style={{ backgroundImage: `url(${chair2})` }}
        >
          <div className="bg-white/0 p-6 md:p-8 rounded-l-xl text-right w-full max-w-[70%]">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800">Let’s buy New Chair</h3>
            <p className="text-sm text-gray-600 mt-1">Get Instant Cashback</p>
            <a href="#" className="text-xs mt-2 inline-block underline font-semibold">VIEW MORE</a>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Large Card */}
      <motion.div
        ref={rightRef}
        initial={{ x: 100, opacity: 0 }}
        animate={isRightInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative z-10 flex justify-start md:pt-5 md:pl-5 rounded-xl overflow-hidden h-60 md:h-auto min-h-[300px] bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${dresser})` }}
      >
        <div className="bg-white/0 p-8 md:p-1 rounded-r-xl w-full max-w-[60%]">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Let’s buy New furnituer</h3>
          <p className="text-sm text-gray-600 mt-1">Get Instant Cashback</p>
          <a href="#" className="text-xs mt-2 inline-block underline font-semibold">VIEW MORE</a>
        </div>
      </motion.div>
    </section>
  );
}
