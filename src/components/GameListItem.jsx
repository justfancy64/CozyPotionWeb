import React from 'react'


const GameListItem = ({ name, image, description }) => {
    return (
        <div className='flex flex-col sm:flex-row w-full max-w-full mt-5 mb-5 gap-4 rounded-xl'>
            {/* Image Section */}
            <div className='flex justify-center sm:w-3/4 h-96'>
                <img
                    className='w-full h-full object-cover rounded-xl shadow-lg'
                    src={image}
                    alt={name}
                />
            </div>

            {/* Info Section */}
            <div className='flex flex-col justify-center sm:w-1/4 bg-gray-900 rounded-xl p-4'>
                <h1 className='text-white text-2xl font-bold mb-2 text-center sm:text-left'>
                    {name}
                </h1>
                <p className='text-white text-sm text-center sm:text-left'>
                    {description}
                </p>
            </div>
        </div>
    );
};
export default GameListItem
