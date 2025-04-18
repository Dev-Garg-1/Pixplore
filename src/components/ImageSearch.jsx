import React, { useState } from 'react'

function ImageSearch({ searchText }) {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    };

  return (
    <div className='w-full max-w-md mx-auto px-4'>
        <div>
            <form
            onSubmit={onSubmit}
            >
                <input 
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base'
                type="text" 
                placeholder='Search for images ...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    </div>
  )
}

export default ImageSearch