import bg from "../images/istockphoto-1160927409-612x612.jpg";
import { Row,Col,Container } from 'react-bootstrap';
import bgLogin from "../images/LOG IN BACKGROUND.png";
import CustomButton from '../components/CustomButton';
import { useForm } from 'react-hook-form';
import {useState} from 'react'

const OnboardCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState()
    function handleChange(event) {
      setFile(event.target.files[0])
    }
     const onSubmit = data => {
        alert(JSON.stringify(data))
        // console.log(errors);
    } 
    return (
        <Container >
            <div sm={12} lg={6} md={6}  style={customMainDivStyling}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="Tutor's Name" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <p>Please enter your Name</p>}
                    </Row>
                    <br/>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="Course Name" {...register("course", {  required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.password && <p>Please enter your Course</p>}
                    </Row>
                        <br/>
                    <Row>
                        <Col lg={9} sm={6} >
                            <input 
                            placeholder="Upload Kid's Spreadsheet"
                            style={{...inputStyle,width:"100%"}} />
                        </Col>
                        <Col lg={3} sm={6}>
                            <input type="file" onChange={handleChange} style={inputStyle} />
                        </Col> 
                    </Row>
                    <br />
                    <Row>
                    <Col md={{ span:3, offset: 9 }} >
                        <CustomButton
                        title="Add Participant"
                        customButtonStyling={customButtonStyling}
                        className="form-control p-3 mt-4"
                        type="submit"
                        />
                    </Col>
                    </Row>
                </form>
            </div>
        </Container>
    )
  }  
  
  export default OnboardCard;
  

  const customMainDivStyling = {
    padding: "4em 4em",
      margin:"auto",
      color:"white",
      borderRadius: "10px",
      backgroundImage:`url('${bgLogin}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"
};

const customCardDivStyling = {
    backgroundColor:"black",
    textAlign:"center"
};

  const inputStyle = {
    outline: '0',
    borderWidth:'0 0 2px',
    borderColor: 'white',
    background: "transparent",
    color:"white"
  };
  
  const customButtonStyling = {
    color: "black",
    padding: ".7rem 2rem",
    border: "none",
    width: "100%",
    borderRadius:"3em",
    background: "white",
  };