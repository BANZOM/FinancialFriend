import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer'
import VideoPreview from '../VideoPreview/VideoPreview'

function Home() {
  return (
    <div>
      <div>
        <NavBar/>
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
