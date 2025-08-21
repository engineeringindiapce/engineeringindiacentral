import React, { useState, useEffect } from 'react';
import { Users, Globe, Star, Award, BookOpen, Zap } from 'lucide-react';

const CollegesSection = () => {
  const [animationClass, setAnimationClass] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const colleges = [
    {
      name: "Cummins College of Engineering",
      shortName: "COEP",
      logo: "🏛️",
      socialMedia: "@engineering_india_ccewn",
      instagramUrl: "https://www.instagram.com/engineering_india_ccewn?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-rose-300",
      accentColor: "rose",
      description: "Excellence in Engineering Education",
      image: "./images/image1.png"
    },
    {
      name: "RBU (Ramdeobaba University)",
      shortName: "RBU",
      logo: "🎓",
      socialMedia: "@engineeringindia_rbu",
      instagramUrl: "https://www.instagram.com/engineeringindia_rbu?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-emerald-300",
      accentColor: "emerald",
      description: "Innovation Through Education",
      image: "./images/rbu.jpg"
    },
    {
      name: "Yeshwantrao Chavan College of Engineering",
      shortName: "YCCE",
      logo: "⚡",
      socialMedia: "@engineering.india_ycce",
      instagramUrl: "https://www.instagram.com/engineering.india_ycce?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-amber-300",
      accentColor: "amber",
      description: "Powering Future Engineers",
      image: "./images/YCCE.jpg"
    },
    {
      name: "G.H. Raisoni College of Engineering",
      shortName: "RAISONI",
      logo: "🚀",
      socialMedia: "@engineering_india.raisoni",
      instagramUrl: "https://www.instagram.com/engineering_india.raisoni?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-violet-300",
      accentColor: "violet",
      description: "Launching Tomorrow's Leaders",
      image: "./images/Raisoni.jpg"
    },
    {
      name: "St. Vincent Pallotti College",
      shortName: "PALLOTTI",
      logo: "⭐",
      socialMedia: "@engineering.india_svpcet",
      instagramUrl: "https://www.instagram.com/engineering.india_svpcet?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-sky-300",
      accentColor: "sky",
      description: "Shining Bright in Education",
      image: "./images/Pallotti.jpg"
    },
    {
      name: "K.D.K. College of Engineering",
      shortName: "KDK",
      logo: "💎",
      socialMedia: "@engineering.india_kdkce",
      instagramUrl: "https://www.instagram.com/engineering.india_kdkce?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-yellow-300",
      accentColor: "yellow",
      description: "Crafting Precious Minds",
      image: "./images/event.jpg"
    },
    {
      name: "Priyadarshini College of Engineering",
      shortName: "PRIYADARSHINI",
      logo: "🌟",
      socialMedia: "@engineering_india_pce",
      instagramUrl: "https://www.instagram.com/engineering_india_pce?igsh=YXNycjdvOTdwZThr",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-indigo-300",
      accentColor: "indigo",
      description: "Illuminating Engineering Excellence",
      image: "./images/pce.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-pulse');
      setTimeout(() => setAnimationClass(''), 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="min-h-screen py-20 px-6 relative overflow-hidden mt-24"
      style={{ backgroundColor: 'rgba(173,216,230,0.35)' }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-16 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-12 w-32 h-32 bg-gradient-to-br from-purple-300 to-violet-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Animated Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="mb-8">
          <h1 className={`text-7xl font-black text-blue-900 mb-6 tracking-tight ${animationClass}`}>
            OUR COLLEGES
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
            <Star className="text-purple-500 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our network of premier engineering institutions, where innovation meets excellence
            and dreams transform into reality
          </p>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {colleges.map((college, index) => (
            <div
              key={index}
              className={`${college.color} ${college.borderColor} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* College Header */}
              <div className="flex items-start mb-8">
                <div className={`text-5xl mr-4 animate-bounce transition-transform duration-300 ${hoveredCard === index ? 'scale-125' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}>
                  {college.logo}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-2">
                    {college.name}
                  </h2>
                  <p className="text-sm text-gray-600 italic font-medium">
                    {college.description}
                  </p>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex items-center text-gray-700">
                    <Globe className="w-5 h-5 mr-3 text-gray-600" />
                    <div>
                      <a
                        href={college.instagramUrl}

                        className="font-bold text-lg text-indigo-600 hover:underline"
                      >
                        {college.socialMedia}
                      </a>
                      <p className="text-xs text-gray-500">Social Media Handle</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* College Image */}
              <div className="mb-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-lg">{college.shortName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: "Colleges Connected - Building a united student community across Nagpur.", value: "8+", icon: <BookOpen className="w-8 h-8" />, color: "from-pink-200 to-rose-300", textColor: "text-rose-700" },
            { label: "Many Social Events - Creating awareness and inspiring positive change in society.", value: "Social Events", icon: <Users className="w-8 h-8" />, color: "from-blue-200 to-sky-300", textColor: "text-sky-700" },
            { label: "Many Technical Events - Fostering innovation, learning, and skill development.", value: "Technical Events", icon: <Globe className="w-8 h-8" />, color: "from-green-200 to-emerald-300", textColor: "text-emerald-700" },
            { label: "Every Year - Expanding our reach, impact, and opportunities for students.", value: "Growing", icon: <Zap className="w-8 h-8" />, color: "from-purple-200 to-violet-300", textColor: "text-violet-700" }
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.color} border-2 border-white/60 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm`}>
              <div className={`${stat.textColor} mb-4 flex justify-center animate-bounce`} style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-black ${stat.textColor} mb-2`}>{stat.value}</div>
              <div className={`text-sm ${stat.textColor} font-bold uppercase tracking-wide`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced About Our College Network Section */}
        <div className="bg-gradient-to-r from-white/50 via-blue-50/50 to-white/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-white/40 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Our College Network
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <Award className="text-purple-500 animate-pulse w-6 h-6" />
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A constellation of excellence across Nagpur
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-gray-800 flex items-center justify-center mb-6">
                  <span className="text-4xl mr-4 animate-bounce">🚀</span>
                  Milestones Reached
                </h3>
                <div className="space-y-4">
                  {[
                    "Backed by Vidarbha Vaibhav, a respected organization known for promoting educational excellence and social impact.",
                    "Follows the inspiring path of Swami Vivekananda’s philosophy — “Arise, awake, and stop not till the goal is reached” — motivating students to push boundaries and aim high.",
                    "Builds a strong sense of community, connection, and contribution, encouraging students to create meaningful bonds and impactful projects.",
                    "Encourages creativity and innovation by providing students with opportunities to explore, experiment, and excel in real-world challenges.",
                    "Helps students unlock their hidden potential by cultivating leadership skills, confidence, and a growth mindset.",
                    "Promotes an environment of team spirit and collaborative problem-solving through interactive events and technical activities.",
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4 mt-2 group-hover:animate-ping"></div>
                      <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <p className="text-2xl font-bold italic leading-relaxed">
                  "Together, we're not just building engineering careers – we're architecting the future of technology, innovation, and human progress in India and beyond."
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <Star className="text-yellow-300 animate-pulse w-6 h-6" />
                  <Star className="text-yellow-300 animate-pulse w-6 h-6" style={{ animationDelay: '0.2s' }} />
                  <Star className="text-yellow-300 animate-pulse w-6 h-6" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default CollegesSection;