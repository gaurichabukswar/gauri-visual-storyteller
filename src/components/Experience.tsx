
import { MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Taste Realm",
      location: "Salinas, California",
      period: "Current",
      type: "Startup",
      description: "Working on innovative food technology solutions, developing user-centric applications that connect food enthusiasts.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    {
      title: "Computer Science Student",
      company: "California State University, Monterey Bay",
      location: "Monterey Bay, California",
      period: "2021 - June 2025",
      type: "Education",
      description: "B.S. in Computer Science with Software Engineering concentration. Focused on software development methodologies, UI/UX design principles, and modern web technologies.",
      technologies: ["Java", "Python", "React", "SQL", "Software Engineering"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-yellow-600 mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
