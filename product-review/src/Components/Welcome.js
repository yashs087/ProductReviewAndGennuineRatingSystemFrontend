import React from 'react' 
import {Jumbotron} from 'react-bootstrap'



class Welcome extends React.Component {

    render(){
        return(
            <div className="App">
            <Jumbotron className="bg-dark text-white">
              <h1>Welcome to Product Review</h1>
            </Jumbotron>
            </div>
        )
    }

}

export default Welcome;