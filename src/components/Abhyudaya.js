import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import {
  CodeBracketIcon,
  AcademicCapIcon,
  PaintBrushIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartBarIcon,
  MicrophoneIcon,
  BuildingLibraryIcon,
  BookOpenIcon,   // ✅ Added for Lecture Series
} from "@heroicons/react/24/solid";

import { Navbar } from './Home';
import { Footer } from './Magazine';

// Define competition data with slightly more descriptive text for cards
const competitions = [
  { title: 'Ultimate Socio Technocrat', icon: <AcademicCapIcon className="h-10 w-10 text-green-600 mb-3" />, description: "Blend social awareness with technological solutions to drive meaningful change." },
  { title: 'Treasure Hunt(AdvayShodh)', icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-purple-600 mb-3" />, description: "An adventurous hunt combining riddles, clues, and problem-solving for the ultimate prize." },
  { title: 'Pragyan Lecture Series', icon: <BookOpenIcon className="h-10 w-10 text-pink-600 mb-3" />, description: "Engage with experts, gain insights, and expand your knowledge through inspiring talks." },
  { title: 'Youth Parliament', icon: <BuildingLibraryIcon className="h-10 w-10 text-amber-600 mb-3" />, description: "Experience parliamentary proceedings and debate policies like a true leader." },
  { title: 'Hackathon', icon: <CodeBracketIcon className="h-10 w-10 text-blue-600 mb-3" />, description: "Code, innovate, and solve real-world problems in a high-energy environment." },
  { title: 'Drawing & Painting', icon: <PaintBrushIcon className="h-10 w-10 text-red-600 mb-3" />, description: "Unleash your creativity with strokes and colors that bring imagination to life." },
  { title: 'Speech', icon: <MicrophoneIcon className="h-10 w-10 text-indigo-600 mb-3" />, description: "Command the stage with powerful words and inspiring rhetoric." },
  { title: 'Drama', icon: <PresentationChartBarIcon className="h-10 w-10 text-teal-600 mb-3" />, description: "Step onto the stage and captivate the audience with your dramatic flair." },
];

// Testimonial data with placeholder images
const testimonialsData = [
  {
    name: "Aarav Sharma",
    feedback: "Participating in Abhyudaya was an incredible experience that broadened my horizons and connected me with like-minded individuals. Highly recommended!",
    image: "https://placehold.co/100x100/6A057F/ffffff?text=AS" // Darker purple
  },
  {
    name: "Sneha Patel",
    feedback: "The competitions pushed me to think creatively and collaborate effectively. I loved every moment and the vibrant atmosphere!",
    image: "https://placehold.co/100x100/F58634/ffffff?text=SP" // Vibrant orange
  },
  {
    name: "Rahul Mehta",
    feedback: "Truly an event to remember. I had so much fun and gained invaluable insights. Abhyudaya is a platform for true growth.",
    image: "https://placehold.co/100x100/007bff/ffffff?text=RM" // Bright blue
  },
  {
    name: "Priya Singh",
    feedback: "The organization was flawless, and the energy was infectious. Abhyudaya provided a fantastic opportunity to showcase my talents.",
    image: "https://placehold.co/100x100/28a745/ffffff?text=PS" // Success green
  },
];

// Timeline data
const timelineData = [
  { year: "2011", title: "Inception", desc: "Abhyudaya was founded with a vision to foster creativity and cultural exchange among students." },
  { year: "2015", title: "Intercollege Event", desc: "Expanded its reach, welcoming participants from various engineering colleges across Nagpur." },
  { year: "2023", title: "Tech + Cultural Merge", desc: "Integrated technical competitions with cultural events, broadening its scope and appeal." },
  { year: "2024", title: "Mega Fest", desc: "Achieved a milestone with over 1000 attendees, significant media coverage, and widespread acclaim." },
];

// Memories data for slideshow
const memoriesData = [
  {
    src: "/images/im1.jpg",
    title: "Opening Ceremony",
    description: "The grand inauguration that set the tone for an unforgettable event"
  },
  {
    src: "/images/im2.jpg", 
    title: "Competition Highlights",
    description: "Moments of intense competition and brilliant performances"
  },
  {
    src: "/images/im3.jpg",
    title: "Cultural Performances", 
    description: "Vibrant displays of talent and artistic expression"
  },
  {
    src: "/images/im4.jpg",
    title: "Award Ceremony",
    description: "Celebrating achievements and recognizing outstanding contributions"
  }
];

const Abhyudaya = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % memoriesData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memoriesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memoriesData.length) % memoriesData.length);
  };

  return (
    <>
    <Navbar />
    <div className="w-full font-inter antialiased"> {/* Apply Inter font globally, added antialiased */}

      {/* Hero Section: ABHYUDAYA */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 text-gray-800 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden mt-24">
        {/* Subtle background pattern/texture - Adjusted color and size */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles-hero" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#C7D2FE" /> {/* Lighter blue for subtlety */}
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles-hero)" />
          </svg>
        </div>

        {/* Animated Heading */}
     <Particles
  id="abhyudaya-particles"
  init={async (main) => {
    await loadSlim(main);
  }}
  options={{
    fullScreen: { enable: false },
    particles: {
      number: { value: 110 }, // 🔼 Increased particle count
      color: { value: ["#FF5722", "#1C1C1C", "#0B6623"] }, // 🔥 Darker tricolor shades
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        color: "#555",
        distance: 100,
        opacity: 0.4,
        width: 1
      }
    }
  }}
  className="absolute inset-0 z-0"
/>
<motion.h1
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
  whileHover={{
    scale: 1.15,
    textShadow: "0px 0px 20px rgba(37, 99, 235, 0.9)",
    color: "#1d4ed8" // Tailwind blue-700
  }}
  className="text-9xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text drop-shadow-lg"
>
  ABHYUDAYA
</motion.h1>


        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="text-lg md:text-2xl text-blue-800 font-semibold text-center mb-4 animate-pulse-slow"
        >
          || यः करोत् मनोभवान् न तदा दुष्टम् ||
        </motion.p>

        {/* Decorative Tricolor Divider with subtle animation */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '120px', opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 120, damping: 10 }}
          className="flex gap-2 mt-4 mb-8 justify-center"
        >
          <div className="w-10 h-2.5 bg-orange-500 rounded-full shadow-md"></div>
          <div className="w-10 h-2.5 bg-white border border-gray-200 rounded-full shadow-md"></div>
          <div className="w-10 h-2.5 bg-green-600 rounded-full shadow-md"></div>
        </motion.div>

        {/* CTA Buttons with enhanced hover effects and subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 mb-12"
        >
         <a
  href="https://www.instagram.com/reel/DCeC_p_g_Fm/?igsh=Zmx4ZmpyZ2FpaDVz"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)" }}
    whileTap={{ scale: 0.95 }}
    className="px-10 py-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white font-bold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-900 transition-all duration-300 ease-in-out transform text-lg"
  >
    VIEW HIGHLIGHTS
  </motion.button>
</a>

          <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden px-10 py-4 border-2 border-blue-600 text-blue-700 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform text-lg"
>
              REGISTER NOW
         </motion.button>

        </motion.div>

        {/* About Section with improved readability and richer shadow */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl text-center bg-white/75 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-blue-100 transform hover:scale-[1.01] transition-transform duration-300"
        >
          <h2 className="text-3xl text-blue-900 font-extrabold mb-5">About Abhyudaya</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Abhyudaya</strong> is a collaborative social initiative conducted under the banner of Engineering India, where students
            from various engineering institutes across Nagpur come together to drive change and spread awareness on
            important social issues. This annual event fosters youth engagement through impactful campaigns, outreach
            programs, and community-driven activities. With the support of <strong className="text-blue-700">300+ coordinators</strong> and participation from over
            <strong className="text-blue-700"> 2500 students</strong>, Abhyudaya is a testament to unity, compassion, and the shared spirit of responsibility among
            future engineers.
          </p>
        </motion.div>
      </section>

    {/*INDIAN KNOWLEDGE SYSTEM*/}
<section className="bg-gradient-to-br from-indigo-50 via-white to-orange-50 px-6 py-20 text-center relative overflow-hidden animate-fade-in">
  {/* Floating Mandala Motif */}
 
  <Particles
    id="iks-particles"
    init={async (main) => await loadSlim(main)}
    options={{
      fullScreen: { enable: false },
      particles: {
        number: { value: 50 },
        color: { value: ["#FF5722", "#1C1C1C", "#0B6623"] },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 2.5,
          direction: "none",
          outModes: { default: "bounce" }
        },
        links: {
          enable: true,
          color: "#555",
          distance: 100,
          opacity: 0.4,
          width: 1
        }
      }
    }}
    className="absolute inset-0 z-0"
  />

  <div className="absolute inset-0 opacity-10 pointer-events-none animate-gradient-move">
    <svg className="w-full h-full" fill="none">
      <pattern id="iks-motif" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="25" stroke="#A5B4FC" strokeWidth="1.5" fill="none" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#iks-motif)" />
    </svg>
  </div>

  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-6 drop-shadow"
  >
    दर्शन और शासन – Wisdom and Leadership
  </motion.h2>

  {/* Divider */}
  <motion.div
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="w-36 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full mx-auto mb-10 shadow"
  />

  {/* Description */}
  <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
