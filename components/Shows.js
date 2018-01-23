import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import HorizontalImageList from './common/ImageList';
import Carousel from './common/Carousel';
import Constant from '../utilities/constants';
import { getUriPopulated } from '../utilities/utils';

import style, { primaryColor, StackNavHeaderStyles } from '../styles/styles';

String.prototype.toTitle = function() {
  return this.replace(/([A-Z])/g, " $1").replace(/(.)/, c => c.toUpperCase());
};

class Shows extends Component {
  componentDidMount() {
    console.error("Need to override this in base class");
  }

  fetch(category, route) {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const { onFetchCompleted, config } = this.props;
    const { language, region } = this.props.settings;
    const uri = `${baseUrl}${route}?${apiKey}&language=${language}&region=${region}&page=1`;

    fetch(uri).then((response) => response.json()).then((response) => {
      onFetchCompleted(category,
        getUriPopulated(response.results, config, "posterSizeForImageList"));
    }).catch(error => console.error(error))
  }

  showDetails(show) {
    console.error("need to override this in base class");
  }

  showAll(category, shows) {
    console.error("need to override this in base class");
  }

  render() {
    const { isFetching, categories, config } = this.props;

    return (
      isFetching ?
        <ScrollView style={style.screenBackgroundColor}>
          <ActivityIndicator size="large" color={primaryColor} />
        </ScrollView>
      :
        <ScrollView style={style.screenBackgroundColor}>
          <Carousel 
            images={getUriPopulated(categories[this.carouselCategory], config, 'backdropSize')} 
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
              images={categories[category]}
            />
          ))}
        </ScrollView>
    );
  }
}

export default Shows;
