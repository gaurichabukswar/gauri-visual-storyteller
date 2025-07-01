
import { Code, Palette, Database, Globe, Smartphone, Zap, Terminal, Layers, GitBranch, Monitor, Figma, Chrome } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Java", icon: <Terminal className="w-5 h-5" /> },
        { name: "Python", icon: <Terminal className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Globe className="w-5 h-5" /> },
        { name: "C++", icon: <Terminal className="w-5 h-5" /> },
        { name: "React Native", icon: <Smartphone className="w-5 h-5" /> }
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Databases and Backend Frameworks",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "MySQL", icon: <Database className="w-5 h-5" /> },
        { name: "Tableau", icon: <Monitor className="w-5 h-5" /> },
        { name: "RStudio", icon: <Terminal className="w-5 h-5" /> }
      ],
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Development Tools",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "GitHub", icon: <GitBranch className="w-5 h-5" /> },
        { name: "VS Code", icon: <Terminal className="w-5 h-5" /> },
        { name: "Google Colab", icon: <Chrome className="w-5 h-5" /> },
        { name: "Slack", icon: <Monitor className="w-5 h-5" /> }
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100",
      purple: "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100",
      green: "bg-green-50 text-green-800 border-green-200 hover:bg-green-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit for creating beautiful, functional, and scalable digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                    >
                      <div className="text-gray-600">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-2">CRLA Level I, II</h4>
              <p className="text-gray-600 text-sm">May 2024</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-2">Text Mining and Modelling using Python</h4>
              <p className="text-gray-600 text-sm">NPTEL, August 2023</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-2">Diploma in Computer Networks</h4>
              <p className="text-gray-600 text-sm">Alison, March 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
