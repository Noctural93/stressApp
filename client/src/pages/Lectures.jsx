import { useEffect, useState } from 'react'
import data from '../assets/blogs-data.json'
import VideoLectures from '../components/VideoLectures'
import { BiSearch } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa6'

const Lectures = () => {

  const [filterVideos, setFilterVideos] = useState(data.lectures)

  const [videoSearch, setVideoSearch] = useState('')

  const filteredList = () => {
    if(videoSearch == '') {
      setFilterVideos(data.lectures);
      return;
    }
    const filter = filterVideos.filter(item => {
      if(item.title.toLocaleLowerCase().includes(videoSearch.toLocaleLowerCase())) {
        return item;
      }
    })
    setFilterVideos(filter)
  }

  useEffect(() => {
    filteredList();
  })

  return (
    <div className='leatures-main-container'>
      <div className='leatures'>
        {filterVideos.map((item, index) => (
          <VideoLectures key={index} details={item}/>
        ))}
      </div>
      <div className='recent-lectures-search-container'>
        <div className='search-container'>
          <input 
          type='text'
          value={videoSearch} 
          onChange={(e) => setVideoSearch(e.target.value)}
          />
          <BiSearch/>
        </div>
        <div className='recent-posts'>
          <h1>Checkout recent Lectures</h1>
          {
            data.lectures.slice(0, 5).map(item => (
              <div className='recent-videos-list'>
                <FaAngleRight/>
                <a href={`https://www.youtube.com/embed/${item.id}`} target='_blank'>{item.title}</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Lectures
