import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './Components/Welcome'
import AddProduct from './Components/AddProduct'
import ViewProduct from './Components/ViewProduct';
import DeleteProduct from './Components/DeleteProduct'
import UpdateProduct from './Components/UpdateProduct'
import ViewCustomer from './Components/ViewCustomer'
import ViewReview from './Components/ViewReview'
import SearchProduct from './Components/SearchProduct'
import BestProduct from './Components/BestProduct'

function App() {

  const marginTop = {
    marginTop: "20px"
  }

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/addproduct" exact component={AddProduct} />
              <Route path="/viewproduct" exact component={ViewProduct} />
              <Route path="/deleteproduct" exact component={DeleteProduct} />
              <Route path="/updateproduct" exact component={UpdateProduct} />
              <Route path="/viewcustomers" exact component={ViewCustomer} />
              <Route path="/viewreview" exact component={ViewReview} />
              <Route path="/searchproduct" exact component={SearchProduct} />
              <Route path="/bestproduct" exact component={BestProduct} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
