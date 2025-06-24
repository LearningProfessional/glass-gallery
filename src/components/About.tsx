
import { Palette, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Finding innovative approaches to complex design challenges."
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through comprehensive research and testing."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quickly bringing ideas to life with interactive prototypes."
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-2xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-space font-bold text-gray-800 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about creating digital experiences that make a difference. 
              With 2+ years in Web design, I bridge the gap between user needs and business goals.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-card rounded-3xl p-8 hover:bg-white/40 transition-all duration-300 group animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="mb-6">
                  <skill.icon className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-space font-semibold text-gray-800 mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bio Section */}
          <div className="glass-card rounded-3xl p-12 animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-space font-bold text-gray-800 mb-6">
                  My Design Philosophy
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I believe great design is invisible. It should feel natural and effortless, 
                  solving problems before users even realize they exist. Every pixel has a purpose, 
                  and every interaction should feel delightful.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My approach combines data-driven insights with creative intuition, 
                  ensuring that beautiful design always serves a functional purpose.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 glass-card rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* Modern geometric design */}
                  <div className="relative w-64 h-64">
                    {/* Main circle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 animate-float"></div>
                    
                    {/* Overlapping shapes */}
                    <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 animate-float-delayed"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/40 animate-float"></div>
                    
                    {/* Center design element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 rounded-xl shadow-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
