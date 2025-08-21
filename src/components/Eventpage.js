import React from 'react';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Abhyudaya 24.0",
      description: "Abhyudaya 24.0, the annual flagship event organized by Engineering India, was successfully conducted on 29th September 2024.",
      image: '/images/event.jpg'
    },
    {
      id: 2,
      title: "Rashtrabhiman - Celebrating the Spirit of the Nation",
      description: "Held on 26th January, Rashtrabhiman was a patriotic and cultural event organized by the Engineering India Club to commemorate Republic Day and honor the spirit of unity, integrity, and national pride.",
      image: '/images/Rashtra.jpg'
    },
    {
      id: 3,
      title: "Seva Sankalp - A Day to Unwind and Explore",
      description: "Our Club organized a memorable Seva Sankalp trip filled with laughter, bonding, and adventure. It was the perfect blend of relaxation and fun, strengthening camaraderie and team spirit.",
      image: '/images/chikhal.jpg'
    },
    {
      id: 4,
      title: "Shivoham - Honouring the Legacy of Chhatrapati Shivaji Maharaj ",
      description: "Students actively participated in narrating Shivaji Maharaj's journey, highlighting his unmatched contribution to Indian history.",
      image: '/images/Shivaji.jpg'
    },
    {
      id: 5,
      title: "Vrikshaaropan - A Step Towards a Greener Future",
      description: "Planting trees today ensures a greener tomorrow. With this ethos in mind, the coordinators of Engineering India Raisoni initiated a plantation drive called Vrikshaaropan. This initiative is dedicated to promoting environmental sustainability through the collective effort of tree planting.",
      image: "./images/vriksh.jpg"
    },
    {
      id: 6,
      title: "Industry Visit - A Day of Learning and Inspiration",
      description: "An inspiring industry visit to Excellon Software, Nagpur.Had the privilege to interact with Mr. Vinod Tambi, Co-founder of Excellon Software, and gain valuable insights into the tech world 🌟 A day filled with learning and inspiration!🚀📚.",
      image: "./images/excellon.jpg"
    }
  ];

  return (
    <div id="events" className="bg-[rgba(173,216,230,0.35)] min-h-screen font-sans"> {/* Added ID here */}
      {/* Banner */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="/images/abhyu.avif"
          alt="Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Our Events</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Engineering India Club events are developing and providing new opportunities to learn and empowers the
            youth to "think nationally and act locally" driving innovation, leadership, and meaningful impact within our
            communities and beyond.
          </p>
        </div>
      </div>

      {/* Events Grid Section */}
      <div className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Event Image */}
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
