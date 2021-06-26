import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import person from "../images/person.png"

class NavigationBar extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      productName: '',
    }

    this.productChange = this.productChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
}

submitProduct() {
  this.props.history.push('/searchtable',this.state.productName);
}

productChange(event) {
  this.setState({
      [event.target.name]: event.target.value
  });
}

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">ProductReview</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Link to={""} className="navbar-brand">Home</Link>
                
                <Nav.Link href="/about">About</Nav.Link>
                
              </Nav>
              
              <Nav>
      <Nav.Link href="/login"><img src={person} alt="user" style={{height:'30px', width:'30px'}}/></Nav.Link>
    </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }

}

export default withRouter(NavigationBar);