import React from 'react' 
import {Card, Form, Button, Col} from 'react-bootstrap'
import { withRouter} from 'react-router-dom'; 


class AddProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            productName: '',
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    submitProduct(e) {
        this.props.history.push('/searchtable',this.state.productName);
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
                <Card className={"border border-light bg-light text-dark"}>
                    <Card.Body>
                        <Form onSubmit={this.submitProduct} controlId="addForm">
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGroupName">
                                <Form.Control required type="text" className={"bg-light text-dark"} placeholder="Enter Product Name" name="productName" value={this.state.productName} onChange={this.productChange}/>
                            </Form.Group>
                            <Form.Group>
                            <Button size="md"  type="submit" title="button1" onClick={this.submitProduct}>Search</Button>{' '}
                            </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default withRouter(AddProduct);