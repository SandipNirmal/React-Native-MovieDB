import React from 'react'
import {Share, Platform} from 'react-native'
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types'

const os = Platform.OS

const onShare = (title, media_type, media_id) => {
  Share.share({
    message: `Checkout ${title} on @themoviedb via MovieDB.`,
    url: `https://www.themoviedb.org/${media_type}/${media_id}`
  }, {
    // Android only:
    dialogTitle: 'Share Movie Info',
    // iOS only:
    excludedActivityTypes: [
      // 'com.apple.UIKit.activity.PostToTwitter'
    ]
  })
}

const ShareButton = (props) => {
  const {name, type, id} = props
  return (
    <Icon
      name={(os === 'ios') ? 'ios-share-outline' : 'share'}
      type={(os === 'ios') ? 'ionicon' : ''}
      color='#32CD32'
      size={30}
      underlayColor='#222222'
      onPress={() => { onShare(name, type, id) }} />
  )
}

ShareButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ShareButton
