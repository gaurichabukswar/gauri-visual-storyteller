
import { Code, Palette, Database, Globe, Zap, Layers } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Java", "Python", "HTML5", "CSS3"],
      color: "blue"
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Vue.js", "Responsive Design", "Web APIs"],
      color: "green"
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Framer", "Adobe XD", "UI/UX Design", "Prototyping", "Design Systems"],
      color: "purple"
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Database Design"],
      color: "orange"
    },
    {
      title: "Tools",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Git", "Vercel", "Postman", "VS Code", "npm/yarn", "Webpack"],
      color: "gray"
    },
    {
      title: "Concepts",
      icon: <Layers className="w-6 h-6" />,
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Agile", "Testing", "Performance"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100",
      green: "border-green-200 bg-green-50 text-green-700 hover:bg-green-100",
      purple: "border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100",
      orange: "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100",
      gray: "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100",
      yellow: "border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      gray: "text-gray-600",
      yellow: "text-yellow-600"
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for creating beautiful, functional, and scalable digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-white shadow-sm border ${getIconColor(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900">{category.title}</h3>
              </div>
              
              {/* Skills Tags */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 hover:scale-105 cursor-default ${getColorClasses(category.color)}`}
                  >
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
