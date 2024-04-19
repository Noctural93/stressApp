import { FaAngleRight } from "react-icons/fa6";

const RecentBlogs = ({details}) => {
  return (
    <div className='recent-blogs-container'>
        <FaAngleRight/>
      <a href={details.link} target='_blank'>{details.title}</a>
    </div>
  )
}

export default RecentBlogs
