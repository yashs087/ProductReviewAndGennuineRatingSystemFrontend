import React from 'react' 
import Axios from 'axios' 
import {Card, Button, Form, Col} from 'react-bootstrap'
import NavAdmin from './NavAdmin'

class DeleteProduct extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            productID: ''
        }

        this.productChange = this.productChange.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

    }

    deleteProduct(event) {
        event.preventDefault();

        Axios.delete('http://localhost:8086/Application/Admin/product/delete/'+parseInt(this.state.productID))
        .then(response => {
            if(response.data != null){
                alert("Product Deleted Successfully!")
            }
            else{
                alert("Product Cannot be deleted or dont exists")
            }
        })
    }

    productChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <NavAdmin />
                <Card className={"border border-light bg-light text-dark"}>
                    
                    <Card.Body>
                        <Form onSubmit={this.deleteProduct}>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGrpID">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product ID" name="productID" value={this.state.productID} onChange={this.productChange}></Form.Control>
                            </Form.Group>
                            </Form.Row>
                         </Form>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit" onClick={this.deleteProduct}>Delete</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default DeleteProduct;