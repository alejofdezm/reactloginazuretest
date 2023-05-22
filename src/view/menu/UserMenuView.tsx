import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

import  { useUserContext }   from "../../context/UserContext";
import logout from "../../user/logout";

const UserMenuList = () => {
 
  const { user } = useUserContext();

  const handleLogout = async () => {
    await logout().then(() => {
      localStorage.setItem("user", null);
      window.location.replace('/'); 
    });
  };
  
  return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
          <Container>
            <Navbar.Brand href="#home">BCCR</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <NavLink to="/" className="text-decoration-none text-white" >Inicio</NavLink>     

               {user && (
                   <>
                    { ' | ' }
                   <NavLink to="/" className="text-decoration-none text-white" >Link 1</NavLink>        
                   { ' | ' }
                   <NavLink to="/" className="text-decoration-none text-white" >Link 2</NavLink> 
                   { ' | ' }  
                   <NavLink to="/" className="text-decoration-none text-white" >Link 3</NavLink>       
                   { ' | ' }  
                   <NavLink to="/" className="text-decoration-none text-white" >Link 4</NavLink>       
                   { ' | ' }  
                   <NavLink to="/" className="text-decoration-none text-white" >Link 5</NavLink>   
                   { ' | ' }  
                   <NavLink to="/about" className="text-decoration-none text-white" >Sobre BCCR</NavLink>       
                   </>  
                )}

              </Nav>
              <Nav className="gap-2">  
                {!user && (
                  <>
                  <NavLink to="Login" className="btn btn-primary" >Ingresar</NavLink>        
                  </>  
                )}
                 {user && (
                    <Nav.Link eventKey={2}  onClick={handleLogout} className="btn btn-light text-black" href="#">
                        Salir del Sistema
                    </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
      };

export default UserMenuList;