import React from 'react'
import {View, Text, Image} from 'react-native'
import {connect} from 'react-redux'

import style from './../../styles/styles'

const EpisodeItem = ({data, config}) => {
  const {name, overview, still_path, episode_number} = data
  const {secureBaseUrl, stillSize} = config.image
  const episodeImg = `${secureBaseUrl}${stillSize}/${still_path}`

  return (
    <View style={style.episodeItem}>
      <View style={style.episodePosterContainer}>
        <Image
          style={style.episodePoster}
          source={{uri: episodeImg}}
        />
      </View>
      <View style={style.episodeDesc}>
        <Text style={[style.text, style.subHeadingText]}>{name}</Text>
        <Text style={[style.secondaryText, style.normalText]}>Episode #{episode_number}</Text>
        <Text style={[style.text, style.normalText]}>{overview}</Text>
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  config: state.configuration
})

export default connect(mapStateToProps)(EpisodeItem)
