import {Container } from 'react-bootstrap';
import bgLogin from "../images/LOG IN BACKGROUND.png";


const Dashboard = () => {

    return (
        <Container >
            <div sm={12} lg={6} md={6}  style={customMainDivStyling}>
            </div>
        </Container>
    )
  }  
  
  export default Dashboard;
  

  const customMainDivStyling = {
    padding: "4em 4em",
      margin:"auto",
      color:"white",
      borderRadius: "10px",
      backgroundImage:`url('${bgLogin}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"
};