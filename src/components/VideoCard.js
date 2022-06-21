import bg from "../images/istockphoto-1160927409-612x612.jpg";
import PLAY from "../images/PLAY.png";
const VideoCard = ({imgSrc, action=PLAY}) => {
    return (
      <div className="d-flex align-item-center justify-content-center" style={imageBox}>
          <img style={playImg} src={action} alt="Play/Pause" />
      </div>
    )
  }  
  export default VideoCard
  
  const imageBox = {
      padding: "10px 5px",
      height: "450px",
      margin:"0",
      borderRadius: "10px",
      backgroundImage:`url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"
  }
    
  const playImg = {
     margin:"auto"
  }