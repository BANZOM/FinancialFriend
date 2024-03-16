const VideoPreview = () => {
  const videoLinks =
  ["t_vCXrVL5H4",
  "mYCpclKeCrs",
  ];
  return (
    <div>
      {videoLinks.map((link, index) => (
        <div key={index}>
          <h2>Video {index + 1}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoPreview;
