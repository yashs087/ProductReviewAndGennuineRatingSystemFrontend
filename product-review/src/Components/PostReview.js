import React from 'react' 
import {Card, Form, Button, Col} from 'react-bootstrap'
import Axios from 'axios'




class PostReview extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            customerID: '',
            productName: this.props.productname,
            reviewID: '',
            productRating: '',
            productReview: ''
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    submitProduct(e) {
        e.preventDefault();

        Axios.post('http://localhost:8086/Application/Customer/product/review/'+this.state.productName+'/HTSHS534/'+this.state.customerID,{
            
            productRating: parseInt(this.state.productRating),
            productReview: this.state.productReview
        })
        .then(res => {
            console.log(res.productID)
            alert('Review Added')
            window.location.reload()
        })
        
    }

    productChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    clearField = () => {
        this.setState({
            customerID: '',
            productName: '',
            reviewID: '',
            productRating: '',
            productReview: ''
        })
    }

    render() {
        return(
            <div>
                
                <Card className={"border border-light bg-light text-dark"}>
                    
                    <Card.Body>
                        <Form onSubmit={this.submitProduct} controlId="addForm">
                            
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupCategory">
                                <Form.Label>Customer ID</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Customer ID" name="customerID" value={this.state.customerID} onChange={this.productChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupPrice">
                                <Form.Label>Product Rating</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Rating" name="productRating" value={this.state.productRating} onChange={this.productChange}/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                    <Form.Label>Product Review</Form.Label>
                                    <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Review" name="productReview" value={this.state.productReview} onChange={this.productChange}></Form.Control>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit" title="button1" onClick={this.submitProduct}>Post Review</Button>{' '}
                        <Button controlId="button" size="sm" variant="primary" type="reset" onClick={this.clearField}>Reset</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default PostReview;