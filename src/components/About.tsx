
export const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a recent Computer Science graduate from California State University, 
                Monterey Bay, with a concentration in Software Engineering. My passion lies 
                in the intersection of design and technology, where I create digital experiences 
                that are both visually compelling and functionally robust.
              </p>
              <p>
                Currently working as a Software Developer at Taste Realm, a startup in Salinas, 
                California, I'm involved in developing innovative food technology solutions that 
                connect communities and enhance user experiences in the culinary space.
              </p>
              <p>
                I believe in the power of thoughtful design combined with clean, efficient code 
                to solve real-world problems and create applications that users genuinely enjoy interacting with.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="text-center border-b border-gray-200 pb-4">
                  <div className="text-3xl font-light text-yellow-600 mb-1">2025</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Graduate</div>
                </div>
                <div className="text-center border-b border-gray-200 pb-4">
                  <div className="text-3xl font-light text-yellow-600 mb-1">1+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center border-b border-gray-200 pb-4">
                  <div className="text-3xl font-light text-yellow-600 mb-1">10+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-yellow-600 mb-1">∞</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
