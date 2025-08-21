import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Clock, Play, Pause, X } from 'lucide-react';
import { Navbar } from "./Home";
import { Footer } from './Magazine';
 

// Simplified and smoother intersection observer hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Simplified animation component for smoother performance
const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "transform translate-y-8 opacity-0";
        case "down":
          return "transform -translate-y-8 opacity-0";
        case "left":
          return "transform -translate-x-8 opacity-0";
        case "right":
          return "transform translate-x-8 opacity-0";
        case "scale":
          return "transform scale-95 opacity-0";
        default:
          return "transform translate-y-8 opacity-0";
      }
    }
    return "transform translate-y-0 translate-x-0 scale-100 opacity-100";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CDP = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Your events data
  const cdpEvents = [
    {
      id: 1,
      title: "Visit to Excellon Software",
      image: "/images/i1.jpg",
      date: "13th December 2024",
      location: "Excellon Software, Nagpur",
      participants: 25,
      duration: "Half Day",
      description:
        "Students from Raisoni Engineering College, YCCE, and Cummins College of Engineering for Women visited Excellon Software, Nagpur under the Engineering India Coordinators Development Plan. This visit provided valuable industry insights and exposure to real-world engineering applications.",
      highlights: ["Industry Insights", "Emerging Technologies", "Career Guidance", "Business Strategies"],
    },
    {
      id: 2,
      title: "LinkedIn & Resume Building Workshop",
      image: "/images/i4.jpg",
      date: "12th January 2025 (National Youth Day)",
      location: "Online Session",
      participants: 60,
      duration: "3 hours",
      description:
        "On National Youth Day, Engineering India organized a LinkedIn Profile and Resume Building Workshop under CDP. The session focused on empowering students with professional networking skills and resume optimization techniques.",
      highlights: ["LinkedIn Profile Optimization", "Resume Writing", "Professional Branding", "Career Development"],
    },
    {
      id: 3,
      title: "Group Discussion Workshop",
      image: "/images/i6.jpg",
      date: "2nd February 2025",
      location: "Seva Sadan, Nagpur",
      participants: 30,
      duration: "4 hours",
      description:
        "Organized a Group Discussion workshop at Seva Sadan, Nagpur. The event focused on enhancing soft skills, communication abilities, and critical thinking among engineering students through structured group activities.",
      highlights: ["Soft Skills Development", "Communication Skills", "Critical Thinking", "Individual Reviews"],
    },
    
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cdpEvents.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, cdpEvents.length]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle modal open/close with proper scroll management
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedEvent]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cdpEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cdpEvents.length) % cdpEvents.length);
  };

  const handleEventClick = (event) => setSelectedEvent(event);
  const closeEventModal = () => setSelectedEvent(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get current event for the slideshow
  const getCurrentEvent = () => cdpEvents[currentSlide];

  return (
    <>
      <Navbar />

      {/* Main content with top padding */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen text-gray-800 pt-20">
        {/* Hero Section - More minimal */}
        <div className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 overflow-hidden">
          <AnimatedSection direction="up" className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#ea7707]">COORDINATOR</span>
              <br />
              <span className="text-[#2D1B69]">DEVELOPMENT</span>
              <br />
              <span className="text-[#138808]">PLAN</span>
            </h1>
            
            <AnimatedSection direction="scale" delay={300} className="mt-6 mb-8">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering future <span className="text-[#ea7707] font-semibold">Leaders</span> through comprehensive <span className="text-[#138808] font-semibold">Development</span> programs
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500} className="mt-6">
              <p className="text-[#B22222] text-lg md:text-xl font-semibold">
                || विद्या ददाति विनयं विनयाद्याति पात्रताम् ||
              </p>
              <p className="text-[#2D1B69] text-base md:text-lg mt-2 italic">
                "Knowledge gives humility, from humility comes worthiness"
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        <main className="py-12 px-6">
          {/* Featured Slideshow - More compact */}
          <AnimatedSection direction="up" className="max-w-6xl mx-auto mb-16">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d0e4e] mb-3">
                Recent CDP Events
              </h2>
              <p className="text-center text-gray-600 mb-8 text-base max-w-2xl mx-auto">
                Discover our latest coordinator development initiatives
              </p>
              
              <AnimatedSection direction="scale" delay={200} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-80 md:h-96">
                  {cdpEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                            <div className="flex flex-wrap gap-3 text-white/90 text-sm mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.participants} participants
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed mb-3">
                              {event.description.substring(0, 120)}...
                            </p>
                            <button
                              onClick={() => handleEventClick(getCurrentEvent())}
                              className="bg-[#ea7707] hover:bg-[#fe9124] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {cdpEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* Events Grid - More minimal */}
          <AnimatedSection direction="up" className="max-w-6xl mx-auto mb-16">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d0e4e] mb-3">All CDP Events</h2>
              <p className="text-center text-gray-600 mb-8 text-base max-w-2xl mx-auto">
                Explore our coordinator development programs
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cdpEvents.map((event, index) => (
                  <AnimatedSection
                    key={event.id}
                    direction="up"
                    delay={index * 100}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer group"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#1d0e4e] mb-2 group-hover:text-[#ea7707] transition-colors duration-300">{event.title}</h3>
                      <div className="flex flex-col gap-1 text-gray-600 text-sm mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#ea7707]" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#ea7707]" />
                          {event.participants} participants
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {event.description.substring(0, 80)}...
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.slice(0, 2).map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 text-[#1d0e4e] text-xs px-2 py-1 rounded-full border border-blue-100"
                          >
                            {highlight}
                          </span>
                        ))}
                        {event.highlights.length > 2 && (
                          <span className="bg-orange-50 text-[#ea7707] text-xs px-2 py-1 rounded-full border border-orange-100">
                            +{event.highlights.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* About CDP Section - More compact */}
          <AnimatedSection direction="up" className="max-w-4xl mx-auto mb-12">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d0e4e] mb-3">
                About CDP
              </h2>
              <p className="text-center text-gray-600 mb-8 text-base max-w-2xl mx-auto">
                Building tomorrow's engineering leaders
              </p>
              
              <AnimatedSection direction="scale" delay={200} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#ea7707] to-[#fe9124] rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1d0e4e]">Coordinator Development Plan</h3>
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 mb-4">
                    The Coordinator Development Plan (CDP) is Engineering India's flagship initiative designed to nurture and develop the next generation of engineering leaders. Through workshops, industry visits, skill development sessions, and networking events, CDP provides comprehensive training to student coordinators across various colleges.
                  </p>
                  <p className="text-base leading-relaxed text-gray-700">
                    Our program focuses on technical skills, soft skills, leadership development, and industry exposure, ensuring that participants are well-equipped to lead their respective communities and contribute meaningfully to the engineering ecosystem.
                  </p>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>
        </main>

        {/* Fixed Event Detail Modal - Properly centered and sized */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={closeEventModal}></div>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative z-10 shadow-2xl transform transition-all duration-300 scale-100">
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <button
                  onClick={closeEventModal}
                  className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-1">{selectedEvent.title}</h2>
                </div>
              </div>
              
              <div className="p-6 max-h-[calc(90vh-12rem)] overflow-y-auto">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="flex items-center gap-2 text-gray-600 p-2 bg-gray-50 rounded-lg text-sm">
                    <Calendar className="w-4 h-4 text-[#ea7707]" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 p-2 bg-gray-50 rounded-lg text-sm">
                    <MapPin className="w-4 h-4 text-[#ea7707]" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 p-2 bg-gray-50 rounded-lg text-sm">
                    <Users className="w-4 h-4 text-[#ea7707]" />
                    <span>{selectedEvent.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 p-2 bg-gray-50 rounded-lg text-sm">
                    <Clock className="w-4 h-4 text-[#ea7707]" />
                    <span>{selectedEvent.duration}</span>
                  </div>
                </div>

                <div className="mb-5 p-4 bg-blue-50 rounded-xl border-l-4 border-[#ea7707]">
                  <p className="text-gray-700 leading-relaxed text-sm">{selectedEvent.description}</p>
                </div>

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-[#1d0e4e] mb-3">Key Highlights</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-[#ea7707] to-[#fe9124] text-white px-3 py-2 rounded-lg text-sm font-medium text-center"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={closeEventModal}
                  className="w-full bg-[#1d0e4e] hover:bg-[#2D1B69] text-white py-3 rounded-xl font-medium transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#1d0e4e] hover:bg-[#2D1B69] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CDP;