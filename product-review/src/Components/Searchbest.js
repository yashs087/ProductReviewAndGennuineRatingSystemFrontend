import React from 'react' 
import {Card, Table} from 'react-bootstrap'
import '../css/Table.css'

class SearchTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            productName: '',
            products: []
        }
    }


    componentDidMount(){
        
        fetch('http://localhost:8086/Application/Customer/product/view/best/'+this.props.location.state)
        .then(res => res.json())
        .then(json => {
            this.setState({
                products: json
            })
        });

 }
    render() {

        

        return(
            <div>
                <Card className={"border border-light bg-light text-dark"}>
                <Card.Header>Products Found</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Category</th>
                                    <th>Product Description</th>
                                </tr>
                            </thead>
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
                                          <td>{product.productPrice}</td>
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
export default SearchTable;