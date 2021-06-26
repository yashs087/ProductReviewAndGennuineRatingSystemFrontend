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
import ViewCustReview from './Components/ViewCustReview'
import ViewCustProduct from './Components/ViewCustProduct'
import AddReview from './Components/AddReview'
import SearchTable from './Components/SearchTable'
import Productreview from './Components/Productreview'
import Login from './Components/Login';
import Admin from './Components/Admin';
import Register from './Components/Register';
import Searchbest from './Components/Searchbest'
import background from './images/background.jpg'
import About from './Components/About'

function App() {

  const marginTop = {
    marginTop: "20px"
  }

  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize:'cover', minHeight: '700px'}}>
      <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/admin" exact component={() => <Admin/>}/>
              <Route path="/addproduct" exact component={AddProduct} />
              <Route path="/viewproduct" exact component={ViewProduct} />
              <Route path="/deleteproduct" exact component={DeleteProduct} />
              <Route path="/updateproduct" exact component={UpdateProduct} />
              <Route path="/viewcustomers" exact component={ViewCustomer} />
              <Route path="/viewreview" exact component={ViewReview} />
              <Route path="/searchproduct" exact component={SearchProduct} />
              <Route path="/bestproduct" exact component={BestProduct} />
              <Route path="/viewcustreview" exact component={ViewCustReview} />
              <Route path="/viewcustproduct" exact component={ViewCustProduct} />
              <Route path="/addreview" exact component={AddReview} />
              <Route path="/searchtable" exact component={SearchTable} />
              <Route path="/productreview" exact component={Productreview} />
              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/searchbest" exact component={Searchbest} />
              <Route path="/about" exact component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
