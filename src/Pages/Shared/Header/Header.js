import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { users, logOut} = useAuth();
    console.log(users);

    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Tour X</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Guides</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Packages</Nav.Link>
                       {users?.email &&  <NavLink  className='mx-3 text-decoration-none' to="/booking">My Booking</NavLink>}
                       {users?.email &&  <NavLink className='mx-3 text-decoration-none'  to="/manageServices">Manage All Booking</NavLink>}
                        { users?.email ? 
                            <Button onClick={logOut} className="btn-sm" variant="light">Logout</Button>:
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                        }
                    <Navbar.Text>
                        Signed in as: <a href="#login"> <img height="10%" width="10%" className="rounded-circle mx-2" src={users?.photoURL} alt="" /> {users?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;