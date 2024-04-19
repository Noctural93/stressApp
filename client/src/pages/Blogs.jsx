import { useSearchParams } from 'react-router-dom'
import data from '../assets/blogs-data.json'
import BlogsCard from '../components/BlogsCard'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Blogs = () => {

  const [search, setSearch] = useState('')

  return (
    <div className='blogs-container'>
      <div className='blogs'>
        {
          data.blogs.map((items, index) => (
            <BlogsCard key={index} details={items}/>
          ))
        }
      </div>
      <div className='search-recent-blogs-container'>
        <div className='search-container'>
          <input 
          type='text'
          value={search} 
          onChange={() => setSearch(search)}
          />
          <BiSearch/>
        </div>
      </div>
    </div>
  )
}

export default Blogs
