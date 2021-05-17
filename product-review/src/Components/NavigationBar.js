import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'



class NavigationBar extends React.Component{

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">ProductReview</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Link to={""} className="navbar-brand">Home</Link>
                <NavDropdown title="Features" id="collasible-nav-dropdown">
                  <Link to={"addproduct"} className="dropdown-item">Add Product</Link>
                  <NavDropdown.Divider />
                  <Link to={"updateproduct"} className="dropdown-item">Update Products</Link>
                  <NavDropdown.Divider />
                  <Link to={"viewproduct"} className="dropdown-item">View Products</Link>
                  <NavDropdown.Divider />
                  <Link to={"deleteproduct"} className="dropdown-item">Delete Product</Link>
                  <NavDropdown.Divider />
                  <Link to={"viewreview"} className="dropdown-item">View Product Reviews</Link>
                  <NavDropdown.Divider />
                  <Link to={"viewcustomers"} className="dropdown-item">View Customers</Link>
                  <NavDropdown.Divider />
                  <Link to={"searchproduct"} className="dropdown-item">Search Product</Link>
                  <NavDropdown.Divider />
                  <Link to={"bestproduct"} className="dropdown-item">Search Best Product</Link>
                </NavDropdown>
                <Nav.Link href="#pricing">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }

}

export default NavigationBar;