>
  <span className="font-semibold text-indigo-700"></span>
Wisdom and leadership in Engineering India stand for guiding young minds with values, vision, and responsibility. True leadership is not just about positions, but about serving society, uplifting peers, and working with unity of purpose. With the spirit of “Think Nationally, Act Locally,” we inspire students to lead with character, embrace right actions, and contribute to the nation’s growth through local impact. Through Abhyudaya, we strive to instill these values among our coordinators and participants, nurturing a community where knowledge meets responsibility, and leadership becomes a journey of service.
</motion.p>


  {/* Icon Cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {[
    {
      year: "2023",
      name: "Swami Vivekanand, Awakening Youth, Inspiring Nation",
      description: (
        <>
          <span className="font-bold">ABHYUDAYA 23</span> was celebrated with the guiding light of Swami Vivekananda, whose ideals of youth power, self-belief, and service to the nation continue to inspire us. His vision reminds us that true strength lies in character, knowledge, and dedication to society. Through this theme, we encouraged students to awaken their potential and contribute with the spirit of <span className="italic text-orange-700">“Arise, Awake, and Stop not till the goal is reached.”</span>
        </>
      ),
    },
    {
      year: "2024",
      name: "Ahilyabai Holkar, Indian Knowledge System",
      description: (
        <>
          <span className="font-bold">ABHYUDAYA 24</span> celebrated the richness of the <span className="font-bold">Indian Knowledge System</span> and the inspiring legacy of Ahilyabai Holkar. The event highlighted the depth of India’s scientific, cultural, and philosophical wisdom while paying tribute to Ahilyabai’s visionary leadership, courage, and dedication to social welfare. Together, these themes reminded us to take pride in our roots, draw strength from our heritage, and lead with wisdom and compassion in building the future.
        </>
      ),
    },
    {
      year: "2025",
      name: "ABHYUDAYA 25 — Coming Soon",
      description: (
        <>
          <span className="font-bold">ABHYUDAYA 25</span> is on the horizon! 🌟 Stay tuned for an exciting new theme that will continue our journey of cultural celebration, innovation, and inspiration. Something extraordinary is coming your way — get ready to be part of it! Stay Tunedd!!!
        </>
      ),
    },
  ].map((item, index) => (
 <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  whileHover={{ scale: 1.02 }}
  className={`bg-gradient-to-br from-indigo-100 via-white to-orange-100 rounded-3xl shadow-lg p-6 text-gray-800 transition-all duration-300 ${
    item.isCentered
      ? "flex flex-col justify-center items-center text-center h-[300px] hover:shadow-2xl"
      : "flex flex-col justify-between hover:shadow-2xl"
  }`}
>
  <h3 className={`text-2xl font-extrabold text-blue-800 ${item.isCentered ? "" : "mb-3"}`}>
    {item.name} ({item.year})
  </h3>
  <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
</motion.div>

  ))}
</div>



  {/* 🔁 Continuous Horizontal Quote Sequence */}
 {/* 🔁 Horizontal Quote Ticker: Alternating Ahilyabai & Vivekananda */}
