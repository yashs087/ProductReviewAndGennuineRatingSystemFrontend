import React from 'react' 
import {Card, Table} from 'react-bootstrap' 
import NavAdmin from './NavAdmin'
import "../css/Table.css"

class ViewProduct extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            products: []
        });
    }

    componentDidMount() {
       fetch('http://localhost:8086/Application/Admin/product/view/')
       .then(res => res.json())
       .then(json => {
           this.setState({
               products: json
           })
       })
    }

    render() {
        return(
            <div>
            <NavAdmin />
            <Card className={"border border-light bg-light text-dark"}>
                
                    <Card.Body>
                        <Table bordered hover striped variant>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Category</th>
                                    <th>Product Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="5">{this.state.products.length} Products Available</td>
                                    </tr> :
                                    this.state.products.map((product) => (
                                      <tr key={product.productID}>
                                          <td>{product.productID}</td>
                                          <td>{product.productName}</td>
                                          <td>{product.productPrice}</td>
                                          <td>{product.productCategory}</td>
                                          <td>{product.productDescription}</td>
                                      </tr>  
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
            </Card>
            </div>
        )
    }

}

export default ViewProduct;