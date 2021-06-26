import React, {Component} from 'react'
import { Redirect } from 'react-router'

class Admin extends Component{

    constructor(props){
        super(props)

        this.state = {
            authorize:false
        }

        this.redirect = this.redirect.bind(this);
    }

    redirect(){
        this.setState({
            authorize: this.props.location.state
        })

        if(!this.authorize){
            return <Redirect to="/login"/>
        }

        else{
            return <Redirect to="/admin"/>
        }
    }

    render(){
        return(
            <div>
                {this.redirect}
                WELCOME
            </div>
        )
    }
}

export default Admin;