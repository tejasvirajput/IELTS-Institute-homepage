import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review:
        "The mock tests really helped me gain confidence. I scored Band 8.0!",
    },
    {
      name: "Emily Chen",
      review:
        "Speaking practice sessions improved my fluency a lot. Highly recommend!",
    },
    {
      name: "Ravi Patel",
      review:
        "AI feedback was spot on. Helped me identify weak areas instantly.",
    },
  ];

  return (
    <div className="py-16 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-0">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="card bg-base-100 shadow-xl p-6 rounded-xl hover:shadow-2xl transition-shadow">
              <p className="italic">"{t.review}"</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
