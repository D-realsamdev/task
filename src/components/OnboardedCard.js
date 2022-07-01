import bg from "../images/istockphoto-1160927409-612x612.jpg";
import { Row,Col,Container } from 'react-bootstrap';
import bgLogin from "../images/LOG IN BACKGROUND.png";
import CustomButton from '../components/CustomButton';
import { useForm } from 'react-hook-form';

const OnboardedCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => {
        alert(JSON.stringify(data))
        // console.log(errors);
    } 
    return (
        <Container >
            <div sm={12} lg={6} md={6} xl={6} style={customMainDivStyling}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="1. Micheal Olawale  (michealolawale@gmail.com)" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                    </Row>
                    <br/>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="2. Kayode Ishola  (kayodeishola@gmail.com)" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                    </Row>
                    <br/>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="3. Abdullahi Dunmoye  (abdullahidunmoye@gmail.com)" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                    </Row>
                    <br/>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="4. Olajide Samson  (olajidesamson@gmail.com)" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                    </Row>
                    <br/>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="5. Adegoke Gbolahan (adegokegbolahan@gmail.com)" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                    </Row>
                    <br/>
                    <Row>
                        <input type="text"  style={inputStyle}
                        placeholder="6. Ajakaye damilola  (ajakayedamilola@gmail.com)" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                    </Row>
                    <br />
                    <Row>
                    <Col sm={12} md={6} lg={3} xl={3} >
                        <CustomButton
                        title="Share"
                        customButtonStyling={customButtonStyling}
                        className="form-control p-3 mt-4"
                        type="submit"
                        />
                    </Col>
                    <Col sm={12} md={{ span:3, offset: 5 }} lg={3} xl={3}>
                        <CustomButton
                        title="Onboard kids"
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
  
  export default OnboardedCard;
  

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