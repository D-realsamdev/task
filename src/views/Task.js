// import { useState, useEffect } from 'react';
import { Row,Container,Col } from 'react-bootstrap';
import '../index.css';
import AddTask from "../components/add-task.component";
const TaskHome = () => {
	return (
		<div className="layout ">
			<Container>
					<Row>
                        <AddTask/>  
					</Row>
			</Container>
		</div>
	);
};

export default TaskHome;
