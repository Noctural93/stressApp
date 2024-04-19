const VideoLectures = ({details}) => {
  return (
    <div className="videos">
      <iframe
      src={`https://www.youtube.com/embed/${details.id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="yt-video"
    />
    <h1>{details.title}</h1>
    </div>
  )
}

export default VideoLectures
