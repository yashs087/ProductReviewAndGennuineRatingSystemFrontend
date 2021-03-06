import React from 'react' 
import {Card, Form, Button, Col, Table} from 'react-bootstrap'
import NavCustomer from './NavCustomer'
import '../css/Table.css'



class AddProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            products: []
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    submitProduct(e) {
        e.preventDefault();

        fetch('http://localhost:8086/ProductReview/Customer/product/search/'+this.state.productName)
        .then(res => res.json())
        .then(json => {
            this.setState({
                products: json
            })
        })
    }

    productChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    clearField = () => {
        this.setState({
            productID: '',
            productName: '',
            productPrice: '',
            productCategory: '',
            productDescription: ''
        })
    }

    render() {
        return(
            <div>
                <NavCustomer />
                <Card className={"border border-light bg-light text-dark"}>
                    <Card.Header>Search Product</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.submitProduct} controlId="addForm">
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Name" name="productName" value={this.state.productName} onChange={this.productChange}/>
                            </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit" title="button1" onClick={this.submitProduct}>Search</Button>{' '}
                        <Button controlId="button" size="sm" variant="primary" type="reset" onClick={this.clearField}>Reset</Button>
                    </Card.Footer>
                </Card>
                <Card className={"border border-light bg-light text-dark"}>
                <Card.Header>Products Found</Card.Header>
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

export default AddProduct;