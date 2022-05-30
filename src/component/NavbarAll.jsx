import { Navbar, Nav, Container } from "react-bootstrap"
import IMG from "../Assets/Nyai.jpg";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Login from "./Login";

function NavbarAll() {

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(true);

  return (
    <div>
        <Navbar bg="dark" variant="dark" sticky="top">
        <div className="left" style={{display : "flex", flex : "25%", marginLeft : "50px"}}>
          <Navbar.Brand href="#home"><img src={IMG} alt="" style={{width : "80px", borderRadius: "5px"}}/></Navbar.Brand>
        </div>
        
        <div className="right" style={{display : "flex", justifyContent : "flex-end", flex : "50%"}}>
          <Nav className="me-auto" style={{width : "100%", justifyContent : "space-evenly"}}>
            <Nav.Link href="/" style={{marginRight : "20px"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{marginRight : "20px"}}>About</Nav.Link>
            <Nav.Link href="/faq" style={{marginRight : "20px"}}>FAQ</Nav.Link>
          </Nav>
        </div>

        <div className="Button" style={{display : "flex", flex : "25%", justifyContent : "flex-end", marginRight : "50px"}}>
        <Stack direction="row" spacing={2}>
      <Button variant="outlined" color="primary">
        Login
      </Button>
      <Button variant="outlined" color="error">
        Register
      </Button>
    </Stack>
        </div>
        
      </Navbar>
    </div>
  )
}

export default NavbarAll