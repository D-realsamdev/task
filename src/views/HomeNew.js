// import { useState, useEffect } from 'react';
import { Row, Image,Container,Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import '../index.css';
// import { useNavigate } from 'react-router-dom';
import recording from "../images/RECORDING.png";
import bg from "../images/istockphoto-1160927409-612x612.jpg";
import VideoCard from "../components/VideoCard";
const VideoHome = () => {
	return (
		<div className="layout ">
			<Sidebar />
			<Container   style={customMainDivStyling}>
					<h2>
						KidsTech Africa
					</h2>
					<hr style={{ color: "white" }} />
					<Row className='mb-2'>
					<Col md={3}>
						<small>
							<Image  src={recording} /> 
							Rec 00:12:36
						</small></Col>
    				<Col md={{ span: 4, offset: 5 }}>
						<strong>
							Sapati Model College, Ilorin
						</strong>
					</Col>
						
					</Row>
					<Row>
						<VideoCard imgSrc={bg} imgAlt="Background Image"/>
					</Row>
			</Container>
		</div>
	);
};

export default VideoHome;

const customMainDivStyling = {
	background: '',
	color: 'white',
	padding: '.4rem .7rem',
	border: '.1px solid grey',
	margin:"1em 0em"
};