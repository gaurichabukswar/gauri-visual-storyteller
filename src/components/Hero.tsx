
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-yellow-600 font-medium tracking-wide uppercase text-sm">
                Software Developer, UI/UX Designer
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, my name is{" "}
                <span className="text-yellow-600">Gauri Chabukswar</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm Gauri Chabukswar, a recent Computer Science graduate from California State 
                University, Monterey Bay (June 2025) with a concentration in Software Engineering.
              </p>
              <p>
                I'm passionate about creating digital experiences that are both beautiful and 
                functional. Currently working as a Software Developer at Taste Realm, a startup 
                based in Salinas, California.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full transform rotate-6 scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/lovable-uploads/afecc330-e3d6-4e96-bed8-58cdb6ed4909.png"
                  alt="Gauri Chabukswar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-yellow-600 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
