import React from 'react'

function ImageCard({ photo }) {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg m-4 transform hover:scale-105 transition duration-300'>
        <img 
        className='w-full h-60'
        src={photo.src.medium} 
        alt={photo.photographer} 
        />

        <div className='p-4 bg-white'>
            <h2 
            className='font-semibold text-lg text-gray-800'
            >
                Photo taken by : {photo.photographer}
            </h2>
            <a 
            href={photo.url}
            target='_blank'
            rel='noreferrer'
            className='text-sm text-blue-500 hover:underline'
            >
                View on Pexels
            </a>
        </div>
    </div>
  )
}

export default ImageCard