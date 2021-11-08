import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default class CityCard extends Component {
    render() {
        return (
            <Container>
                <Card id = 'cityCard' style = {{width: '18rem'}}>
                    <Card.Img variant = 'top' src = {this.props.location.map}/>
                    <Card.Body>
                        <Card.Title>{this.props.location.display_name}</Card.Title>    
                        <Card.Text>
                            Lat: {this.props.location.lat}
                        </Card.Text>
                        <Card.Text>
                            Lon: {this.props.location.lon}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}