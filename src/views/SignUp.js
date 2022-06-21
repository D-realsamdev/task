import { Row, Image,Container,Col,Card } from 'react-bootstrap';
import bgLogin from "../images/LOG IN BACKGROUND.png";
import logo from "../images/LOGO.jpg";
import CustomButton from '../components/CustomButton';
import '../index.css';
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data))
    // console.log(errors);
  }
	return (
		<div  style={{color:"white"}} >
            
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
                <div sm={12} lg={8} md="8" style={customMainDivStyling}>
                    <Row className='mb-4' xs={12}>
                                <Col sm={12} md={6} lg={6} xl={6}>
                                <CustomButton
                                title="Individual"
                                customButtonStyling={customButtonStyling}
                                className="form-control p-3 mt-4"
                                type="submit"
                                />
                                </Col>
                                <Col sm={12} md={6} lg={6} xl={6}>
                                <CustomButton
                                title="Organization"
                                customButtonStyling={customButtonStyling}
                                className="form-control p-3 mt-4"
                                type="submit"
                                />
                                </Col>
                    </Row>
                    <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" autocomplete="false" />
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Name" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.name && <p>Please enter your name</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>Please enter your name</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="password" autocomplete="off"  style={inputStyle}
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

export default SignUp;

const customMainDivStyling = {
    padding: "7m 7em",
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
    padding: ".5rem 1rem",
    border: "none",
    width: "100%",
    borderRadius:"3em",
    background: "white",
  };