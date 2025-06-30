import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "../components/ui/button";
import { projects } from "../data/portfolioData";
import { Card } from "../components/ui/card";
import FeatureSearch from "../components/project/FeatureSearch";

const markdownFiles = import.meta.glob("../docs/*.md", { as: "raw" });

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<(typeof projects)[0] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject);

    const loadMarkdown = async () => {
      const importFn = markdownFiles[`../docs/${projectId}.md`];
      if (importFn) {
        const md = await importFn();
        setMarkdown(md as string);
      }
    };
    loadMarkdown();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-muted-foreground">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground mt-2">{project.type}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg mb-8 border bg-card shadow-sm">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <ReactMarkdown className="prose prose-sm max-w-none text-foreground/90">
                  {markdown || project.description}
                </ReactMarkdown>
              </section>

              {project.details && project.details.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <FeatureSearch features={project.details} />
                  <div className="space-y-6">
                    {project.details.map((detail, index) => (
                      <div key={index} id={`feature-${index}`}
                        className="space-y-2">
                        <img
                          src={project.imageUrl}
                          alt={`Feature ${index + 1}`}
                          className="rounded border"
                        />
                        <p className="text-foreground/90">{detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Project Info</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Project Links
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm" className="w-full justify-start">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant="outline" size="sm" className="w-full justify-start">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
