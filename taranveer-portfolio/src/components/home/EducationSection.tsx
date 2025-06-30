import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../ui/card";
import { education, certifications } from "../../data/portfolioData";

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="education" className="section-padding bg-muted/10">
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
              Education & Certifications
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground"
            >
              My academic background and professional certifications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <EducationCard key={edu.institution} education={edu} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <CertificationCard key={cert.name} certification={cert} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  education: {
    institution: string;
    location: string;
    degree: string;
    duration: string;
    details: string;
  };
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
          <h4 className="text-lg font-bold">{education.institution}</h4>
          <span className="text-sm text-muted-foreground">
            {education.duration}
          </span>
        </div>
        <p className="text-primary font-medium mb-1">{education.degree}</p>
        <p className="text-sm text-muted-foreground mb-3">{education.location}</p>
        <p className="text-sm text-foreground/90">{education.details}</p>
      </CardContent>
    </Card>
  );
};

interface CertificationCardProps {
  certification: {
    name: string;
    issuer: string;
    year: string;
  };
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-5">
        <h4 className="font-medium">{certification.name}</h4>
        <div className="flex justify-between items-center mt-1">
          <span className="text-sm text-muted-foreground">{certification.issuer}</span>
          {certification.year && (
            <span className="text-xs text-muted-foreground">{certification.year}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
