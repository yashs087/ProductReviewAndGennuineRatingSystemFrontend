import React from 'react' 
import {Card, Table} from 'react-bootstrap'
import "../css/Table.css"
import "../css/Card-Container.css"
import { withRouter} from 'react-router-dom'; 

class SearchTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            productName: this.props.productname,
            products: []
        }
       
    }
    componentDidMount(){
        
        this.setState({
            productName: this.props.productname
        })


        fetch('http://localhost:8086/Application/Customer/product/search/'+this.props.location.state)
        .then(res => res.json())
        .then(json => {
            this.setState({
                products: json
            })
        })
 }
    render() {

        

        return(
            <div className="card-container">
                <Card className={"border border-light bg-light text-black"}>
                <Card.Header>Search Results</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant>
                            
                            <tbody>
                                {
                                    this.state.products.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="5">{this.state.products.length} Products Available</td>
                                    </tr> :
                                    this.state.products.map((product) => (
                                      <tr key={product.productID}>
                                          <td>{product.productID}</td>
                                          <td onClick={() => this.props.history.push('/productreview',product.productName)}>{product.productName}</td>
                                          <td>Rs. {product.productPrice}</td>
                                          <td>{product.productCategory}</td>
                                          <td>{product.productDescription}</td>
                                      </tr>  
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
            </Card>
            <p>{this.state.productName}</p>
            </div>
        )
    }
}
export default withRouter(SearchTable);