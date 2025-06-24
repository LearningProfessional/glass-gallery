
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "alex.chen@email.com",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Message Me"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a 30-minute consultation",
      action: "Book Now"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-white"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-space font-bold text-gray-800 mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your next project to life? I'd love to hear about your ideas 
              and explore how we can work together.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="glass-card rounded-3xl p-8 hover:bg-white/40 transition-all duration-300 group animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="mb-6">
                  <method.icon className="w-12 h-12 text-blue-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-space font-semibold text-gray-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <Button 
                  variant="outline" 
                  className="glass-card border-blue-300/50 hover:bg-blue-50/50 transition-all duration-300 group-hover:border-blue-400/70"
                >
                  {method.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="glass-card rounded-3xl p-12 animate-fade-in-up">
            <h3 className="text-3xl font-space font-bold text-gray-800 mb-6">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a complete design system, a mobile app, or just want to 
              discuss your ideas, I'm here to help bring your vision to life.
            </p>
            <Button 
              size="lg" 
              className="glass-card text-white border-0 hover:bg-blue-600/80 transition-all duration-300 px-12 py-6 text-lg font-medium"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.8)' }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
