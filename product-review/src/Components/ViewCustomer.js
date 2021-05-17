import React from 'react' 
import {Card, Table} from 'react-bootstrap' 

class ViewCustomer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8086/Application/Admin/customer/view/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                customers: json
            })
        })
     }
 
     render() {
         return(
             <Card className={"border border-dark bg-dark text-white"}>
                 <Card.Header>Customer Details</Card.Header>
                     <Card.Body>
                         <Table bordered hover striped variant="dark">
                             <thead>
                                 <tr>
                                     <th>Customer ID</th>
                                     <th>Username</th>
                                     <th>Password</th>
                                     <th>Address</th>
                                     <th>Contact Number</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     this.state.customers.length === 0 ?
                                     <tr align="center">
                                         <td colSpan="5">{this.state.customers.length} Customers Registered</td>
                                     </tr> :
                                     this.state.customers.map((customer) => (
                                       <tr key={customer.customerID}>
                                           <td>{customer.customerID}</td>
                                           <td>{customer.custUsername}</td>
                                           <td>{customer.custPassword}</td>
                                           <td>{customer.custAddress}</td>
                                           <td>{customer.custPhone}</td>
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

export default ViewCustomer;