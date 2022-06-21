import { Row, Image,Container,Col,Card } from 'react-bootstrap';
import bgLogin from "../images/LOG IN BACKGROUND.png";
import logo from "../images/LOGO.jpg";
import CustomButton from '../components/CustomButton';
import '../index.css';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data))
    // console.log(errors);
  }
	return (
		<div className='d-flex align-item-center justify-content-center' style={{color:"white"}} >
            
			<Container >
                <Row className='mt-3'>
                     <Col md={5}>
                            <h2>
                                <Image style={{borderRadius:"20%"}} src={logo} rounded/>
                                &nbsp;  KidsTech Africa
                            </h2>
                     </Col>
    				<Col md={{  offset: 5 }}>
						{/* <p>
							Log in/Sign Up
						</p> */}
					</Col>
                </Row>
                <div sm={12}  style={customMainDivStyling}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>Please enter your email</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="password"  style={inputStyle}
                            placeholder="Password" {...register("password", { required: true, maxLength: 12 })} />
                            {errors.password && <p>Please enter your password</p>}
                        </Row>
                        <br />
                        <Row>
                        <Col md={{ span:3, offset: 9 }} >
                            <CustomButton
                            title="Login"
                            customButtonStyling={customButtonStyling}
                            className="form-control p-3 mt-4"
                            type="submit"
                            />
                        </Col>
                        </Row>
                      </form>
                      <Card body className='mt-3 d-flex align-item-center justify-content-center' style={customCardDivStyling} >
                        <p>Log in Using </p>
                        <Row xs={12}>
                            <Col sm={12} md={6} lg={6} xl={6}>
                            <button
                            style={{...customButtonStyling,background: "white"}}
                            className="form-control p-1 mt-3"
                            type="button"
                            ><strong>Google</strong></button>

                        </Col>
                            <br />
                        <Col sm={12} md={6} lg={6} xl={6}>
                        <button
                            style={{...customButtonStyling,background: "blue",color:"white"}}
                            className="form-control p-1 mt-3"
                            type="button"
                            ><strong>Facebook</strong></button>
                            </Col>
                        </Row>
                        <p className='mt-4'>New User? Please register here</p>
                      </Card>
                </div>
			</Container>
		</div>
	);
};

export default Login;

const customMainDivStyling = {
    padding: "3em 3em",
      height: "450px",
      margin:"auto",
      color:"white",
      width:'60%',
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