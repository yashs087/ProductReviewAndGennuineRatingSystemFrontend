import React from 'react' 
import {Card, Col, Form} from 'react-bootstrap'
import image1 from '../images/television.jpg'
import image2 from '../images/laptop.jpeg'
import image3 from '../images/mobile.jpg'
import "../css/card.css"


import { withRouter} from 'react-router-dom'; 

class Cards extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            productCategory: ''
        }
        this.submitTelevision = this.submitTelevision.bind(this)
        this.submitMobile = this.submitMobile.bind(this);
        this.submitLaptop = this.submitLaptop.bind(this);
    }

    submitTelevision(e1) {
        this.props.history.push('/searchbest','Television')
    }

    submitMobile (e2) {
       
        console.log(this.state.productCategory);
        
        this.props.history.push('/searchbest','Mobile Phone');
    }

    submitLaptop(e3) {
        this.props.history.push('/searchbest','Laptop');
    }

    render() {
        return(
            <div className="category">
                <Form.Row>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img variant="top" src={image1}/>
                <Card.ImgOverlay>
                    <Card.Text onClick={this.submitTelevision}>Televisions</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img variant="top" src={image2}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text onClick={this.submitLaptop}>Laptops</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img variant="top" src={image3} onClick={this.submitMobile}/>
                <Card.ImgOverlay>
                    <Card.Text onClick={this.submitMobile}>Mobiles</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                </Form.Row>
                
            </div>
        )
    }
}

export default withRouter(Cards);