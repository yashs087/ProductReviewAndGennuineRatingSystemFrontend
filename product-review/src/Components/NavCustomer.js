import React from 'react' 
import {Nav} from 'react-bootstrap' 
import {Link} from 'react-router-dom'

class NavAdmin extends React.Component{
    render() {
        return(
<Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Link to={"viewcustproduct"} className="nav-link">View Products</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"addreview"} className="nav-link">Add Review</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"viewcustreview"} className="nav-link">View Reviews</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"searchproduct"} className="nav-link">Search Product</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"bestproduct"} className="nav-link">Search Best Product</Link>
        </Nav.Item>
</Nav>
        )
    }
}

export default NavAdmin;