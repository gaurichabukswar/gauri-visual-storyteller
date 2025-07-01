
import { MapPin, Calendar, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Taste Realm",
      location: "Salinas, California",
      period: "Current",
      type: "Startup",
      description: "Developing innovative food technology solutions that connect food enthusiasts and communities. Working on user-centric applications with focus on intuitive design and seamless user experiences.",
      responsibilities: [
        "Developed responsive web applications using React and modern JavaScript",
        "Collaborated with cross-functional teams in an agile startup environment",
        "Implemented user interface designs with focus on accessibility and performance",
        "Contributed to product strategy and user experience decisions"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "UI/UX Design"]
    },
    {
      title: "Computer Science Student",
      company: "California State University, Monterey Bay",
      location: "Monterey Bay, California",
      period: "2021 - June 2025",
      type: "Education",
      description: "B.S. in Computer Science with Software Engineering concentration. Focused on software development methodologies, data structures, algorithms, and modern web technologies.",
      responsibilities: [
        "Completed comprehensive coursework in software engineering principles",
        "Developed projects using various programming languages and frameworks",
        "Participated in collaborative coding projects and code reviews",
        "Gained expertise in database design, system architecture, and UI/UX principles"
      ],
      technologies: ["Java", "Python", "React", "SQL", "Software Engineering", "Data Structures"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content Card */}
                <div className="ml-20 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-yellow-600 font-medium mb-3 flex items-center gap-2">
                          <Building size={18} />
                          {exp.company}
                        </h4>
                      </div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
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

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className="font-medium text-gray-900 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
