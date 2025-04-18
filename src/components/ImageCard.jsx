import React from 'react'

function ImageCard({ photo }) {

  const handleDownload = async () => {
    try {
      const response = await fetch(photo.src.original);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${photo.id}.jpeg`; 

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); 
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className='relative group rounded-xl overflow-hidden shadow-lg m-4 transform hover:scale-105 transition duration-300'>
        <img 
        className='w-full h-60'
        src={photo.src.medium} 
        alt={photo.photographer} 
        />

        <button
          onClick={handleDownload}
          className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4 py-2 text-sm rounded-md cursor-pointer'
        >
          Download
        </button>

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