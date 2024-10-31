import Intervention from "../intervention/Intervention";
import RedFlag from "../redflag/RedFlag";
import { Row,Col } from "react-bootstrap";
import React from 'react'


interface User{
    user: string | null
}


const Home: React.FC<User> = ({user}) => {

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