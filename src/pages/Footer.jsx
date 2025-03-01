import { Link } from "react-scroll";
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* 3D Effect Container */}
      <div className="perspective-1000 transform-style-preserve-3d">
        <div className="relative py-8 px-4 sm:px-6 lg:px-8 transform transition duration-500 hover:rotate-x-12">
          {/* Footer Content */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Left Section - Contact Info */}
            <div className="space-y-4 transform translate-z-10">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
                Contact Me
              </h3>
              <p className="hover:text-blue-400 transition-colors">
                📧 216rajender@gmail.com
              </p>
              <p className="hover:text-blue-400 transition-colors">
                📱 +91 810-747-9101
              </p>
            </div>

            {/* Middle Section - Social Links */}
            <div className="space-y-4 transform translate-z-20">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
                Follow Me
              </h3>
              <div className="flex space-x-6 justify-center md:justify-start">
                {[
                  [
                    "GitHub",
                    "https://github.com",
                    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.229-.595.002-1.194.075-1.753.229-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.866 3.135-7 7-7s7 3.134 7 7c0 3.091-2.003 5.715-4.782 6.641z",
                  ],
                  [
                    "LinkedIn",
                    "https://linkedin.com",
                    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  ],
                  [
                    "Twitter",
                    "https://twitter.com",
                    "M24 4.557c-.883.391-1.832.651-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                  ],
                ].map(([title, url, path]) => (
                  <Link
                    key={title}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={path} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Quick Links */}
            <div className="space-y-4 transform translate-z-10">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="projects" // Ensure this matches the section ID
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjust this based on your navbar height
                  className=" cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills
                </Link>
              </nav>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Rajender. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Diagonal Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent transform -skew-y-3 origin-top-left"></div>
    </footer>
  );
}
