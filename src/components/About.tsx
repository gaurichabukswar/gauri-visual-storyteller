
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                As a passionate software developer and UI/UX designer, I bridge the gap between 
                beautiful design and functional code. My journey in technology is driven by a 
                desire to create meaningful digital experiences that solve real-world problems.
              </p>
              <p>
                With a fresh perspective from my recent graduation and hands-on experience at 
                Taste Realm, I bring enthusiasm, creativity, and a strong foundation in modern 
                development practices to every project I work on.
              </p>
              <p>
                I believe in the power of thoughtful design combined with clean, efficient code 
                to create applications that users love to interact with.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">2025</div>
              <div className="text-gray-700 font-medium">Graduate</div>
              <div className="text-sm text-gray-500">CSU Monterey Bay</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">1+</div>
              <div className="text-gray-700 font-medium">Years</div>
              <div className="text-sm text-gray-500">Professional Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Projects</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">∞</div>
              <div className="text-gray-700 font-medium">Passion</div>
              <div className="text-sm text-gray-500">For Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