<div className="overflow-hidden w-full py-10">
  <motion.div
    className="flex gap-8 px-4"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 18, // slightly faster
      ease: "linear"
    }}
  >
    {[
      {
        quote: "In devotion lies our true power to uplift, protect, and serve – अहिल्याबाई होलकर",
        bg: "from-pink-100 via-white to-pink-200"
      },
      {
        quote: "Arise, awake, and stop not till the goal is reached – स्वामी विवेकानंद",
        bg: "from-orange-100 via-white to-indigo-100"
      },
      {
        quote: "I shall sow justice in every path I walk – अहिल्याबाई होलकर",
        bg: "from-pink-100 via-white to-pink-200"
      },
      {
        quote: "The moment I have realized God, I am bound to serve – स्वामी विवेकानंद",
        bg: "from-orange-100 via-white to-indigo-100"
      }
    ].map((item, i) => (
      <div
        key={i}
        className={`px-6 py-4 bg-gradient-to-br ${item.bg} rounded-xl shadow-md font-medium text-lg text-gray-800 whitespace-nowrap flex-shrink-0`}
      >
        {item.quote}
      </div>
    ))}
  </motion.div>
</div>

  {/* Footer Sanskrit Line */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  className="mt-12 text-center font-serif text-gray-700"
>
  <p className="text-2xl italic text-gray-800 mb-3">
    "विवेक दीपो विधेः पथप्रदः, करुणा छाया धर्मस्य दायिनी।"
  </p>
  <p className="text-lg text-gray-600">
    विवेक विधि का दीपक है, जो मार्ग दिखाता है; करुणा धर्म की छाया है, जो उसे फलित करती है।
  </p>
</motion.div>

</section>

      {/* Competitions Section */}
        {/* Decorative elements - Larger, more subtle */}
        <section className="min-h-screen w-full px-4 py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-gray-900 relative overflow-hidden">
  {/* Particle Background */}
  <Particles
    id="competitions-particles"
    init={async (main) => await loadSlim(main)}
    options={{
      fullScreen: { enable: false },
      particles: {
        number: { value: 50 }, // 🔽 Reduced particle count
        color: { value: ["#FF5722", "#1C1C1C", "#0B6623"] },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 2.5,
          direction: "none",
          outModes: { default: "bounce" }
        },
        links: {
          enable: true,
          color: "#555",
          distance: 100,
          opacity: 0.4,
          width: 1
        }
      }
    }}
    className="absolute inset-0 z-0"
  />

        
        <div className="absolute top-10 left-10 text-9xl opacity-5 rotate-12 pointer-events-none text-blue-300">🏆</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-5 -rotate-12 pointer-events-none text-green-300">✨</div>

        <h2 className="text-5xl md:text-6xl text-blue-800 font-extrabold text-center mb-16 drop-shadow-lg leading-tight">
          Unleash Your Potential: <br /> Our Exciting Competitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {competitions.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.07,
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut", type: "spring", stiffness: 300 }
              }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              className="bg-white/95 rounded-3xl shadow-xl p-8 transition-all flex flex-col items-center text-center border border-gray-100 hover:border-blue-400 cursor-pointer"
            >
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-6xl mb-5"
              >
                {comp.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900 tracking-wide">
                {comp.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {comp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cherished Memories Section */}
      <section className="relative w-full px-4 py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50 text-gray-900 overflow-hidden">
        {/* Particle Background */}
        <Particles
          id="memories-particles"
          init={async (main) => await loadSlim(main)}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 60 },
              color: { value: ["#FF5722", "#1C1C1C", "#0B6623"] },
              shape: { type: "circle" },
              opacity: { value: 0.6 },
              size: { value: 3 },
              move: {
                enable: true,
                speed: 2.5,
                direction: "none",
                outModes: { default: "bounce" }
              },
              links: {
                enable: true,
                color: "#555",
                distance: 100,
                opacity: 0.4,
                width: 1
              }
            }
          }}
          className="absolute inset-0 z-0"
        />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-9xl opacity-5 rotate-12 pointer-events-none text-rose-300">📸</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-5 -rotate-12 pointer-events-none text-amber-300">💫</div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-rose-800 mb-16 drop-shadow-lg leading-tight"
        >
          Cherished Memories <br />
          <span className="text-3xl md:text-4xl text-amber-700">Moments That Define Us</span>
        </motion.h2>

        {/* Slideshow Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-rose-100"
        >
          {/* Image Display */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={memoriesData[currentSlide].src}
                  alt={memoriesData[currentSlide].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/800x500/6366f1/ffffff?text=${encodeURIComponent(memoriesData[currentSlide].title)}`;
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </motion.button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 py-6 bg-gradient-to-r from-rose-100 to-amber-100">
            {memoriesData.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-rose-600 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Memory Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {currentSlide + 1} / {memoriesData.length}
          </motion.div>
        </motion.div>

        {/* Memory Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { number: "2500+", label: "Participants" },
            { number: "300+", label: "Coordinators" },
            { number: "8", label: "Competitions" },
            { number: "13", label: "Years Strong" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-rose-200 hover:border-rose-400 transition-all duration-300"
            >
              <div className="text-3xl font-extrabold text-rose-700 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-sky-100 text-gray-900 overflow-hidden">
<Particles
  id="testimonials-particles"
  init={async (main) => await loadSlim(main)}
  options={{
    fullScreen: { enable: false },
    particles: {
      number: { value: 80 },
      color: { value: ["#FF5722", "#1C1C1C", "#0B6623"] },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        color: "#555",
        distance: 100,
        opacity: 0.4,
        width: 1
      }
    }
  }}
  className="absolute inset-0 z-0"
/>

        {/* 💬 Decorative Emoji Strip Along Right Margin (Desktop Only) - Enhanced opacity and colors */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 text-5xl opacity-15 pointer-events-none p-4">
          <span className="text-blue-400">💬</span>
          <span className="text-purple-400">✨</span>
          <span className="text-green-400">👍</span>
          <span className="text-orange-400">🌟</span>
        </div>

        {/* 🧡 Section Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-800 mb-16 drop-shadow-lg tracking-wide leading-tight">
          Voices of Abhyudaya <br /> What Our Participants Say
        </h2>

        {/* 👥 Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.18, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }}
              className="bg-white/95 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100 flex flex-col justify-between transform hover:border-blue-300"
            >
              <p className="text-gray-700 text-base italic mb-7 leading-relaxed">"{testimonial.feedback}"</p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-500 shadow-md transform hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${testimonial.name.split(' ').map(n => n[0]).join('')}`; }} // Random colorful placeholder on error
                />
                <h4 className="text-xl font-bold text-blue-800">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full px-4 py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900 overflow-hidden">
