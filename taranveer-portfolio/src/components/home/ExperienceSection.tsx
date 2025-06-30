import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../../data/portfolioData";
import { Card, CardContent } from "../ui/card";

const ExperienceSection = () => {
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
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Professional Experience
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground"
            >
              My professional journey and work experience in the technology industry.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <ExperienceCard key={exp.company + index} experience={exp} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideVariants}
    >
      <Card className="border shadow-sm overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold">{experience.position}</h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
              {experience.duration}
            </span>
          </div>

          <ul className="space-y-3 text-foreground/90">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1 text-lg">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
