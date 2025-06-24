
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Work = () => {
  const projects = [
    {
      title: "FinTech Mobile App",
      category: "Mobile Design",
      description: "Complete redesign of a financial app, improving user engagement by 40% and reducing task completion time by 60%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform with focus on conversion optimization and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Healthcare Dashboard",
      category: "Dashboard Design",
      description: "Complex data visualization dashboard for healthcare professionals with intuitive navigation and real-time updates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI Writing Assistant",
      category: "SaaS Design",
      description: "User-friendly interface for an AI-powered writing tool, focusing on productivity and creative workflow.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-space font-bold text-gray-800 mb-6">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of my favorite projects that showcase my approach to solving 
              complex design challenges with simple, elegant solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass-card rounded-3xl overflow-hidden hover:bg-white/40 transition-all duration-500 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-card rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-space font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="glass-card text-white border-0 hover:bg-blue-600/80 transition-all duration-300 px-12 py-6 text-lg font-medium group"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.8)' }}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
