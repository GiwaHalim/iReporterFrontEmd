import Intervention from "../intervention/Intervention";
import RedFlag from "../redflag/RedFlag";
import { Row,Col } from "react-bootstrap";





const Home = ({user}) => {

    return ( 
        <Row className="justify-content-center">
            <Col md={4}>
            <RedFlag user={user}/>
            </Col>
            <Col md={4}>
            <Intervention user={user}/>
            </Col>
        </Row>
     );
}
 
export default Home;