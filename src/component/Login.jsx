import React from 'react'
import { Form } from "react-bootstrap";
import Button from '@mui/material/Button';


function Login() {
  return (
    <div>
        <Form style={{width : "500px", backgroundColor : "rgba(44, 0, 0, 1)", margin : "auto", marginTop : "100px", padding : "50px", borderRadius : "5px", color : "white"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button type='submit' variant="outlined" style={{width : "100%", marginTop : "30px", textAlign : "center", color : "white"}}>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default Login