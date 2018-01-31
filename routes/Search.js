import {
  StackNavigator
} from 'react-navigation';

import Search from './../components/Search';

const SearchStack = StackNavigator({
  Search: {
    screen: Search
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  cardStyle: {
    backgroundColor: '#494949'
    // backgroundColor: 'rgba(4, 4, 4, 0.6)'  
  }
});

export default SearchStack;
