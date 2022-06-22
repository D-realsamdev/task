import {useState,useEffect} from 'react'
import { Row, Image,Container,Col,Card } from 'react-bootstrap';
import bgLogin from "../images/LOG IN BACKGROUND.png";
import logo from "../images/LOGO.jpg";
import CustomButton from '../components/CustomButton';
import '../index.css';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(logo);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgSelected, setimgSelected] = useState("");
    const [activeIndividual, setActiveIndividual] = useState(true);
    const [activeOrg, setActiveOrg] = useState(false);
    useEffect(() => {
        if (selectedImage) {
            setimgSelected("Selected");
          setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
    const onSubmit = data => {
    alert(JSON.stringify(data))
    // console.log(errors);
    }
    function tabChange (data){
        if(data === "Individual"){
            setActiveIndividual(true)
            setActiveOrg(false)
        }
        if(data === "Organization"){
            setActiveOrg(true)
            setActiveIndividual(false)
        }
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
                <div sm={12} lg={6} md={6} style={customMainDivStyling}>
                    <Row className='mb-4' xs={12}>
                                <Col sm={12} md={6} lg={6} xl={6}>
                                <CustomButton
                                title="Individual"
                                customButtonStyling={activeIndividual ? {...customButtonStyling}:{...customButtonStyling,background: "gray"}}
                                className="form-control p-3 mt-4"
                                type="button"
                                onClick={() => tabChange('Individual')}
                                />
                                </Col>
                                <Col sm={12} md={6} lg={6} xl={6}>
                                <CustomButton
                                title="Organization"
                                customButtonStyling={activeOrg ? {...customButtonStyling}:{...customButtonStyling,background: "gray"}}
                                className="form-control p-3 mt-4"
                                type="button"
                                onClick={() => tabChange('Organization')}
                                />
                                </Col>
                    </Row>
                    {activeIndividual && <form  onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Name" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.name && <p>Please enter your name</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>Please enter your email</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Contact Phone number" {...register("phone", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.phone && <p>Please enter your phone number</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="url"  style={inputStyle}
                            placeholder="Website (optional)" {...register("website", { required: true })} />
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
                            title="Sign Up"
                            customButtonStyling={customButtonStyling}
                            className="form-control p-3 mt-4"
                            type="submit"
                            />
                        </Col>
                        </Row>
                    </form>}
                    {activeOrg && <form  onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Name" {...register("name", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.name && <p>Please enter your name</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>Please enter your email</p>}
                        </Row>
                        <br/>
                        <Row>
                            <input type="text"  style={inputStyle}
                            placeholder="Contact Phone number" {...register("phone", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.phone && <p>Please enter your phone number</p>}
                        </Row>
                        <br/>
                        <Row>
                        <Col lg={11} >
                            <input 
                            placeholder="Logo"
                            value={imgSelected}
                            style={{...inputStyle,width:"100%"}} />
                        </Col>
                        <Col lg={1}>
                            <label htmlFor="select-image">
                                        <Image style={{borderRadius:"20%"}} height="40px" src={imageUrl} rounded/>                                
                            </label>
                        </Col>
                            <input 
                            type="file" 
                            name='file' 
                            accept="image/*"
                            id="select-image"
                            onChange={e => {setSelectedImage(e.target.files[0])}}
                            style={{display:"none"}}
                              />
                            
                        </Row>
                        <br/>
                        <Row>
                            <input type="url"  style={inputStyle}
                            placeholder="Website (optional)" {...register("website", { required: true })} />
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
                            title="Sign Up"
                            customButtonStyling={customButtonStyling}
                            className="form-control p-3 mt-4"
                            type="submit"
                            />
                        </Col>
                        </Row>
                    </form>}
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
    borderWidth:'0 0 1px',
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