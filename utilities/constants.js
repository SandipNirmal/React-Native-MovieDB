import {Dimensions} from 'react-native';
import {API_KEY} from 'react-native-dotenv';

// return device width and height
// const {height:winHeight, width:winWidth} = Dimensions.get('window');
const {height, width} = Dimensions.get('screen');
const tabBarHeight = 54;

const APP_CONSTANT = {
    api_base_url: 'https://api.themoviedb.org/3',
    api_key: API_KEY,
    lan_region: '&language=IN-hi&region=IN&page=1',
    goldenRatio: 1.618,
    width,
    height: height - (tabBarHeight * 2)
};

export default APP_CONSTANT;