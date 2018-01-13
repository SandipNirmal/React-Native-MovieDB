import {Dimensions} from 'react-native';

// return device width and height
// const {height:winHeight, width:winWidth} = Dimensions.get('window');
const {height, width} = Dimensions.get('screen');
const tabBarHeight = 54;

const APP_CONSTANT = {
    goldenRatio: 1.618,
    width,
    height: height - (tabBarHeight * 2)
};

export default APP_CONSTANT;