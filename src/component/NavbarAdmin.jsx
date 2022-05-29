import { Navbar, Nav, Container } from "react-bootstrap"
import IMG from "../Assets/Nyai.jpg";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

function NavbarAdmin() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{display : "flex", justifyContent : "space-between"}}>
        <div className="left" style={{display : "flex", marginLeft : "50px"}}>
          <Navbar.Brand href="#home"><img src={IMG} alt="" style={{width : "80px", borderRadius: "5px"}}/></Navbar.Brand>
        </div>
        
        <div className="right" style={{display : "flex", justifyContent : "flex-end"}}>
          <Nav className="me-auto" style={{display : "flex"}}>
            <Nav.Link href="/" style={{marginRight : "30px"}}>Home</Nav.Link>
            <Nav.Link href="/buy-product" style={{marginRight : "30px"}}>Add Product</Nav.Link>
            <Nav.Link href="/career" style={{marginRight : "30px"}}>Add Position Available</Nav.Link>
            <Nav.Link href="/about" style={{marginRight : "30px"}}>About</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </div>

        <div className="Avaatar" style={{marginRight : "50px"}}>
          <Stack direction="row" spacing={2}>
            <Avatar src="/broken-image.jpg" />
          </Stack>
        </div>
      </Navbar>
    </div>
  )
}

export default NavbarAdmin;