// import { useState, useEffect } from 'react';
import { Row,Container,Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import '../index.css';
import bg from "../images/istockphoto-1160927409-612x612.jpg";
import Dashboard from "../components/Dashboard";
const VideoHome = () => {
	return (
		<div className="layout ">
			<Sidebar />
			<Container   style={customMainDivStyling}>
					<Row>
                        <Col>
                            <h5>
                                KidsTech Africa
                            </h5>
                        </Col>
                        <Col>
                            <h5 style={{ float: "right" }}>
                                Larry & Mary Group  of School
                            </h5>
                        </Col>
                    </Row>
					<hr style={{ color: "white" }} />
					<Row>
						<Dashboard imgSrc={bg} imgAlt="Background Image"/>
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