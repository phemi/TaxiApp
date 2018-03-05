import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
  componentDidMount() {
    this.props.setName();
  }

  render() {
    console.log('Displays components Home');
    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#000000' }}>Helllo {this.props.name} </Text>
    </View>);
  }
}


export default Home;
