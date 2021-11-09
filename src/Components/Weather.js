import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import WeatherDay from './WeatherDay.js';

export default class Weather extends Component {
    render() {
        return (
            <Container>
                <WeatherDay location = {this.props.location}/>
            </Container>
        )
    }
}
