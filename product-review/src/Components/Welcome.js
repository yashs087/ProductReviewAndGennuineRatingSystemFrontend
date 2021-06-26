import React from 'react' 
import {Jumbotron} from 'react-bootstrap'
import Cards from './Cards'
import SearchBox from './SearchBox'
import Carousel from './Carousel'


class Welcome extends React.Component {

    render(){
        return(
            <div className="App">
                <SearchBox />
            <Jumbotron className="bg-light text-dark" style={{paddingTop: '0px', paddingBottom: '0px'}}>
            
              
              <Carousel />
              <hr />
              <h3>Top Categories</h3>
              <hr />
              <Cards />
            </Jumbotron>
            </div>
        )
    }

}

export default Welcome;