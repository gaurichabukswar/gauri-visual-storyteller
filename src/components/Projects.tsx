
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Database, Globe } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Consensus",
      subtitle: "Data-Driven Student Success Analytics",
      period: "May 2024 - January 2025",
      description: "An interactive analytics dashboard that visualizes student performance trends using historical data. Conducted comprehensive quantitative analysis on large datasets to identify key factors affecting retention and graduation rates, providing actionable insights for educational institutions.",
      highlights: [
        "Processed and analyzed large educational datasets",
        "Created interactive visualizations and dashboards",
        "Identified key performance indicators for student success",
        "Delivered actionable insights for institutional decision-making"
      ],
      technologies: ["Python", "SQL", "Tableau", "Data Analytics", "Statistical Analysis", "Pandas"],
      category: "Data Analytics",
      featured: true,
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "PawsConnect",
      subtitle: "Social Media Platform for Pet Parents",
      period: "January 2024 - May 2024",
      description: "A comprehensive social media platform designed specifically for pet parents to connect, share experiences, and build community. Developed using collaborative SDLC methodology with focus on user experience and community building features.",
      highlights: [
        "Designed intuitive user interface with focus on community building",
        "Implemented real-time features for social interaction",
        "Built responsive design for mobile and desktop users",
        "Collaborated effectively in team environment using SDLC practices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS"],
      category: "Full Stack Development",
      featured: true,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Task Management System",
      subtitle: "Collaborative Project Management Tool",
      period: "September 2023 - December 2023",
      description: "A comprehensive task management application featuring real-time collaboration, user authentication, and advanced project tracking capabilities. Built with modern web technologies and agile development practices.",
      highlights: [
        "Implemented real-time collaboration features",
        "Built secure user authentication system",
        "Created intuitive project tracking interface",
        "Applied agile development methodologies"
      ],
      technologies: ["Vue.js", "Firebase", "TypeScript", "Vuex", "CSS3", "Authentication"],
      category: "Web Development",
      featured: false,
      icon: <Users className="w-6 h-6" />
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Data Analytics": "bg-blue-100 text-blue-800 border-blue-200",
      "Full Stack Development": "bg-green-100 text-green-800 border-green-200",
      "Web Development": "bg-purple-100 text-purple-800 border-purple-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning data analytics, full-stack development, and user experience design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 ${project.featured ? 'ring-2 ring-yellow-100' : ''}`}>
              <div className="grid lg:grid-cols-5 gap-0">
                
                {/* Project Visual */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="text-4xl font-light text-gray-300 tracking-wider">
                      {project.title.substring(0, 3).toUpperCase()}
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-6 left-6 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-2">{project.title}</h3>
                        <h4 className="text-lg text-gray-600 mb-4">{project.subtitle}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(project.category)} ml-4 flex-shrink-0`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{project.period}</span>
                      </div>
                      {project.title === "PawsConnect" && (
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>Team Project</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h5 className="font-medium text-gray-900 mb-3">Key Highlights:</h5>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      View Project
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-gray-200 text-gray-700 flex items-center gap-2 px-6 py-3 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
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

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105 font-medium"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
