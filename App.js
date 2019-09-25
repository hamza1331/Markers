import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          cost: `$${getRandomInt(50, 300)}`
        }
      ]
    })
  }
  render() {
    return (
      <MapView 
        style={styles.container}
        initialRegion={{
            latitude: 45.5209087,
            longitude: -122.6705107,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onPress={this.handlePress}
      >
      {this.state.markers.map((marker) => {
        return (
          <Marker {...marker} >
            <View style={styles.marker}>
              <Text style={styles.text}>{marker.cost}</Text>
            </View>
          </Marker>
        )
      })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});