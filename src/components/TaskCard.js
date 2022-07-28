import {useState,useEffect} from 'react'
import { Row, Image,Container,Col,Card } from 'react-bootstrap';
import React from 'react';
import useCollapse from 'react-collapsed';
import '../App.css';
const Task = () =>  {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [assignuser, setAssignUser] = useState("");

   
return (
    <Container>
        <Row>
            <Col>
                {/* <Card sm={12} lg={6} md={12} xl={6}> */}
                    <Row>
                        <Col sm={12} lg={6} md={12} xl={4}>
                            <div className="collapsible">
                                <div className="header" {...getToggleProps()}>
                                    {isExpanded ? 'TASKS 0': 'TASKS 0'}
                                </div>
                            <div {...getCollapseProps()}>
                                <div className="content">
                                <form style={formStyling}>
                                    <Row className="justify-content-center">
                                        <Row>
                                            <Col>
                                                    <label>Task Description</label>
                                                    <input type="text" className="form-control shadow-none" placeholder="Follow up" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Date</label>
                                                <input type="text" className="form-control shadow-none" type="date" name="datepic" placeholder="DateRange"  placeholder="Date" />
                                            </Col>
                                                <Col>
                                                <label>Time</label>
                                                <input type="text" className="form-control shadow-none" placeholder="Time" />
                                        
                                                </Col>
                                        </Row>
                                        <Row>
                                            <Col className="mb-90">
                                                <label>Assign User</label>
                                                <input type="text" className="form-control shadow-none" placeholder="Prem Kumar" />
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end">
                                                <Col xl={{ span: 5, offset: 3 }}>
                                                    <button type="submit" className="btn">Cancel</button>
                                                    <button type="submit" className="btn btn-success collapsible">Save</button>
                                                </Col>
                                        </Row>
                                    </Row>
                                </form>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                {/* </Card> */}
            </Col>
        </Row>
    </Container>
    );
}
export default Task;


const formStyling = {
    padding: ".8em 0em"
};