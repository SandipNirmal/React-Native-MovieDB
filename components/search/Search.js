import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements'
import * as _ from 'lodash';

import style, { primaryColor } from '../../styles/styles';
import Constant from '../../utilities/constants';
import SearchResult from './SearchResult';
import { 
  doneSearchingMoviesEtc,
  searchFilterChanged, searchingForMoviesEtc, searchResultSelected,
  selectedMovie, selectedTvShow,
} from '../../Actions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
  
const buttons = ['Movie', 'Tv', 'Person']

class Search extends Component {
  onTextChange = (e) => {
    let { api_base_url, lan_region, api_key } = Constant;
    const searchUrl = '/search/multi';

    // Search only if there is any value
    if (e) {
      const url = `${api_base_url}${searchUrl}?${api_key}${lan_region}&query=${encodeURIComponent(e)}`;
      this.props.onSearchingForMoviesEtc();

      fetch(url)
      .then((res) => res.json())
      .then(res => {
        this.props.onDoneSearchingMoviesEtc(res.results)
      }, (err) => {
        console.error(err);
      });
    }
  }

  onClearText = () => {}

  /**
   * Filters search results based on media_type
   */
  filterSearchResults = (results, index) => {
    return results.filter((result) => {
      return result.media_type.toLowerCase() === buttons[index].toLowerCase()
    })
  }

  render() {
    const {results, isSearching, onFilterChanged, onSearchResultSelected,
      selectedIndex, config, popular} = this.props;
    const filteredResults = this.filterSearchResults(results, selectedIndex);

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
            onPress={onFilterChanged.bind(this)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 30, backgroundColor: '#e1e1e1', marginTop: 10}}
          />

        <View>
        {isSearching ? 
          <ActivityIndicator size="large" color={primaryColor}/> :
          <SearchResult config={config} items={filteredResults} popular={popular} onSelect={onSearchResultSelected}/>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  config: state.configuration,
  popular: state.movies.categories.popular,
  ...state.search,
});

const mapDispatchToProps = dispatch => ({
  onFilterChanged: (index) => {
    dispatch(searchFilterChanged(index));
  },
  onSearchingForMoviesEtc: () => {
    dispatch(searchingForMoviesEtc());
  },
  onDoneSearchingMoviesEtc: (results) => {
    dispatch(doneSearchingMoviesEtc(results));
  },
  onSearchResultSelected: (result) => {
    const params = {
      name: result.name || result.title,
      id: result.id
    }

    dispatch(searchResultSelected(result, result.media_type));
    switch(result.media_type) {
      case 'movie':
        dispatch(NavigationActions.navigate({routeName: 'MovieDetails', params}));
        break;
      case 'tv':
        dispatch(NavigationActions.navigate({routeName: 'TvShowDetails', params}));
        break;
      case 'person':
        dispatch(NavigationActions.navigate({routeName: 'CastDetails', params}));
        break;
      default:
        console.log('Unrecognised media type');
        break;
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
