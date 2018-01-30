import {
  StyleSheet,
  Platform
} from 'react-native';

import APP_CONSTANT from './../utilities/constants.js';
const marginTop = APP_CONSTANT.height / APP_CONSTANT.goldenRatio;
const primaryColor = "#32CD32"

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  detailsContainer: {
    marginTop,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(32, 32, 32, 0.9)'
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerBackground: {
    backgroundColor: '#040404'
  },
  headerTextColor: {
    color: '#CFCFCF'
  },
  text: {
    color: '#ffffff'
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  headingText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 6,
    paddingBottom: 6
  },
  normalText: {
    fontSize: 12
  },
  textStickToBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  posterSize: {
    width: 92,
    height: 136,
    margin: 5
  },
  backdropSize: {
    width: 280,
    height: 150,
    margin: 5
  },
  avatarContainer: {
    width: 100,
    height: 60
  },
  castBackground: {
    flex:1,
    height: (0.618 * (APP_CONSTANT.height - 104)),
    backgroundColor: '#595959',
    alignItems: 'center',
    justifyContent: 'center'
  },
  castBiography: {
    padding: 20,
    backgroundColor: 'rgba(32, 32, 32, 0.9)'
  },
  avatarSize: {
    backgroundColor: '#545454',
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
    marginRight: 20,
    marginLeft: 20
  },
  avatarBigSize: {
    width:  80,
    height: 80,
    borderRadius: 40
  },
  avatarText: {
    maxWidth: 90,
    textAlign: 'center'
  },
  imagePlaceholder: {
    backgroundColor: '#545454',
  },
  screenBackgroundColor: {
    backgroundColor: '#040404'
  },
  trailerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#616161',
    backgroundColor: '#020202',
  },
  trailerPlayIcon: {},
  trailerTitle: {
    textAlign: 'left',
    paddingLeft: 4
  },
  centerContentContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  appName: {
    marginTop: 15,
    fontSize: 48,
    fontWeight: '500'
  },
  startupScreenTextProps: {
    color: primaryColor,
    textAlign: 'center',
  },
  videoPlayerContainer: {
    flex: 1
  },
  detailHeadings: {
    marginTop:15,
    marginBottom: 4
  },
  searchItem: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    padding:2,
    margin: 6,
    backgroundColor: '#393939',
    shadowRadius: 0,
    shadowColor: '#191919'
  },
  searchItemImage: {
    width: 64,
    height: 86
  },
  searchItemData: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25
  },
  searchResult: {
    marginBottom: 200
  },
  rightArrow: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5
  }
});

const StackNavHeaderStyles = {
  headerTitleStyle: style.headerTextColor,
  headerStyle: style.headerBackground,
  headerTintColor: primaryColor,
}

export {
  StackNavHeaderStyles,
  primaryColor,
}

export default style;
