import React from 'react' 
import {Card, Table} from 'react-bootstrap' 
import PostReview from './PostReview';
import "../css/Table.css"


class Productreview extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            productName: this.props.location.state,
            reviews: [],
            pro: {},
            rating: []
        }

        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.clearField = this.clearField.bind(this);

        fetch('http://localhost:8086/Application/Customer/product/view/review/'+this.state.productName)
        .then(res => res.json())
        .then(json => {
            this.setState({
                reviews: json
            })
        })

        fetch('http://localhost:8086/Application/Customer/product/view/review/rating/'+this.state.productName)
        .then(res => res.json())
        .then(json => {
            this.setState({
                rating: json
            })
        })
        
    }

   
     componentDidMount() {
         
         
     }

     submitProduct(e) {
        e.preventDefault();

        
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
             <div style={{height: "auto" , paddingBottom:"50px"}}>
                 
                 
             <Card className={"border border-light bg-light text-dark"}>
                 
                     <Card.Body>
                         <h2>{this.state.productName}</h2>
                         <h3>People Rated {this.state.productName} : {this.state.rating}</h3>
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
             <PostReview productname={this.state.productName}/>
             </div>
         )
     }
}

export default Productreview;