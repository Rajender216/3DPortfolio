import { div } from "framer-motion/client";
import Homebg from "../components/3DBg/Homebg"; // Make sure to import your Homebg component
import "../index.css";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen bg-black pt-6 md:pt-36 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 px-4 md:px-8 lg:px-16 border-b-4 border-teal-800"
    >
      {/* Spline/Homebg Container with Aspect Ratio */}
      <div className="w-full md:w-1/2 lg:w-[45%] flex items-center justify-center p-4">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {" "}
          {/* 16:9 aspect ratio */}
          <div className="absolute top-0 left-0 w-full h-full">
            <Homebg className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Text Section */}

      <div className="w-full md:w-1/2 lg:w-[45%] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-4 md:p-6 rounded-lg text-center md:text-left shadow-[0_20px_50px_rgba(0,255,255,0.3)] hover:shadow-[0_25px_60px_rgba(0,255,255,0.4)]">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Hello!  I am 
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Rajender Chhimpa
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl font-mono animate-pulse">
          &lt;Web Developer & Coder/&gt;
        </p>
      </div>
    </div>
  );
}

