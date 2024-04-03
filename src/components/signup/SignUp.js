import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import joi from 'joi';
import { toast } from 'react-toastify';
import axios from 'axios';
import { NavLink, redirect,useNavigate } from 'react-router-dom';


function SignUp() {

  const navigate = useNavigate();

  const[user, setUser] = useState({
    email: "",
    password: "",
    address: "",
    city:"",
    zip:""
  })
  

 const onEmailChange = (e) =>{
    e.preventDefault();

    const detail = e.target.value;
    const newUser = {...user}

    newUser.email = detail

    setUser(newUser)

 }
 const onPasswordChange = (e) =>{
  e.preventDefault();

    const detail = e.target.value;
    const newUser = {...user}

    newUser.password = detail

    setUser(newUser)

}
const onAddressChange = (e) =>{
  e.preventDefault();

    const detail = e.target.value;
    const newUser = {...user}

    newUser.address = detail

    setUser(newUser)

}

const onCityChange = (e) =>{
  e.preventDefault();

    const detail = e.target.value;
    const newUser = {...user}

    newUser.city = detail

    setUser(newUser)
}

const onZipChange = (e) =>{
  e.preventDefault();

    const detail = e.target.value;
    const newUser = {...user}

    newUser.zip = detail

    setUser(newUser)

}

const  onSignUp = async (e) =>{
  e.preventDefault();
  const validationSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().required(),
    address: joi.string().required(),
    city: joi.string().required(),
    zip: joi.number().required()
  })

 const message = validationSchema.validate({
    email:user.email,
    password:user.password,
    address:user.address,
    city:user.city,
    zip:user.zip
  })

  message.error ? toast.error(message.error.details[0].message) : 

  await axios.post('http://localhost:3005/api/user', user).then((res)=> {
    localStorage.setItem('token', res.data.token );
    console.log(res)
    toast.success('User Created')
    window.location = "/"

}).catch( err => (toast.error(err.response.data)))

  
}

  return (
    <Container>
      <h1>
        Sign Up
      </h1>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={onEmailChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={user.password} onChange={onPasswordChange}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" value={user.address} onChange={onAddressChange} />
      </Form.Group> 

      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control value={user.city} onChange={onCityChange} />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control value={user.zip} onChange={onZipChange} />
        </Form.Group>
      </Row>

      
      <Button variant="primary" type="submit" onClick={onSignUp}>
        Sign Up
      </Button>
    </Form>
    

    <p>Already have an account ? <span><NavLink to={'/signin'}>Sign in</NavLink></span></p>
    </Container>

  );
}

export default SignUp;