import axios from 'axios';
import React, {Component} from 'react'
import {Card, Button, Form ,Col} from 'react-bootstrap'
import user from "../images/user.png"

function validate(id,username,password,address,phone){
    const errors = [];
    
    if(id.length === 0){
        errors.push("Id cannot be empty");
    }

    if(!Number(id)){
        errors.push("Id can only be a numeric value");
    }

    if(username.length === 0 || username.length <5){
        errors.push("Username must be of alteast 5 characters");
    }

    if(!(phone.length === 9)){
        errors.push("Phone number can be of 10 digits only");
    }

    if(!Number(phone)){
        errors.push("Phone number cannot only be a numeric value");
    }

    if(address.length === 0){
        errors.push("Address cannot be empty");
    }

    if(password.length<8 || password.length>15){
        errors.push("password length should be between 8 and 15 characters");
    }

    return errors;
}

class Register extends Component{
    constructor(props){
        super(props)

        this.state = {
            id:"",
            username:"",
            password:"",
            address: "",
            phone: "",
            errors:[]
        }

        this.idChangeHandler = this.idChangeHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.phoneChangeHandler = this.phoneChangeHandler.bind(this);
        this.registerHandler = this.registerHandler.bind(this);
    }

    idChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
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

    addressChangeHandler(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    phoneChangeHandler(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    registerHandler =(event) =>{
        event.preventDefault();

        const{id,username,password,phone,address} = this.state;

        const errors = validate(id,username,password,address,phone);
        if(errors.length > 0){
            alert(errors[0])
        }

        if(errors.length === 0){
            axios.post('http://localhost:8086/Application/Customer/signup',{
            customerID: parseInt(this.state.id),
            custUsername: this.state.username,
            custPassword: this.state.password,
            custAddress: this.state.address,
            custPhone: parseInt(this.state.phone)
        })
        .then(res => {
            console.log(res.custID)
            alert('Registered')
        })

        this.props.history.push('/login');
        }

        else{
            this.setState({errors})
            console.log(this.state);
            return;
        }
    }

    render(){
        return(
            
                  <div>
               
                <Card className={"border border-light bg-light text-dark"} style={{width: '50%', margin: '5% auto', backgroundImage: 'linear-gradient(rgba(119,136,153,0.3),rgba(105,105,105,1))'}}>
                    
                    <Card.Body>
                        <Form onSubmit={this.registerHandler}>
                        <Form.Row>
                        <Form.Group as={Col} style={{textAlign:'center'}}>
                        <img src={user} alt="user" style={{height:'50px', width:'50px'}}/>
                        </Form.Group>
                    </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>ID</Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"}  name="id" value={this.state.id} onChange={this.idChangeHandler}/>{' '}
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control  required type="text" className={"bg-light text-dark"}  name="username" value={this.state.username} onChange={this.usernameChangeHandler}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                            <Form.Group as={Col}>

                                <Form.Label>Password:</Form.Label>
                                <Form.Control required type="password" className={"bg-light text-dark"}  name="password" value={this.state.password} onChange={this.passwordChangeHandler}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Phone Number: </Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"} name="phone" value={this.state.phone} onChange={this.phoneChangeHandler} />
                                
                            </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>Address: </Form.Label>
                                <Form.Control required type="text" className={"bg-light text-dark"}  name="address" value={this.state.address} onChange={this.addressChangeHandler}/>
                                </Form.Group>
                            
                            </Form.Row>

                            <Form.Row>

                        <Form.Group as={Col} style={{textAlign:'center'}}>
                        <Button  variant="dark" type="submit" value="submit">Sign Up</Button>{' '}
                        </Form.Group>
                    </Form.Row>
                                
                            
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Register;