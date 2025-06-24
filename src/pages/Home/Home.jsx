import "./first.css"; // 👈 Normal CSS for fade-up animation
import furn1 from "./allImg/f1.jpg"
import furn2 from "./allImg/f2.jpg"
import furn3 from "./allImg/f3.jpg"
import FeatureBar from "./FeaturBar";
import PromoGrid from "./PromoGrid";
export default function HeroSection() {
  return (
    <section className="relative  h-[90vh] w-full font-sans">
      {/* Topbar */}
      <div className="bg-blue-900 hidden  text-white text-sm py-1 px-4 md:flex justify-between items-center">
        <span>Call: +1 078 2376</span>
        <span>New year sale - 30% off</span>
        <div className="flex items-center space-x-4">
          <span className="text-xs">👤 Login</span>
          <span className="border-l border-white h-4 mx-2" />
          <span>🇺🇸 USD ▾</span>
        </div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow">
        <div className="text-2xl font-bold text-gray-900">Bisum</div>
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
          <a href="#" className="text-pink-500">Home ▾</a>
          <a href="#">Shop ▾</a>
          <a href="#">Blog ▾</a>
          <a href="#">Pages ▾</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex items-center space-x-4 text-gray-800 text-lg">
          
        </div>
      </header>

      {/* Hero Section */}
         <section className="relative h-[90vh] w-full font-sans overflow-hidden">
      {/* Slider container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex w-[100%] h-full slider-step">
          <img src={furn1} alt="f1" className="w-full h-full object-cover" />
          <img src={furn2} alt="f2" className="w-full h-full object-cover" />
          <img src={furn3} alt="f3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Discover The Best <br />
            <span className="text-blue-900">Furniture</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">Look for your inspiration here</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-900 text-sm font-semibold rounded hover:bg-yellow-300 transition-all">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>


     {/* <FeaturBar /> */}
     <FeatureBar/>

     <PromoGrid/>

    </section>
  );
}
