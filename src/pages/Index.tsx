import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Instagram, MessageCircle, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-hall-interior.jpg";
import aboutImage from "@/assets/about-interior.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import kitchenImage from "@/assets/kitchen.jpg";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-xl font-bold text-gold-foreground font-serif">SR</span>
                <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20 animate-gold-glow"></div>
              </div>
              <span className="text-xl font-bold text-foreground font-serif hidden md:block">
                Siva Rupini Interiors
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-md rounded-lg shadow-soft">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-foreground hover:text-gold transition-colors duration-300 font-medium py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-foreground hover:text-gold transition-colors duration-300 font-medium py-2"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-foreground hover:text-gold transition-colors duration-300 font-medium py-2"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground hover:text-gold transition-colors duration-300 font-medium py-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif animate-fade-in-left">
              Siva Rupini <br />
              <span className="text-gold">Interiors</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              Transforming Spaces into Timeless Elegance. <br />
              Where Dreams Meet Design.
            </p>
            <div className="animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              <Button 
                variant="premium" 
                size="xl"
                asChild
                className="animate-gold-glow"
              >
                <a 
                  href="https://drive.google.com/file/d/1qvAjhoEl_UA1KcPhNMQ8uzWXdYt5jjoi/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Explore
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-on-scroll">
              <img 
                src={aboutImage} 
                alt="Modern Interior Design" 
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="fade-on-scroll space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif">
                About <span className="text-gold">Us</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Siva Rupini Interiors, we specialize in custom-designed living spaces that reflect elegance, function, and style. From modular kitchens to cozy bedrooms and luxurious hall designs, we handle everything end-to-end with expert craftsmanship and creative vision.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Our Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Modular Kitchen
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Hall Interior Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Bedroom Wardrobes & Storage
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    False Ceiling & Lighting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Custom Furniture & Decor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Our <span className="text-gold">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of beautifully crafted interior spaces that showcase our commitment to excellence and attention to detail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Living Room */}
            <div className="fade-on-scroll group">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:scale-105">
                <img 
                  src={livingRoomImage} 
                  alt="Elegant Living Room" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Living Room</h3>
                  <p className="text-sm mb-4 opacity-90">Elegant Living Room Concepts for Modern Homes</p>
                  <Button variant="premium" size="sm" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1qvAjhoEl_UA1KcPhNMQ8uzWXdYt5jjoi/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Explore More
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bedroom */}
            <div className="fade-on-scroll group" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:scale-105">
                <img 
                  src={bedroomImage} 
                  alt="Modern Bedroom" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Bedroom</h3>
                  <p className="text-sm mb-4 opacity-90">Warm & Cozy Bedrooms with Smart Storage</p>
                  <Button variant="premium" size="sm" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1qvAjhoEl_UA1KcPhNMQ8uzWXdYt5jjoi/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Explore More
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Kitchen */}
            <div className="fade-on-scroll group" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:scale-105">
                <img 
                  src={kitchenImage} 
                  alt="Modular Kitchen" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Kitchen</h3>
                  <p className="text-sm mb-4 opacity-90">Functional & Stylish Modular Kitchens</p>
                  <Button variant="premium" size="sm" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1qvAjhoEl_UA1KcPhNMQ8uzWXdYt5jjoi/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Explore More
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Contact <span className="text-gold">Us</span>
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with us to discuss your interior design needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Address */}
            <div className="fade-on-scroll">
              <h3 className="text-2xl font-semibold mb-6 text-gold">Visit Our Office</h3>
              <div className="space-y-2 text-lg opacity-90">
                <p className="font-semibold">Vaayuputra Enterprises</p>
                <p>No 16, 1st floor, Kembyrappa building,</p>
                <p>Opp. to Sharadama Temple,</p>
                <p>Jalahalli village, Bangalore-560013</p>
              </div>
            </div>
            
            {/* Contact Methods */}
            <div className="fade-on-scroll">
              <h3 className="text-2xl font-semibold mb-6 text-gold">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:yourmail@example.com" 
                  className="flex items-center space-x-3 text-lg hover:text-gold transition-colors group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>yourmail@example.com</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-lg hover:text-gold transition-colors group"
                >
                  <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Follow us on Instagram</span>
                </a>
                
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-lg hover:text-gold transition-colors group"
                >
                  <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 pt-8 border-t border-gold/20">
            <p className="text-lg opacity-75">
              © 2024 Siva Rupini Interiors. Transforming spaces with timeless elegance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;