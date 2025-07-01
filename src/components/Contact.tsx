
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-yellow-500 text-white rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <a 
                  href="mailto:gaurichabukswar5@gmail.com" 
                  className="text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  gaurichabukswar5@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-yellow-500 text-white rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Phone</div>
                <a 
                  href="tel:8312246848" 
                  className="text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  (831) 224-6848
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="p-3 bg-yellow-500 text-white rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Location</div>
                <div className="text-gray-600">Salinas, California</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-6 text-xl">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/gaurichabukswar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/gaurichabukswar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:gaurichabukswar5@gmail.com" 
                className="p-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Professional Copyright */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium">
              © Gauri Chabukswar 2025. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed and developed with passion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
