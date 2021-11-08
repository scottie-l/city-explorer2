import {Component} from 'react';
import { Container } from 'react-bootstrap/Container';
import Weather from './Weather.js';

export default class WeatherDay extends Component {
    render() {
        return (
            <Container>
                <Weather location = {this.props.location}/>
            </Container>
        )
    }
}