import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StartupSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="startup" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Startup
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground">
            I'm building <a href="https://aionix.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline">Aionix.dev</a>, a startup focused on making AI development more accessible through open-source tooling and educational resources.
          </motion.p>
          <motion.p variants={itemVariants} className="text-muted-foreground">
            Visit the website to learn more about our projects and how we're helping developers harness the power of AI.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupSection;
