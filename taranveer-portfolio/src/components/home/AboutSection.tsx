import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../../data/portfolioData";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-muted/10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-foreground/90">
            <p className="text-lg">
              I'm a Computer Science student at Case Western Reserve University,
              passionate about creating innovative solutions to complex problems.
              My focus spans AI development, web applications, and data analysis.
            </p>
            <p>
              Throughout my academic journey, I've developed a strong foundation in algorithms,
              data structures, and software engineering principles. My experience in ERP systems
              and data pipeline optimization has given me practical insights into real-world applications.
            </p>
            <p>
              I enjoy exploring new technologies and frameworks, with a particular interest in
              machine learning and artificial intelligence. When I'm not coding, I'm exploring
              the latest tech trends or collaborating on open-source projects.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="Location" value={personalInfo.location} />
            <InfoCard title="Email" value={personalInfo.email} />
            <InfoCard title="Education" value="Computer Science, CWRU" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard = ({ title, value }: InfoCardProps) => {
  return (
    <div className="bg-card shadow-sm rounded-lg p-4 border">
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default AboutSection;
