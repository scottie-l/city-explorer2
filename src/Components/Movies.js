import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Movie from "./Movie";

export default class Movies extends Component {
   
    render () {
        return (
            <Container>
                <Movie location={this.props.location}/>
            </Container>
        )
    }
}