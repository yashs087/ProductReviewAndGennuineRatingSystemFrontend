import React from 'react' 
import {Card, Form, Button, Col} from 'react-bootstrap'
import Axios from 'axios'
import NavAdmin from './NavAdmin'

function validate(productID,productName,productCategory,productPrice,productDescription){

    const errors = [];

    if(productID.length ===0){
        errors.push("Product ID cannot be empty");
    }

    if(!Number(productID)){
        errors.push("Product ID can only be a numeric value");
    }

    if(productName.length ===0){
        errors.push("Product Name cannot be empty");
    }

    if(productPrice.length ===0){
        errors.push("Product Price cannot be empty");
    }

    if(!Number(productPrice)){
        errors.push("Product Price can only be a numeric value");
    }

    if(productDescription.length ===0){
        errors.push("Product Description cannot be empty");
    }

    if(productCategory.length ===0){
        errors.push("Product Category cannot be empty");
    }

    return errors;
}
class AddProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            productID: '',
            productName: '',
            productCategory: '',
            productPrice: '',
            productDescription: '',
            errors:[]
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    submitProduct(e) {
        e.preventDefault();

        const{productID,productName,productPrice,productCategory,productDescription} = this.state;

        const errors = validate(productID,productName,productCategory,productPrice,productDescription);
        if(errors.length > 0){
            alert(errors[0])
        }

        if(errors.length === 0){
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

        else{
            this.setState({errors})
            console.log(this.state);
            return;
        }
        
        
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
                <NavAdmin />
                <Card className={"border border-light bg-light text-dark"}>
                    
                    <Card.Body>
                        <Form onSubmit={this.submitProduct} controlId="addForm">
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupID">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product ID" name="productID" value={this.state.productID} onChange={this.productChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Name" name="productName" value={this.state.productName} onChange={this.productChange}/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupCategory">
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Category" name="productCategory" value={this.state.productCategory} onChange={this.productChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupPrice">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Price" name="productPrice" value={this.state.productPrice} onChange={this.productChange}/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Description" name="productDescription" value={this.state.productDescription} onChange={this.productChange}></Form.Control>
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