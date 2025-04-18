import './App.css'
import axios from 'axios'
import config from './config/config'
import { useEffect, useState } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch';

function App() {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('curated')

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${term}`, {
          headers: {
            Authorization: config.PEXELS_API_KEY,
          }
        })
  
        setPhotos(res.data.photos);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data: ", error)
        setLoading(false);
      }
      
    })()
  }, [term])

  return loading ? 
  <h1 className='text-center text-3xl font-medium mt-20 animate-pulse text-gray-600'>Loading Images...</h1> 
  : 
  (
    <div className='min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md flex flex-col md:flex-row justify-between items-center px-6 py-4'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 md:mb-0 text-shadow-lg'>
          PIXPLORE
        </h1>
        <ImageSearch searchText={(text) => setTerm(text)} />
      </div>

      <div className='pb-20'>
        <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {photos.map((photo, index) => (
            <ImageCard key={index} photo={photo} />
          ))}
        </div>
      </div>
    </div>
)
}

export default App
