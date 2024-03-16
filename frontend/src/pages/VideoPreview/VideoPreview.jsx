import { useEffect, useState } from "react";
import "./index.css"; 

const VideoPreview = () => {
  const [videoLinks, setVideoLinks] = useState([]);

  useEffect(() => {
    const fetchVideoLinks = async () => {
      try {
        const response = await fetch('http://10.243.1.52:5000');
        if (!response.ok) {
          throw new Error('Failed to fetch video links');
        }
        const data = await response.json();
        setVideoLinks(data.links);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoLinks();
  }, []);

  return (
    <div>
      {videoLinks.map((link, index) => (
        <div key={index} className="m-5">
          <h1>LECTURE {index + 1}</h1>
          <iframe
            width="750"
            height="450"
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
