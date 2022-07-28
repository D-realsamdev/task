// import React, { Component } from "react";
import { connect } from "react-redux";
import { createTask } from "../actions/task";
import {useState,useEffect} from 'react'
import { Row,Container,Image,Col,Card } from 'react-bootstrap';
import useCollapse from 'react-collapsed';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faBell,faCheck } from '@fortawesome/free-solid-svg-icons';
import img from "../images/bond.jpeg"

const AddTask = () =>  {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [assignuser, setAssignUser] = useState("");

    // const constructor = (props) =>   {

    //     this.state = {
    //       id: null,
    //       description: "",
    //       date: "",
    //       time: "",
    //       assignuser: "",
    //       published: false,
    //       submitted: false,
    //     };
    //   }

    const addNewTask = () =>   {
        const { description, date, time, assignuser } = this.state
        this.props
          .createTask(description, date, time, assignuser)
          .then((data) => {
            this.setState({
                description: data.description,
                date: data.date,
                time: data.time,
                assignuser: data.assignuser,
              published: data.published,
              submitted: true,
            });
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
   
return (
    <Container>
        <Row>
            <Col>
                {/* <Card sm={12} lg={6} md={12} xl={6}> */}
                    <Row style={mainDivStyle}>
                        <Col sm={12} lg={6} md={12} xl={4}>
                            <div className="collapsible">
                                <div className="header" >
                                    {isExpanded ? 'TASKS 0': 'TASKS 0'}
                                    <FontAwesomeIcon icon={faPlus} style={iconStyle}  {...getToggleProps()}/>
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
                                                </Row><br></br>
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
                                                        <Col xl={{ span: 5, offset: 3 }} style={btnStyle}>
                                                            <button type="button" className="btn shadow-none">Cancel</button>
                                                            <button onClick={addNewTask} type="button" className="btn btn-success collapsible shadow-none">Save</button>
                                                        </Col>
                                                </Row>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                                <div {...getCollapseProps()}>
                                    <div className="content">
                                       <Row className="justify-content-center"> 
                                           <Col sm={12} lg={6} md={12} xl={12}>
                                                <Row>
                                                    <Col>
                                                        <Image style={imgStyle} height="40px" src={img} rounded/>
                                                        <div style={textStyle}>
                                                            <h6 >Follow Up</h6>
                                                            {/* <h6 style={dateStyle}>2/4/2020</h6> */}
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <FontAwesomeIcon icon={faCheck} style={iconStyle1}/>
                                                        <FontAwesomeIcon icon={faBell} style={iconStyle1}/>
                                                        <FontAwesomeIcon icon={faEdit} style={iconStyle1}/>
                                                    </Col>
                                                </Row>
                                           </Col>
                                       </Row>
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

export default connect(null, { createTask })(AddTask);

const formStyling = {
    padding: ".8em 0em"
};
const mainDivStyle = {
    padding: "12em 0em"
};
const iconStyle = {
    float:"right"
};
const iconStyle1 = {
    float:"right",
    margin: "7px"
};
const btnStyle = {
    float:"right"
};
const imgStyle = {
    width: "44px",
    borderRadius:"20%",
    display:"inline-block"
};
const textStyle = {
    display:"inline-block",
    margin:"10px"
};
const dateStyle = {
    color:"red"
};