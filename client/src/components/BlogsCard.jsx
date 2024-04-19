const BlogsCard = ({details}) => {
  return (
    <div className="blogs-items">
        <h1>{details.title}</h1>
        <p className="para-content">{details.smallContent}</p>
        <p className="tips-para">Three key tips we like from {details.title}</p>
        {
          details.keyPoints.map((item, index) => (
              <ul className="tips-list" key={index}>
                  <li>{item.first}</li>
                  <li>{item.second}</li>
                  <li>{item.third}</li>
              </ul>
          ))
        }
        <div>
          <a href={details.link} target="_blank">[Read More...]</a>
        </div>
    </div>
  )
}

export default BlogsCard
