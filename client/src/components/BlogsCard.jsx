const BlogsCard = ({details}) => {
  return (
    <div className="blogs-items">
      <a href={details.link} target="_blank">
        <h1>{details.title}</h1>
        <p className="para-content">{details.smallContent}</p>
        <p className="tips-para">Three key tips we like from {details.title}</p>
        {
          details.keyPoints.map(item => (
              <ul className="tips-list">
                  <li>{item.first}</li>
                  <li>{item.second}</li>
                  <li>{item.third}</li>
              </ul>
          ))
        }
      </a>
    </div>
  )
}

export default BlogsCard
