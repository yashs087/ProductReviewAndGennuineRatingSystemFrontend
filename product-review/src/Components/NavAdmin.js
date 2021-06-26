import React from 'react' 
import {Nav} from 'react-bootstrap' 
import {Link} from 'react-router-dom'

class NavAdmin extends React.Component{
    render() {
        return(
<Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Link to={"addproduct"} className="nav-link">Add Product</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"viewproduct"} className="nav-link">View Products</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"viewcustomers"} className="nav-link">View Customers</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"viewreview"} className="nav-link">View Reviews</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"updateproduct"} className="nav-link">Update Product</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={"deleteproduct"} className="nav-link">Delete Product</Link>
        </Nav.Item>
</Nav>
        )
    }
}

export default NavAdmin;