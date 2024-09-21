import React from 'react';

function Card({ item }) {
  return (
    <div className='Card bg-white text-black shadow-lg p-4 w-80 rounded-lg hover:scale-105 duration-200 m-5'>
      <div className='w-full h-[200px] m-2 '>
        <img src={item.image} alt="Image Error" className='w-[95%] h-full object-cover rounded-lg' />
      </div>
      <div className=' flex flex-col'>
        <h2 className='Card-title font-bold text-lg mb-2  flex gap-3'>{item.name}
        <div className='  bg-pink-500 rounded-full w-12 px-2'>{item.category}</div>
        </h2>
        <p className='text-[12px]'>{item.title}</p>
        
        
        <div className='Card-action flex justify-between items-center'>
          <div className=' rounded-lg w-7 border border-gray-500 '>${item.price}</div>
          <div className='bg-red-500 px-2 p-1 rounded-lg cursor-pointer hover:bg-pink-600 transition'>
            Buy now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
