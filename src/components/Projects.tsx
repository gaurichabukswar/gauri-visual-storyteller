
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Consensus",
      subtitle: "Data-Driven Student Success Insights",
      period: "May 2024 - January 2025",
      description: "Designed an interactive analytics dashboard using Python, SQL, and Tableau to visualize student performance trends based on historical data. Conducted quantitative analysis on large datasets to identify key factors affecting retention and graduation rates, directly impacting student success strategies.",
      technologies: ["Python", "SQL", "Tableau", "Data Analytics", "Statistical Analysis"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "PawsConnect",
      subtitle: "Social Media Platform for Pet Parents",
      period: "January 2024 - May 2024",
      description: "Effectively developed a social media platform for pet parents by collaborating within a team using SDLC methodology. Designed and implemented an intuitive user interface for the application, focusing on user experience and community building features.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management System",
      subtitle: "Collaborative Project Management Tool",
      period: "September 2023 - December 2023",
      description: "Built a comprehensive task management application with real-time collaboration features, user authentication, and project tracking capabilities. Implemented agile development practices and modern web technologies.",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Vuex", "CSS3"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            A showcase of my work spanning data analytics, web development, and user experience design
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${project.featured ? 'border-2 border-yellow-200' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-yellow-600 text-6xl font-bold opacity-20">
                    {project.title.substring(0, 2)}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <h4 className="text-xl text-yellow-600 font-semibold mb-4">{project.subtitle}</h4>
                    
                    <div className="flex items-center gap-4 text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      {project.title === "PawsConnect" && (
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span className="text-sm">Team Project</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      View Project
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 flex items-center gap-2 px-6 py-3 rounded-full hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
