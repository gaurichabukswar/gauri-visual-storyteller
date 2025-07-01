
import { MapPin, Calendar, Building2, GraduationCap, Code, Users, Zap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "TasteRealm",
      location: "San Francisco, CA",
      period: "June 2025 - Present",
      type: "Full-time",
      icon: <Building2 className="w-6 h-6" />,
      description: "Collaborated with product manager and development team to design and implement a personalized dish recommendation system using React, Next.js, and PostgreSQL, enhancing user engagement and platform scalability. Optimized full-stack deployment workflows by debugging integration issues between Flask backend and Render, improving performance and reliability of API connections and frontend rendering. Led UI/UX initiatives across marketing and product features using Figma and Canva, delivering high-fidelity prototypes, responsive interfaces, and visually cohesive brand assets.",
      technologies: ["React", "Next.js", "PostgreSQL", "Flask", "Figma", "Canva"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Technology/Writing Tutor",
      company: "Cooperative Learning Center (CLC) - CSUMB",
      location: "Monterey, CA",
      period: "January 2025 - May 2025",
      type: "Part-time",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Assisted in breaking down complex technical concepts by providing structured explanations to enhance analytical thinking. Conducted structured reviews and provided actionable insights to foster technical writing documentation and professional growth.",
      technologies: ["Technical Writing", "Education", "Mentoring"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Software Developer, Team Lead",
      company: "DKomplex",
      location: "Monterey, CA",
      period: "January 2025 - May 2025",
      type: "Project",
      icon: <Code className="w-6 h-6" />,
      description: "Developed frontend architecture using React Native and React Flow, creating intuitive UI components including dynamic sidebars, interactive IPA management systems, and performance appraisal screens. Collaborated closely with backend teams to analyze bugs and practice code reviews, utilizing event listeners and state management to effectively implement role-based access control, enhance user experience, and streamline navigation across the IPA and organizational structures.",
      technologies: ["React Native", "React Flow", "JavaScript", "State Management"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Software Engineer",
      company: "Community Tech Network",
      location: "San Francisco, CA",
      period: "August 2024 - December 2024",
      type: "Contract",
      icon: <Zap className="w-6 h-6" />,
      description: "Developed interactive dashboards with Figma and Next.js, optimized UX using real-time data from 50,000+ sessions and built a React Native app reducing development time by 30% while enhancing accessibility. Spearheaded the development of an AI-powered chatbot using Next.js with natural language processing to assist users with dashboard navigation and merchant queries, reducing support tickets by 20%.",
      technologies: ["Next.js", "React Native", "Figma", "AI/NLP", "Dashboard Development"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "B.S. Computer Science, Software Engineering",
      company: "California State University Monterey Bay",
      location: "Monterey Bay, CA",
      period: "2021 - May 2025",
      type: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Magna Cum Laude Honors - GPA: 3.87. Relevant Courses: Software Design, Operating Systems, Software Engineering, Design and Analysis of Algorithms.",
      technologies: ["Java", "Python", "Software Engineering", "Algorithms", "Operating Systems"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-white border-4 border-yellow-500 rounded-full z-10 hidden md:block group-hover:border-yellow-600 group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Experience card */}
                <div className="md:ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 cursor-pointer">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 bg-gradient-to-r ${exp.color} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                          <h4 className="text-xl font-semibold text-yellow-600">{exp.company}</h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full w-fit hover:bg-yellow-100 transition-colors duration-300">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-full hover:from-yellow-50 hover:to-yellow-100 hover:text-yellow-800 transition-all duration-300 border border-gray-200 hover:border-yellow-300 cursor-pointer hover:scale-105"
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
