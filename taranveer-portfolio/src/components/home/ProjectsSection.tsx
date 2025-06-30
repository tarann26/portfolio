import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { projects } from "../../data/portfolioData";

const ProjectsSection = () => {
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
    <section id="projects" className="section-padding bg-muted/10">
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
              Projects
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground"
            >
              A showcase of my recent work, highlighting my technical skills, problem-solving abilities, and creativity.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {projects.length > 6 && (
            <motion.div variants={itemVariants} className="text-center">
              <Button asChild>
                <Link to="/all-projects">View All Projects</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card className="overflow-hidden border shadow-sm flex flex-col h-full group transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-0">
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              to={`/projects/${project.id}`}
              className="text-white text-lg font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-5">
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
        <p className="text-sm text-foreground/90 line-clamp-3">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-secondary/50 px-1.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View source code on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
