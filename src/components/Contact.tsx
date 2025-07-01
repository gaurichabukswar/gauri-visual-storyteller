
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently open to new opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="p-3 bg-yellow-500 text-white rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">Email</div>
                  <div className="text-gray-600 text-sm">gauri.chabukswar@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="p-3 bg-yellow-500 text-white rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">Location</div>
                  <div className="text-gray-600 text-sm">Salinas, California</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="p-3 bg-yellow-500 text-white rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">Phone</div>
                  <div className="text-gray-600 text-sm">Available upon request</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-medium text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/gaurichabukswar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gaurichabukswar/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:gauri.chabukswar@example.com" 
                  className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your first name"
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your last name"
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input 
                    type="text" 
                    placeholder="What's this about?"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none bg-white"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 font-medium"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
