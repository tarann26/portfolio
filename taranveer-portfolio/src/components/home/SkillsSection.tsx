import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data/portfolioData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const SkillsSection = () => {
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

  const skillCategoryTabs = [
    { id: "languages", label: "Languages", skills: skills.programmingLanguages },
    { id: "frameworks", label: "Frameworks & Libraries", skills: skills.frameworksLibraries },
    { id: "tools", label: "Tools & Platforms", skills: skills.toolsPlatforms },
    { id: "technical", label: "Technical Expertise", skills: skills.technicalExpertise },
    { id: "soft", label: "Soft Skills", skills: skills.softSkills },
  ];

  return (
    <section id="skills" className="section-padding">
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
              Skills & Expertise
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground"
            >
              A comprehensive overview of my technical skills and expertise, showcasing my proficiency in various areas.
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-center">Technical Proficiencies</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="languages" className="w-full">
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                    {skillCategoryTabs.map((tab) => (
                      <TabsTrigger key={tab.id} value={tab.id}>
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {skillCategoryTabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {tab.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <SkillCard
              title="Front-End Development"
              skills={["React", "HTML/CSS", "JavaScript", "UI/UX"]}
              level={85}
            />
            <SkillCard
              title="Back-End Development"
              skills={["Python", "FastAPI", "RESTful APIs", "Databases"]}
              level={80}
            />
            <SkillCard
              title="Data & AI"
              skills={["Machine Learning", "Data Analysis", "TensorFlow"]}
              level={90}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  level: number;
}

const SkillCard = ({ title, skills, level }: SkillCardProps) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Proficiency</span>
            <span className="text-sm font-medium">{level}%</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Related Skills:</h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-secondary/50 px-2 py-1 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
