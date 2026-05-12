import Container from "../layout/Container";

const Contact = () => {
  return (
    <section className="relative w-full bg-[#0F1D3A] py-40 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ───────────────── LEFT CONTENT ───────────────── */}
          <div className="max-w-lg">
            
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight">
              Contact Us
            </h2>

            {/* Yellow Line */}
            <div className="w-20 h-[2px] bg-[#D89A1D] mt-6 mb-8"></div>

            {/* Description */}
            <p className="text-gray-300 text-[17px] leading-8">
              If you have any questions about YASPN, our team is always here to
              help. Whether you're exploring partnership opportunities, planning a
              development project, or simply want to learn more about our global
              infrastructure and community-driven solutions, we'd love to hear from
              you.
            </p>

            {/* Contact Details */}
            <div className="mt-14 space-y-8">
              
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-6 text-[#D89A1D]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.5 1.5 0 00-1.465.417l-.97.97a12.035 12.035 0 01-5.292-5.292l.97-.97a1.5 1.5 0 00.417-1.465L8.213 3.102A1.125 1.125 0 007.122 2.25H5.75a1.5 1.5 0 00-1.5 1.5z"
                    />
                  </svg>
                </div>

                <p className="text-gray-300 text-lg">
                  +971 50 123 4567
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-6 text-[#D89A1D]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.782l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75"
                    />
                  </svg>
                </div>

                <p className="text-gray-300 text-lg">
                  info@yaspn.com
                </p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-6 text-[#D89A1D]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>

                <p className="text-gray-300 text-lg leading-7">
                  PO Box 123456, Dubai,
                  <br />
                  United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          {/* ───────────────── FORM SECTION ───────────────── */}
          <div className="bg-black p-8 md:p-10 z-20">
            <form className="space-y-5">
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
                />

                <input
                  type="text"
                  placeholder="Last Name*"
                  className="bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Company */}
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Select */}
              <select
                className="w-full bg-[#1A1A1A] h-14 px-5 text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              >
                <option>Service Interested In</option>
                <option>Infrastructure</option>
                <option>Sports Development</option>
                <option>Urban Development</option>
              </select>

              {/* Location */}
              <input
                type="text"
                placeholder="Project Location"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-[#1A1A1A] p-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D] resize-none"
              ></textarea>

              {/* Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#D89A1D] hover:bg-[#c58b17] transition-all duration-300 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium"
                >
                  Send Inquiry
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>

            </form>
          </div>

        </div>
      </Container>

      {/* Bottom SVG Skyline */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <img
            src="/skyline-cut.svg"
            alt="City Skyline"
            className="block w-full object-cover"
          />
        </div>
    </section>
  );
};

export default Contact;