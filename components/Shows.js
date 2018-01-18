import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import HorizontalImageList from './ImageList';
import Carousel from './Carousel';
import Constant from './../utilities/constants';

import style, { StackNavHeaderStyles } from '../styles/styles';

// TODO: Implement Configuration and Latestshows
import {Configuration} from '../data/configuration';

String.prototype.toTitle = function() {
  return this.replace(/([A-Z])/g, " $1").replace(/(.)/, c => c.toUpperCase());
};

class Shows extends Component {
  constructor(props) {
    super(props);
    // Need to override state in base classes
    this.state = {
      "isLoading": true,
      "categories": {}
    }
  }
  componentDidMount() {
    console.error("Need to override this in base class");
  }

  fetch(category, route) {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const language = "language=en-US";
    const uri = `${baseUrl}${route}?${apiKey}&${language}&page=1`;

    fetch(uri).then((response) => response.json()).then((response) => {
      let { categories } = this.state;
      categories[category] = this.getUriPopulated(response.results);
      this.setState({isLoading: false, categories});
    }).catch(error => console.error(error))
  }

  getUriPopulated(shows, imageType="poster") {
    const secureUrl = Configuration['images']['secure_base_url'];
    const size = Configuration['images'][`${imageType}_sizes`][0];

    return shows.map((show) => {
      const path = show[`${imageType}_path`];
      show['uri'] = `${secureUrl}${size}${path}`;
      return show
    });
  }

  showDetails(show) {
    console.error("need to override this in base class");
  }

  showAll(category, shows) {
    console.error("need to override this in base class");
  }

  render() {
    const { isLoading, categories } = this.state;

    return (
      isLoading ?
        <ScrollView style={style.screenBackgroundColor}>
          <ActivityIndicator size="large" color="#32CD32" />
        </ScrollView>
      :
        <ScrollView style={style.screenBackgroundColor}>
          <Carousel 
            images={this.getUriPopulated(categories[this.carouselCategory], 'backdrop')} 
            onPress={this.showDetails.bind(this)}
          />
          {Object.keys(categories).map((category, index) => (
            <HorizontalImageList
              isTouchableImage
              hasSeeAllOption
              key={index}
              title={category.toTitle()}
              style={style.posterSize}
              onShowAll={this.showAll.bind(this)}
              onPress={this.showDetails.bind(this)}
              images={this.state.categories[category]}
            />
          ))}
        </ScrollView>
    );
  }
}

export default Shows;
