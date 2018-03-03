import React from 'react'
import {ScrollView} from 'react-native'

import EpisodeItem from './EpisodeItem'

const EpisodeList = (props) => {
  return (
    <ScrollView>
      {props.episodes.map((episode, index) => (
        <EpisodeItem data={episode} key={index} />
      ))}
    </ScrollView>
  )
}

export default EpisodeList
