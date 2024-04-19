import data from '../assets/blogs-data.json'
import BlogsCard from '../components/BlogsCard'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import RecentBlogs from '../components/RecentBlogs'

const Blogs = () => {

  const noOfPages = Math.ceil(data.blogs.length / 5)

  const [search, setSearch] = useState('')
  const [blogsList, setBlogsList] = useState(data.blogs)

  const filterList = () => {
    if(search === '') { 
      setBlogsList(data.blogs); 
      return; 
    }
    const filterdList = blogsList.filter((item) => {
      if(item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        if(item === ''){
          setNotFound(prev => !prev)
        }
        return item;
      }
    });
    setBlogsList(filterdList);
  }

  useEffect(() => {
    filterList()
  })

  return (
    <div className='blogs-container'>
      <div className='blogs'>
        {
          blogsList.map((items, index) => (
            <BlogsCard key={index} details={items}/>
          ))
        }
      </div>
      <div className='search-recent-blogs-container'>
        <div className='search-container'>
          <input 
          type='text'
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          />
          <BiSearch/>
        </div>
        <div className='recent-posts'>
          <h1>Recent Blogs</h1>
          {data.blogs.slice(0, 6).map((items, index) => (
            <RecentBlogs key={index} details={items}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
