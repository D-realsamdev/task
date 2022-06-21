import bg from "../images/istockphoto-1160927409-612x612.jpg";
import { Row,Col,Container } from 'react-bootstrap';
import PLAY from "../images/PLAY.png";
import screenShare from "../images/SHARE SCREEN.png";
import liveVideo from "../images/LIVE VIDEO.png";
import endCall from "../images/END VIDEO.png";
import microphone from "../images/MICROPHONE.png";
import setting from "../images/SETTINGS.png";
import reduceScreen from "../images/REDUCE SCREEN.png";
import teacherRemark from "../images/TEACHER' REMARK.png";

const VideoCard = ({imgSrc, action=PLAY}) => {
    return (
      <div>
        <Container style={imageBox}>
        <div className=" d-flex align-item-center justify-content-center" style={{height:"80%"}} >
            <Row>
              <img style={playImg} src={action} alt="Play/Pause" />
            </Row>
        </div>
        <div>
       <div className="d-flex align-item-center justify-content-center">
        <Row >
              <p>
                  <img style={funcImg} src={screenShare} alt="Share screen" />
                  <img style={funcImg} src={liveVideo} alt="video" />
                  <img style={funcImg} src={endCall} alt="call" />
                  <img style={funcImg} src={microphone} alt="microphone" />
                  <img style={funcImg} src={setting} alt="setting" />
              </p>
        </Row>
       </div>
        </div>
      </Container>
      <Row>
        <Col md={{ span: 7,  }}>
        <strong>
              <img style={funcImg} src={teacherRemark} alt="teacherRemark" />
							Gbolahan Adegoke 
				</strong>
        <p>Thank you everyone for joining this class. I want everyone's opinion so please start rolling in!</p>
        </Col>
        <Col md={{  offset: 3 }}>
            <img style={funcImg} src={reduceScreen} alt="reduceScreen" />
        </Col>
    </Row>
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
  const funcImg ={
    padding:"1em"
  }