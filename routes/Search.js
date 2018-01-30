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
    backgroundColor: '#4C4C4C'
  }
});

export default SearchStack;
