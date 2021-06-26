import axios from 'axios';
import React, {Component} from 'react'
import {Card, Button, Form ,Col} from 'react-bootstrap'
import "../css/Card-Container.css"
import user from "../images/user.png"

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            password:"",
            userType:""
        }

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.userChangeHandler = this.userChangeHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this); 
    }

     
     

    loginHandler = (event) =>{

        event.preventDefault();

        
        const admin = {
            adminUsername: this.state.username,
            adminPassword: this.state.password}
            
        const customer = {
            custUsername: this.state.username,
            custPassword: this.state.password
        }

        

        if(this.state.userType === "admin"){
            console.log("admin");

            axios.post('http://localhost:8086/Application/Admin/login',admin)
            .then(res => {
            console.log(res.data)
                if(res.data === true){
                    alert('Welcome')
                    this.props.history.push('/addproduct');
                }
            } 
            )
            .catch (error =>{
                alert("Invalid credentials");
            })
        }
        
        if(this.state.userType === "customer"){
            console.log("customer");
            axios.post('http://localhost:8086/Application/Customer/login',customer)
            .then(res => {
            console.log(res.data)
            if(res.data === true){
                alert('Welcome')
                this.props.history.push('/');
            }
            })
            .catch (error =>{
                alert("Invalid credentials");
            })
        }
    }

    usernameChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    passwordChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    userChangeHandler(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <div className="card-container">
            <Card className="border border-light text-dark" style={{width: '40%', margin: 'auto', backgroundImage: 'linear-gradient(rgba(119,136,153,0.3),rgba(105,105,105,1))'}}>
                <Card.Body>
                <Form onSubmit={this.loginHandler}>
                    <Form.Row>
                        <Form.Group as={Col} style={{textAlign:'center'}}>
                        <img src={user} alt="user" style={{height:'50px', width:'50px'}}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} style={{textAlign:'center'}}>
                            <Form.Check required type="radio" aria-label="radio 1" name="userType" onChange={this.userChangeHandler} value="admin" label="Admin"/>    
                            
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Check required type="radio" aria-label="radio 1" name="userType" onChange={this.userChangeHandler} value="customer" label="Customer"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control required type="text" name="username" className={"bg-light text-dark"} onChange={this.usernameChangeHandler} value={this.state.username}/>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control required type="password" name="password" onChange={this.passwordChangeHandler} value={this.state.password}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} style={{textAlign:'left'}}>
                        <p style={{color:'white'}}>New user? <a href="/register" style={{paddingRight:'190px', color:'white', textDecoration:'underline'}}>SignUp</a> <Button  variant="dark" type="submit" value="login">Login</Button>{' '}</p>
                        </Form.Group>
                    </Form.Row>
                    
                    

                    
                </Form>
                </Card.Body>
            </Card>

            </div>
                
        )
    }
}

export default Login;