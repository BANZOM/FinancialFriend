import { useEffect, useState } from "react";
import "./index.css"; 

const VideoPreview = () => {
  const [videoLinks, setVideoLinks] = useState([]);
  const [title, setTitle] = useState([]); 

  useEffect(() => {
    const fetchVideoLinks = async () => {
      try {
        const response = await fetch('http://10.243.1.52:5000/search');
        if (!response.ok) {
          throw new Error('Failed to fetch video links');
        }
        const data = await response.json();
        setVideoLinks(data.links);
        setTitle(data.titles); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoLinks();
  }, []);

  return (
    <div>
      {videoLinks.map((link, index) => (
        <div key={index} className="m-5 text-2xl">
          <h1><u>TOPIC:</u> {title[index]}</h1>
          <div className="justify-content-center"> 
          <iframe
            width="750"
            height="450"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
            allowfullscreen
          ></iframe>
        </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPreview;
