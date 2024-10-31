import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import joi from 'joi'
import { toast } from 'react-toastify';
import { NavLink} from 'react-router-dom';



function SignIn() {


const[loginDetails, setLoginDetails] = useState({
    email:"",
    password:""
  })

  const onEmailChange = (e) =>{
    e.preventDefault();

    const detail = e.target.value;
    const newLoginDetails = {...loginDetails}

    newLoginDetails.email = detail

    setLoginDetails(newLoginDetails)

 }

 const onPasswordChange = (e) =>{
  e.preventDefault();

    const detail = e.target.value;
    const newLoginDetails = {...loginDetails}

    newLoginDetails.password = detail

    setLoginDetails(newLoginDetails)

}
  

const onSignIn = async (e) => {
  e.preventDefault()
  const validationSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().required()
  })

  const message = validationSchema.validate({
    email:loginDetails.email,
    password:loginDetails.password
  })

  message.error ? toast.error(message.error.details[0].message) :


  await axios.post('http://localhost:3005/api/auth', loginDetails).then((res) => {
      localStorage.setItem('token', res.data.token );
      toast.success('logged in');
      // @ts-ignore
      window.location = "/"
  }).catch( err => (
    toast.error(err.response.data)
    ))
}
  
  return (
    <Container>
      <h1>Sign In</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={loginDetails.email} onChange={onEmailChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={loginDetails.password} onChange={onPasswordChange}/>
      </Form.Group>
      <p>Don't have an account ? <span><NavLink to={'/signup'}>Sign up</NavLink></span></p>
      <Button variant="primary" type="submit" onClick={onSignIn}>
        Sign In
      </Button>
    </Form>
    </Container>
  );
}

export default SignIn;