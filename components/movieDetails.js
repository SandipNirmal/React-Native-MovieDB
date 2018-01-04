import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            list: []
        };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            list: responseJson
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }

    render() {
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
        
        const numbers = [1, 2, 3, 4, 5];

        const movieList = numbers.map((movie) => {
            <Text>movie</Text>
        })
        
        return (
            <View>
                {/* {{movieList}} */}
            </View>
        );
    }
}
