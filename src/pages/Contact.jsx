import React from "react";
import Contactbg from "../components/3DBg/Contactbg";

export default function ContactPage() {
  return (
    <div
      id="contact"
      className="min-h-[100vh] bg-black flex flex-col md:flex-row overflow-x-hidden border-b-4 border-teal-800"
    >
      {/* Contact Details Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 lg:p-10 flex items-center justify-center order-2 md:order-1">
        <div className="max-w-md w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 md:mb-8 font-bold text-center md:text-left">
            Get in Touch
          </h1>

          <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 flex items-center gap-2">
              <span>📍</span>
              <span>Bikaner, Rajasthan, India - 334001</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 flex items-center gap-2">
              <span>📞</span>
              <span>+91 810-747-9101</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 flex items-center gap-2">
              <span>✉️</span>
              <span>216rajender@gmail.com</span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6">
            {[
              [
                "GitHub",
                "https://github.com/Rajender216",
                "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.229-.595.002-1.194.075-1.753.229-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.866 3.135-7 7-7s7 3.134 7 7c0 3.091-2.003 5.715-4.782 6.641z",
              ],
              [
                "LinkedIn",
                "https://www.linkedin.com/in/rajenderchhimpa/",
                "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
              ],
              [
                "Twitter",
                "https://x.com/Rajender216",
                "M24 4.557c-.883.391-1.832.651-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
              ],
            ].map(([title, url, path]) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors p-2"
                aria-label={`${title} profile`}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Spline Section */}
      <div className="hidden md:flex w-full md:w-1/2 md:h-screen p-4 sm:p-6 lg:p-10 items-center justify-center order-1 md:order-2">
        <div className="w-full h-full relative max-w-2xl mx-auto flex justify-center items-center ">
          <Contactbg className="w-auto h-full bg-cover" />
        </div>
      </div>
    </div>
  );
}
