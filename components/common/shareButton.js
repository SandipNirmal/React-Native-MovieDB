import React from 'react';
import {Share} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

const onShare = (title, media_type, media_id) => {
  Share.share({
    message: `Checkout ${title} on @themoviedb via LaLuneClone.`,
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
  const {name, type, id} = props;
  return (
      <Icon
      name='share'
      color='#32CD32'
      onPress={() => {onShare(name, type, id)}} />
  )
}

ShareButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ShareButton;
