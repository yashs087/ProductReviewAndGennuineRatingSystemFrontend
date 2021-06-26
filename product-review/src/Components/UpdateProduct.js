import React from 'react' 
import Axios from 'axios'
import {Card, Button, Form ,Col} from 'react-bootstrap'

class UpdateProduct extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            productID: '',
            productName: props.productName,
            productPrice: '',
            productDescription: '',
            result: []
        }

        this.productChange = this.productChange.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.showDetail = this.showDetail.bind(this);
    }

    updateProduct(event) {
        event.preventDefault();

        Axios.put('http://localhost:8086/ProductReview/Admin/product/update/'+this.state.productID,{
            productID: parseInt(this.state.productID),
            productName: this.state.productName,
            productPrice: parseInt(this.state.productPrice),
            productDescription: this.state.productDescription
        })
        .then(res => {
            console.log(res.productID)
            alert('Product Updated Successfully')
        })
        
    }

    componentDidMount() {
        fetch('http://localhost:8086/ProductReview/Admin/product/1')
            .then(res => res.json())
            .then(json => {
           this.setState({
               result: json
           })
       })
    }

    showDetail = () => {
      
    }

    productChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     

    render() {
        return(
            
            <div>
                <Card className={"border border-light bg-light text-dark"}>
                    
                    <Card.Body>
                        <Form onSubmit={this.updateProduct}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="Grif1">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product ID" name="productID" value={this.state.productID} onChange={this.productChange}/>{' '}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control  type="text" className={"bg-light text-dark"} placeholder="Enter Product Name" id="productNAME" name="productName" value={this.state.productName} onChange={this.productChange}/>
                            </Form.Row>
                            <Form.Row>
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" className={"bg-light text-dark"} placeholder="Enter Product Price" name="productPrice" value={this.state.productPrice} onChange={this.productChange}/>
                            </Form.Row>
                            <Form.Row>
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control type="text" className={"bg-light text-dark"} placeholder="Enter Product Description" name="productDescription" value={this.state.productDescription} onChange={this.productChange}/>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="primary" type="primary" onClick={this.showDetail}>Check</Button>{' '}
                        <Button size="sm" variant="success" type="submit" onClick={this.updateProduct}>Update</Button>{' '}
                    </Card.Footer>
                </Card>
            </div>
        )
    }

}

export default UpdateProduct;