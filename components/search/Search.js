import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements'
import * as _ from 'lodash';

import style, { primaryColor } from '../../styles/styles';
import Constant from '../../utilities/constants';
import SearchResult from './SearchResult';
  
const buttons = ['Movie', 'Tv', 'Person']

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      searchInProgress: false,
      selectedIndex: 0,
      filteredResults: []
    }
  }

  onTextChange = (e) => {
    let { api_base_url, lan_region, api_key } = Constant;
    const searchUrl = '/search/multi';

    // Search only is there is any value
    if (e) {
      const url = `${api_base_url}${searchUrl}?${api_key}${lan_region}&query=${encodeURIComponent(e)}`;

      this.setState({
        searchInProgress: true
      });
  
      fetch(url)
      .then((res) => res.json())
      .then(res => {
        this.setState({
          searchResult: res.results,
          filteredResults: this.filterSearchResults(res.results, this.state.selectedIndex),
          searchInProgress: false
        });
      }, (err) => {
        console.log('Error', err);
      });
    }
  }

  onClearText = () => {}

  updateIndex = (e) => {
    this.setState({
      selectedIndex: e,
      filteredResults: this.filterSearchResults(this.state.searchResult, e)
    });
  }

  /**
   * Filters search results based on media_type
   */
  filterSearchResults = (results, index) => {
    return results.filter((result) => {
      return result.media_type.toLowerCase() === buttons[index].toLowerCase()
    })
  }

  // Redirect user to respective screen based on search result
  onSelectItem = (item) => {
    switch(item.media_type) {
      case 'movie':
        this.props.navigation.navigate('MovieDetails', {item});
        break;

      case 'tv':
        this.props.navigation.navigate('TvShowDetails', {item});
        break;
      
      case 'person':
        this.props.navigation.navigate('CastDetails', {cast: item});
        break;
      
      default:
        console.log('Unrecognised media type');
        break;
    }
  }

  render() {
    const {filteredResults, searchInProgress, selectedIndex} = this.state;

    return (
      <View>
        <SearchBar
          style={{marginTop: 20}}
          round
          onChangeText={_.debounce(this.onTextChange, 1000)}
          onClearText={this.onClearText}
          placeholder='Search'
          />

        <ButtonGroup
            lightTheme={false}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 30, backgroundColor: '#e1e1e1', marginTop: 10}}
          />

        <View>
        {searchInProgress ? 
          <ActivityIndicator size="large" color={primaryColor}/> :
          <SearchResult items={filteredResults} onSelect={this.onSelectItem}/>}
        </View>
      </View>
    );
  }
}
