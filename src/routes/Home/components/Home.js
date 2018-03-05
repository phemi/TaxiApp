import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from 'native-base';
import MapContainer from './MapContainer';

class Home extends Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    /*const region = {
      latitude: 6.500501,
      longitude: 3.366604,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0421
    };*/

    //only loads map when props region has latitude
    return (
      <Container>
        { this.props.region.latitude &&
        <MapContainer region={this.props.region} />
        }
      </Container>
  );
  }
}


export default Home;
