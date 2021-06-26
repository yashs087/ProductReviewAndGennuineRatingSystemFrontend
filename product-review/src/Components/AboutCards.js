import React from 'react' 
import {Card, Col, Form} from 'react-bootstrap'
import yogesh from '../images/Screenshot_20210524-163529__01.jpg'
import palak from '../images/Screenshot_20210524-163553__01.jpg'
import rohan from '../images/rohan.jpeg'
import daksh from '../images/IMG_20200313_114632_Bokeh.jpg'
import "../css/card.css"


import { withRouter} from 'react-router-dom'; 

class AboutCards extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            productCategory: ''
        }
        
    }

   

    render() {
        return(
            <div className="category">
                <Form.Row>
                        <Form.Group>
                        <p style={{width:'50%',textAlign:'center', margin:'auto', padding:'20px 0px'}}>
                        Our aim is to create a user-friendly platform where people can openly share their opinions about any goods or items.
                        The more consumers use our platform and share their own opinions, the richer the insights we offer.</p>
                        </Form.Group>
                    </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img style={{maxHeight: "300px"}} variant="top" src={yogesh}/>
                <Card.ImgOverlay>
                    <Card.Text >Yogesh Dixit</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img style={{maxHeight: "300px"}} variant="top" src={palak}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text >Palak Bansal</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img style={{maxHeight: "300px"}} variant="top" src={daksh} onClick={this.submitMobile}/>
                <Card.ImgOverlay>
                    <Card.Text >Daksh Yadav</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Card  className={"border border-light bg-light text-dark"}>
                <Card.Img style={{maxHeight: "300px"}} variant="top" src={rohan} onClick={this.submitMobile}/>
                <Card.ImgOverlay>
                    <Card.Text >Rohan Senapati</Card.Text>
                </Card.ImgOverlay>
            </Card>
                    </Form.Group>
                </Form.Row>
                
            </div>
        )
    }
}

export default withRouter(AboutCards);