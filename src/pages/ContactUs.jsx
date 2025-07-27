import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Your Name" />
        <input className="border p-2 rounded" placeholder="Your Email" />
        <textarea className="border p-2 rounded" placeholder="Your Message" rows={4}></textarea>
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Send Message</button>
      </form>

      <div className="mt-6 text-center">
        <p>Follow or contact us directly:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-blue-500 underline">Instagram</a>
          <a href="tel:+1234567890" className="text-blue-500 underline">Call Us</a>
          <a href="mailto:freshbasket@example.com" className="text-blue-500 underline">Email</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
