/* eslint-disable react/no-unescaped-entities */
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer'
import VideoPreview from '../VideoPreview/VideoPreview'
import { useEffect, useState } from 'react';
function Home() {

  const url = "http://localhost:5000/api/profile";
  const [user, setUser] = useState({});

  const fetchInfo = () => {
    const authToken = localStorage.getItem("authToken"); // Get authToken from localStorage

    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => setUser(response.user))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className="flex items-center space-x-2 text-2xl justify-content-center font-medium font-serif text-black-500 dark:text-gray-100 m-2"> 
      <div>
      <div className="text-2xl">
        Welcome <u>{user.username}</u>,
      </div>
      <div>
        Here's your today's recommendations!!!
      </div>
      </div>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="mb-10">
          <VideoPreview />
        </div>
      </div>
      
      <div> 
        <Footer />
      </div>
    </div>
  )
}

export default Home
