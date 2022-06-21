// import { useState, useEffect } from 'react';
import { Row, Image,Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import '../index.css';
// import { useNavigate } from 'react-router-dom';
import recording from "../images/RECORDING.png";
import bg from "../images/istockphoto-1160927409-612x612.jpg";
import VideoCard from "../components/VideoCard"
// import { Container } from '@material-ui/core';
const IntegrityTestNew = () => {
	return (
		<div className="layout ">
			<Sidebar />
			<Container   style={customMainDivStyling}>
					<h2>
						KidsTech Africa
					</h2>
					<hr style={{ color: "white" }} />
					<Row>
						<small>
							<Image  src={recording} /> 
							Rec 00:12:36
						</small>
						<strong className='' >
							Sapati Model College, Ilorin
						</strong>
					</Row>
					<Row>
						<VideoCard imgSrc={bg} imgAlt="Background Image"/>
					</Row>
			</Container>
		</div>
	);
};

export default IntegrityTestNew;

const customMainDivStyling = {
	background: '',
	color: 'white',
	padding: '.4rem .7rem',
	border: '.1px solid grey',
	margin:"1em 0em"
};
const commonStyles = {
	borderRadius: '10px',
	borderstyle: 'solid',
	borderwidth: '10px',
	borderColor: '#87AA62',
	textAlign: 'left',
	margin: 'auto'
};