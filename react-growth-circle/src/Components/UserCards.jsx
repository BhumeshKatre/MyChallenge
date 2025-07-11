import React from 'react';

const UserCards = () => {
  return (
    <>
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white">
        {/* Image section */}
        <div className="bg-blue-500 w-50 flex justify-center p-4">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Info section */}
        <div className="bg-gray-100 text-center py-4">
          <h2 className="text-lg font-semibold text-gray-800">Bhumesh Katre</h2>
          <p className="text-gray-600 text-sm">dev.bhumesh@gmail.com</p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Follow
          </button>
        </div>
      </div>

      <div className='rounded-[10%] border border-blue-400 overflow-hidden'>
        <div className='relative bg-gradient-to-r from-pink-500 to-purple-500 h-30 '> 
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt="User"
            className="absolute left-1/2 -bottom-10 rounded-full w-24 h-24 transform -translate-x-1/2 border-3 border-pink-500"
          />
        </div>
        <div className="mt-12 p-4">
          <h2 className="text-lg font-semibold">Bhumesh Katre</h2>
          <p className="text-gray-500 text-sm">dev.bhumesh@gmail.com</p>
          <div className="flex justify-center gap-4 mt-4 text-gray-600 text-xl">
            <i className="fab fa-behance"></i>
            <i className="fab fa-dribbble"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>

          <div className='text-center'>
            <button className='bg-pink-500 hover:bg-pink-600 py-1 px-3 rounded text-center '>Follow</button>
          </div>
        </div>

      </div>
      
    </>
  );
};

export default UserCards;
