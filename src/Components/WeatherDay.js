import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

export default class WeatherDay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherForecast: [] 
        }
    }

    getWeatherForecast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url)
        console.log(response.data)
        this.setState({weatherForecast: response.data})
    }

    render() {
        return (
            <Container id = 'forecastCont'>
                <button onClick = {this.getWeatherForecast}>Get the Weather Forecast</button> 
                {this.state.weatherForecast.length > 0 && this.state.weatherForecast.map((dayForecast, index) => <li key = {index}>date:{dayForecast.data} description:{dayForecast.description}</li>)}
            </Container>
        )
    }
}
