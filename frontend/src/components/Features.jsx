import { BookOpen, Mic, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: <Mic className="w-10 h-10 text-primary" />,
      title: "Speaking Practice",
      desc: "Daily speaking sessions with feedback from experts.",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
      title: "Mock Tests",
      desc: "Full-length mock tests to simulate real exam conditions.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "AI Band Score",
      desc: "Instant feedback powered by AI to track your progress.",
    },
  ];

  return (
    <div className="py-16 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-0">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <FeatureCard {...f} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
