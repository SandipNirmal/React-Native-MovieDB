import {Dimensions} from 'react-native';

// return device width and height
// const {height:winHeight, width:winWidth} = Dimensions.get('window');
const {height, width} = Dimensions.get('screen');
const tabBarHeight = 54;

const APP_CONSTANT = {
    api_base_url: 'https://api.themoviedb.org/3',
    api_key: 'api_key=b8a04ea374eece868a6690782c9e7536',
    goldenRatio: 1.618,
    width,
    height: height - (tabBarHeight * 2)
};

export default APP_CONSTANT;