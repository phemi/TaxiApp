import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from 'native-base';
import MapContainer from './MapContainer';

class Home extends Component {
  componentDidMount() {
    this.props.setName();
  }

  render() {
    const region = {
      latitude: 6.500501,
      longitude: 3.366604,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0421
    };

    return (
      <Container>
        <MapContainer region={region} />
      </Container>
  );
  }
}


export default Home;