<Particles
  id="timeline-particles"
  init={async (main) => await loadSlim(main)}
  options={{
    fullScreen: { enable: false },
    particles: {
      number: { value: 80 },
      color: { value: ["#FF5722", "#1C1C1C", "#0B6623"] },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        color: "#555",
        distance: 100,
        opacity: 0.4,
        width: 1
      }
    }
  }}
  className="absolute inset-0 z-0"
/>

        {/* 🌌 Decorative Background Icon - Enhanced opacity and colors */}
        <div className="absolute top-10 left-10 text-9xl opacity-10 select-none pointer-events-none text-purple-300">
          ⏳
        </div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-10 select-none pointer-events-none text-indigo-300">
          🚀
        </div>

        {/* 🕰️ Timeline Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 text-center mb-16 tracking-wide drop-shadow-lg leading-tight">
          Abhyudaya Journey <br /> A Decade of Impact
        </h2>

        {/* 📍 Vertical Line Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main vertical line - Thicker and more prominent */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-6 border-blue-400 rounded-full shadow-inner"></div>

          {timelineData.map((item, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.8, delay: index * 0.25, ease: [0.17, 0.67, 0.83, 0.67] }}
  className={`mb-16 flex items-center w-full ${
    index % 2 === 0 ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
  }`}
>
  {/* Spacer for alignment on desktop */}
  <div className="hidden md:block w-5/12"></div>

 

  {/* Content Card */}
  <div className={`w-full md:w-5/12 bg-white/95 rounded-3xl shadow-xl p-7 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-blue-200 transform hover:scale-[1.02] ${
    index % 2 === 0 ? "text-right md:text-left" : "text-left"
  }`}>
    <h3 className="text-2xl font-bold text-blue-800 mb-3">
      {item.title} (<span className="text-blue-600">{item.year}</span>)
    </h3>
    <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
  </div>
</motion.div>

          ))}
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
}

// Main App component to render Abhyudaya
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Abhyudaya />
    </div>
  );
}

export default App;