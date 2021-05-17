import React from 'react' 
import {Card, Table} from 'react-bootstrap' 

class ViewReview extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            reviews: [],
            pro: {}
        }
    }
    componentDidMount() {
        fetch('http://localhost:8086/Application/Admin/review/view/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                reviews: json
            })
        })
     }
 
     render() {
         return(
             <Card className={"border border-dark bg-dark text-white"}>
                 <Card.Header>Product Reviews</Card.Header>
                     <Card.Body>
                         <Table bordered hover striped variant="dark">
                             <thead>
                                 <tr>
                                     <th>Review ID</th>
                                     <th>Product ID</th>
                                     <th>Customer ID</th>
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
                                           <td>{review.product}</td>
                                           <td>{review.customerID}</td>
                                           <td>{review.productRating}</td>
                                           <td>{review.productReview}</td>
                                       </tr>  
                                     ))
                                 }
                             </tbody>
                         </Table>
                     </Card.Body>
             </Card>
         )
     }
}

export default ViewReview;