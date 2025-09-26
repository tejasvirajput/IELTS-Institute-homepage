import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-base-200">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-200/30"></div>
      <div className="hero min-h-screen relative z-10 px-6 md:px-16 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
          {/* Hero Image */}
          <motion.div
            className="w-full md:w-1/2 lg:w-5/12 rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src=""
              alt="IELTS banner"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Achieve Your{" "}
              <span className="text-blue-600">Dream IELTS Score</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Expert training, AI evaluation, and personalized guidance to help
              you reach your full potential.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="btn btn-primary btn-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="btn btn-outline btn-lg text-blue-600 border-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
