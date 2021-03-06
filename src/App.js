import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import CityCard from './Components/CityCard.js';
import SearchForm from './Components/SearchForm';
import Alert from 'react-bootstrap/Alert';
import Weather from './Components/Weather.js';
import Movies from './Components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        error: false,
        location: {}
    }
  } 
  
  getLocation = async (city) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${city}&format=json`;
    try {
      let response = await axios.get(url)
      this.setState({location: response.data[0], error: false}, this.getMapUrl)
    } catch(event) {
      console.error(event);
      this.setState({error: true})
    }
  }

  getMapUrl = () => {
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=14`;
    this.setState({
      location: {...this.state.location, map: url}
    })
  }
  
  render() {
    return (
      <div>
        <Header/>
        <SearchForm getLocation = {this.getLocation}/>
        {this.state.location.map && <CityCard location = {this.state.location}/>}
        {this.state.error && <Alert variant = 'danger'>There has been an Error</Alert>}
        {this.state.location.map && <Weather location = {this.state.location}/>}
        {this.state.location.map && <Movies location = {this.state.location}/>}
        <Footer/>
      </div>
    )
  }
}
