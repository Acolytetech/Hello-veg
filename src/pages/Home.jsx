import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../img/Green and Orange Vegetables Email Header.png";
import Fruits from './Fruits';
import Vegetables from './Vegetables';
import { FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const reviews = [
  { name: "Anjali Mehta", text: "The freshness of the fruits was amazing. Delivery was super quick too!" },
  { name: "Rajesh Kumar", text: "Excellent service and premium quality vegetables. Loved the spinach!" },
  { name: "Priya Sharma", text: "This is my third order and the quality has always been top-notch. Highly recommended!" },
  { name: "Amit Verma", text: "Quick delivery and great customer support. Will definitely order again!" },
  { name: "Sneha Gupta", text: "Healthy, clean, and delicious produce. Hello Veg is a game changer!" },
];

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/vinod.kalwania777@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      await response.json();
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="text-center py-6 space-y-10 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="relative h-100 sm:h-[400px] md:h-[500px] rounded-lg shadow overflow-hidden">
        <img src={banner} alt="Hello Veg Banner" className="absolute inset-0 w-full h-full md:object-cover z-0" />
        <div className="relative z-10 bg-white bg-opacity-50 md:bg-opacity-80 p-4 sm:p-10 md:p-16 rounded max-w-3xl mx-auto mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Welcome to Hello Veg</h1>
          <h2 className="text-2xl sm:text-3xl text-green-600 font-bold mb-2">खेत से आपकी थाली तक</h2>
          <p className="text-base sm:text-lg mb-4">We offer fresh, organic fruits and vegetables directly from the farm to your doorstep.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Link to="/fruits" className="bg-green-600 font-bold text-white px-6 py-2 rounded hover:bg-green-700">Explore Fruits</Link>
            <Link to="/vegetables" className="bg-green-600 font-bold text-white px-6 py-2 rounded hover:bg-green-700">Explore Vegetables</Link>
          </div>
          <p className="text-lg  mb-10 font-medium">Get fresh farm produce delivered within <span className="text-green-700 font-bold">25 minutes</span> right to your doorstep!</p>
           <div className="font-bold flex flex-wrap gap-4 text-base">

                        <a href="tel:+918302394273" className="hover:text-yellow-300 flex items-center gap-2">
                          <FaPhone className="text-red-500 w-6 h-6" /> 83023 94273
                        </a>
                        <a href="https://instagram.com/vinod.choudhary777" target="_blank" rel="noreferrer" className="hover:text-yellow-300 flex items-center gap-2">
                          <FaInstagram className="text-red-500 w-6 h-6" /> @vinod.choudhary777
                        </a>
                        <span className="flex items-start gap-2">
                          <FaMapMarkerAlt className="text-red-500 w-6 h-6 mt-1" />
                          <span>
                            71A, Street 2, First Block,<br />
                            Setia Colony, Sriganganagar
                          </span>
                        </span>
                      </div>
        </div>
      </div>

      {/* Fruits Section */}
      <section className="mt-10">
        <Fruits />
      </section>

      {/* Why Choose Section */}
      <section className="bg-yellow-100 py-10 px-4 rounded-lg shadow mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Why Choose Hello Veg?</h2>
        <p className="text-lg font-medium">Get fresh farm produce delivered within <span className="text-green-700 font-bold">25 minutes</span> right to your doorstep!</p>
        <p className="mt-2">Promoting local farmers and ensuring healthy food for every home.</p>
      </section>

      {/* Vegetables Section */}
      <section className="mt-10">
        <Vegetables />
      </section>

      {/* Reviews Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-200 py-10 px-4 rounded-lg shadow mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-green-800">What Our Customers Say</h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 m-4 rounded-xl shadow-lg min-h-[150px] max-w-[90%] mx-auto flex flex-col justify-between">
              <p className="italic mb-3 text-gray-700">"{review.text}"</p>
              <p className="font-bold text-green-800">- {review.name}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-white to-green-50 py-10 px-4 rounded-lg shadow mt-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-800 text-center md:text-left">Contact Us</h2>
          <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-all">Send Message</button>
            </form>
          </div>
        </div>
        <div className="w-full h-72 md:h-full">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13833.36754633985!2d73.84974233230535!3d29.912058147970463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b542e5fb7311%3A0x4dcc47ead91a4c0d!2sSetia%20Colony%20SGNR%20Rajasthan!5e0!3m2!1sen!2sin!4v1753600742074!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
