
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
              Hi, I'm <span className="font-medium text-yellow-600">Gauri</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              I design interfaces and develop delightful web experiences
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Software Developer & UI/UX Designer passionate about creating 
            meaningful digital experiences that bridge beautiful design with functional code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              About Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/gaurichabukswar" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gaurichabukswar/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:gauri.chabukswar@example.com" 
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
