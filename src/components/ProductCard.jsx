import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="border rounded-lg p-1 md:p-4 shadow-md bg-white">
      <div className="w-full max-h-32 shadow-md overflow-hidden rounded-xl" >

      <img src={product.image} alt={product.name} width='100%' height='100%' className=' object-cover object-center rounded' />
      </div>
      <h2 className="text-sm font-bold mt-2">{product.name}</h2>
      <p className="hidden md:block text-sm text-gray-600">{product.description}</p>
      <button
        onClick={() => setShowForm(true)}
        className="mt-3 text-xs bg-green-600 text-white px-2 md:px-4  mb-2 py-2 rounded hover:bg-green-700"
      >
        Book Now
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Send Booking Query</h3>
            <form className="flex flex-col gap-4">
              <input className="border p-2 rounded" placeholder="Your Name" />
              <input className="border p-2 rounded" placeholder="Mobile Number" />
              <textarea className="border p-2 rounded" placeholder="Your Message" rows={3}></textarea>
              <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Send</button>
            </form>
            <button onClick={() => setShowForm(false)} className="mt-3 text-red-600 underline">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
