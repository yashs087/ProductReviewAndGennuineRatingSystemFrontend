import React from 'react' 
import {Jumbotron} from 'react-bootstrap'
import AboutCards from './AboutCards'


class About extends React.Component {

    render(){
        return(
            <div className="App">
                <Jumbotron>
              <hr />
              <h3>About Us</h3>
              <hr />
              <AboutCards />
            </Jumbotron>
            </div>
        )
    }

}

export default About;