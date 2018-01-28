import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { SearchBar } from 'react-native-elements'
import * as _ from 'lodash';

import style from './../styles/styles';
import Constant from '../utilities/constants';

import SearcResult from './SearchResult';
import SearchResult from './SearchResult';
  
export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      searchInProgress: false
    }
  }

  onTextChange = (e) => {
    let { api_base_url, lan_region, api_key } = Constant;
    const searchUrl = '/search/multi';
    const url = `${api_base_url}${searchUrl}?${api_key}${lan_region}&query=${encodeURIComponent(e)}`;

    this.setState({
      searchInProgress: true
    });

    fetch(url)
    .then((res) => res.json())
    .then(res => {
      this.setState({
        searchResult: res.results,
        searchInProgress: false
      });
    }, (err) => {
      console.log('Error', err);
    });
  }

  onClearText = () => {} 

  render() {
    const {searchResult, searchInProgress} = this.state;

    return (
        <View>
            <SearchBar
              style={style.SearchBar}
              round
              onChangeText={_.debounce(this.onTextChange, 1000)}
              onClearText={this.onClearText}
              placeholder='Search' />

              <View style={{marginTop: 20}}>
              {/* <Text>Search Results</Text> */}
              {searchInProgress ? 
                <ActivityIndicator size="large"/> :
                <SearchResult items={searchResult} />}
              </View>
        </View>
    );
  }
}
