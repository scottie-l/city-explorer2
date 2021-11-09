import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieListing: []
        }
    }

    getMovieListing = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?city=${this.props.location.display_name.split(',')[0]}`
        let response = await axios.get(url);
        console.log(response.data);
        this.setState({movieListing: response.data})
    }

    render() {
        return (
            <Container id = 'movieCont'>
                <Row>
                <button onClick = {this.getMovieListing}>Get movie listings</button> 
                {this.state.movieListing.length > 0 && this.state.movieListing.map((movie, index) => <li key = {index}>Title:{movie.title} Overvierw:{movie.overview} <img src= {movie.image} alt={movie.title}/></li>)}
                </Row>
            </Container>
        )
    }
}
