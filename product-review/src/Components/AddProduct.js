import React from 'react' 
import {Card, Form, Button, Col} from 'react-bootstrap'
import Axios from 'axios'


class AddProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            productID: '',
            productName: '',
            productCategory: '',
            productPrice: '',
            productDescription: ''
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    submitProduct(e) {
        e.preventDefault();

        Axios.post('http://localhost:8086/Application/Admin/product/add/',{
            productID: parseInt(this.state.productID),
            productName: this.state.productName,
            productPrice: parseInt(this.state.productPrice),
            productCategory: this.state.productCategory,
            productDescription: this.state.productDescription
        })
        .then(res => {
            console.log(res.productID)
            alert('Product Added Successfully')
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
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>Add Product</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.submitProduct} controlId="addForm">
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupID">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control required type="text" className={"bg-dark text-white"} placeholder="Enter Product ID" name="productID" value={this.state.productID} onChange={this.productChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control required type="text" className={"bg-dark text-white"} placeholder="Enter Product Name" name="productName" value={this.state.productName} onChange={this.productChange}/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupCategory">
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control required type="text" className={"bg-dark text-white"} placeholder="Enter Product Category" name="productCategory" value={this.state.productCategory} onChange={this.productChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupPrice">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control required type="text" className={"bg-dark text-white"} placeholder="Enter Product Price" name="productPrice" value={this.state.productPrice} onChange={this.productChange}/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control required type="text" className={"bg-dark text-white"} placeholder="Enter Product Description" name="productDescription" value={this.state.productDescription} onChange={this.productChange}></Form.Control>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit" title="button1" onClick={this.submitProduct}>Submit</Button>{' '}
                        <Button controlId="button" size="sm" variant="primary" type="reset" onClick={this.clearField}>Reset</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default AddProduct;