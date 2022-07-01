// import { useState, useEffect } from 'react';
import { Row,Container,Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import '../index.css';
import bg from "../images/istockphoto-1160927409-612x612.jpg";
import OnboardedCard from "../components/OnboardedCard";
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
					<Row className='mb-2'>
                        <Col md={12}>
                            <h2 style={{ textAlign: "center" }} >
                                ONBOARD KIDS
                            </h2>
                        </Col>
					</Row>
					<Row>
						<OnboardedCard imgSrc={bg} imgAlt="Background Image"/>
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