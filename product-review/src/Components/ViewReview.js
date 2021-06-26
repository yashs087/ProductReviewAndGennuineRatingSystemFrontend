import React from 'react' 
import {Card,Form, Button, Col, Table} from 'react-bootstrap' 

import NavAdmin from './NavAdmin'
import "../css/Table.css"

class ViewReview extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            productName: '',
            reviews: [],
            pro: {}
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);
    }
   

     submitProduct(e) {
        e.preventDefault();

        fetch('http://localhost:8086/Application/Customer/product/view/review/'+this.state.productName)
        .then(res => res.json())
        .then(json => {
            this.setState({
                reviews: json
            })
        })
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
                 
                     <Card.Body>
                         <Table bordered hover striped variant>
                             <thead>
                                 <tr>
                                     <th>Review ID</th>
                                     
                                     
                                     <th>Ratings</th>
                                     <th>Reviews</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     this.state.reviews.length === 0 ?
                                     <tr align="center">
                                         <td colSpan="5">{this.state.reviews.length} Reviews Found</td>
                                     </tr> :
                                     this.state.reviews.map((review) => (
                                       <tr key={review.reviewID}>
                                           <td>{review.reviewID}</td>
                                           <td>{review.productRating}</td>
                                           <td>{review.productReview}</td>
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

export default ViewReview;