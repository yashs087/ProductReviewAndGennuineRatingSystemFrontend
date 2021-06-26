import React from 'react' 
import {Card, Table} from 'react-bootstrap' 
import NavCustomer from './NavCustomer'
import "../css/Table.css"

class ViewProduct extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            products: []
        });
    }

    componentDidMount() {
       fetch('http://localhost:8086/ProductReview/Admin/product/view/')
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
            <NavCustomer />
            <Card className={"border border-light bg-light text-white"}>
                
                    <Card.Body>
                        <Table bordered hover striped variant>
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
                                          <td>Rs. {product.productPrice}</td>
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