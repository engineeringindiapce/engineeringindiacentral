import {
  Users,
  Target,
  Heart,
  Award,
  Lightbulb,
} from "lucide-react";

import { Navbar } from "./Home";
import { Footer } from "./Magazine";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[rgba(173,216,230,0.35)] backdrop-blur-md text-black overflow-hidden">
      <Navbar />

      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-black/10 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-black/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-black/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-black/10 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-black/15 rounded-full animate-pulse delay-300"></div>

        {/* Very subtle floating elements */}
        <div className="absolute -top-20 -right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/3 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Hero Section - Added top padding to account for fixed navbar */}
      <section className="relative pt-24 pb-15 px-4 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center">
            <h1 className="flex items-center gap-3 text-4xl md:text-6xl font-bold animate-fadeInUp">
              <span className="text-[4.2rem] text-[#1d0e4e] font-extrabold tracking-wider drop-shadow-sm hover:drop-shadow-md transition-all duration-500">
                ABOUT
              </span>
              <span className="flex animate-slideInUp delay-300">
                <span className="text-white text-[3.5rem] font-black px-2 py-2 bg-[#ea7707] rounded-sm shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">U</span>
                <span className="text-white text-[3.5rem] font-black px-2 py-2 bg-[#fe9124] rounded-sm shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">S</span>
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-4xl max-w-[900px] mt-8 leading-tight font-bold text-center animate-fadeInUp delay-500">
            Think <span className="text-[#00008b] font-bold hover:scale-105 transition-transform duration-300 inline-block">Nationally</span>, Act <span className="text-[#059669] font-bold hover:scale-105 transition-transform duration-300 inline-block">Locally</span>
          </p>

          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#ea7707] to-[#fe9124] mx-auto rounded-full animate-fadeInUp delay-700"></div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1d0e4e] animate-fadeInUp bg-gradient-to-r from-[#1d0e4e] via-[#2d1e5e] to-[#1d0e4e] bg-clip-text text-transparent">
            Club Memories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {journeyImages.map((item, i) => (
              <div
                key={i}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/30 animate-fadeInUp hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Photo */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Title + Subtitle */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-fadeInUp">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00008b] to-[#0066cc] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-[#1d0e4e]">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                To create a world where global thinking meets local action, fostering sustainable communities that drive innovation and positive change across the nation.
              </p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-bl-full"></div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-fadeInUp delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-[#1d0e4e]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                We are committed to empowering local communities through strategic initiatives aligned with national goals, building bridges between academia and real-world impact.
              </p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-200/20 to-transparent rounded-bl-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d0e4e] mb-4 animate-fadeInUp">Our Core Values</h2>
            <p className="text-xl text-gray-600 font-medium animate-fadeInUp delay-200">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Community First",
                gradient: "from-[#ea7707] to-[#fe9124]",
                icon: <Users className="w-8 h-8" />,
                description: "Every decision we make prioritizes the well-being and growth of our local communities, fostering collaboration and mutual support."
              },
              {
                number: "2",
                title: "Sustainable Impact",
                gradient: "from-[#059669] to-[#10b981]",
                icon: <Lightbulb className="w-8 h-8" />,
                description: "We focus on creating lasting change that benefits both present and future generations through innovative solutions."
              },
              {
                number: "3",
                title: "Collaborative Growth",
                gradient: "from-[#00008b] to-[#0066cc]",
                icon: <Award className="w-8 h-8" />,
                description: "We believe in the power of partnerships and collective action to achieve greater goals and drive meaningful change."
              },
            ].map(({ number, title, gradient, icon, description }, index) => (
              <div
                key={number}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {icon}
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {number}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#1d0e4e] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {title}
                </h4>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};
const journeyImages = [
  { src: '/images/chikhal.jpg', title: 'Chikaldhara Visit', subtitle: 'Event' },
  { src: '/images/vriksh.jpg', title: 'Vriksha ropan', subtitle: 'Event' },
  { src: '/images/event.jpg', title: 'Abhyudaya', subtitle: 'Event' }
];


export default AboutPage;