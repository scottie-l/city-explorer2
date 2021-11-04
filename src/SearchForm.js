import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css/App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: ''
    }
  }

  handleChange = (event) => {
    this.setState({cityName: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.getLocation(this.state.cityName)
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group className = 'mb-3' controlId = 'city'>
            <Form.Label>Enter a city to search for</Form.Label>
            <Form.Control onChange = {this.handleChange} type = 'text' value = {this.state.cityName}/>
          </Form.Group>
          <Button onClick = {this.handleClick} variant = 'primary' type = 'submit'>Explore!</Button>
        </Form>
        <p>{this.state.cityName}</p>
      </Container>
    )
  }
}