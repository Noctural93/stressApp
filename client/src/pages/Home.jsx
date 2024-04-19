const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to CalmSpace</h1>
        <p>Feeling stressed? You're in the right place. Welcome to CalmSpace, your personal sanctuary for managing stress and promoting well-being.</p>
        <img src="https://d37v7cqg82mgxu.cloudfront.net/img/home/sun.svg" alt='sun'/>
      </div>
      <div className="explore-section">
        <h1>Explore Our Features</h1>
        <ul>
          <li>
            <span>Blogs</span>: Dive into insightful articles and blogs posts by experts in stress management and mental health.
          </li>
          <li>
            <span>Lectures</span>: Watch informative lectures and videos on topics such as mindfulness, relaxation, and coping strategies.
          </li>
          <li>
            <span>Contact Us</span>: Reach out to our team for questions, feedback, or support. We're here to help!
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
