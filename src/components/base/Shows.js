import React, {Component} from 'react'
import {
  ActivityIndicator,
  ScrollView
} from 'react-native'

import HorizontalImageList from '../common/ImageList'
import Carousel from '../common/Carousel'
import { getUriPopulated } from '../../utilities/utils'
import { getShows } from '../../services/shows'

import style, { primaryColor } from '../../styles/styles'

String.prototype.toTitle = function () {
  return this.replace(/([A-Z])/g, ' $1').replace(/(.)/, c => c.toUpperCase())
}

class Shows extends Component {
  componentDidMount () {
    console.error('Need to override this in base class')
  }

  fetch (category, route) {
    const { onFetchCompleted, config, settings } = this.props
    getShows(route, settings.language, settings.region)
    .then(({data}) => {
      onFetchCompleted(category,
        getUriPopulated(data.results, config, 'posterSizeForImageList'))
    })
    .catch(error => console.error(error.response))
  }

  showDetails (show) {
    console.error('need to override this in base class')
  }

  showAll (category, shows) {
    console.error('need to override this in base class')
  }

  render () {
    const { isFetching, onShowDetails, categories, config } = this.props

    return (
      isFetching
        ? <ScrollView style={style.screenBackgroundColor}>
          <ActivityIndicator size='large' color={primaryColor} />
        </ScrollView>
        : <ScrollView style={style.screenBackgroundColor}>
          <Carousel
            images={getUriPopulated(categories[this.carouselCategory], config, 'backdropSize')}
            onPress={onShowDetails.bind(this)}
          />
          {Object.keys(categories).map((category, index) => (
            <HorizontalImageList
              isTouchableImage
              hasSeeAllOption
              key={index}
              title={category.toTitle()}
              style={config.style.posterSize}
              onShowAll={this.showAll.bind(this)}
              onPress={onShowDetails.bind(this)}
              images={categories[category]}
            />
          ))}
        </ScrollView>
    )
  }
}

export default Shows
