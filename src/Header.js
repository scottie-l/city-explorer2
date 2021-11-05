import {Component} from 'react';
import Container from 'react-bootstrap/Container';
// import header from './pages.css/header.css';

export default class Header extends Component {
    render() {
        return (
            <Container id = 'header.css'>
                <h1>Welcome to City Explorer</h1>
            </Container>
        )
    }
}