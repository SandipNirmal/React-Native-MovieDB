export default {
  'movies': {
    'isFetching': true,
    'categories': {
      'nowShowing': [],
      'comingSoon': [],
      'popular': []
    },
    'details': {},
    'cast': {
      'isFetching': false,
      'details': {}
    }
  },
  'tvShows': {
    'isFetching': false,
    'categories': {
      'showingToday': [],
      'topRated': [],
      'popular': []
    },
    'details': {},
    'cast': {
      'isFetching': false,
      'details': {}
    }
  },
  'search': {
    'isSearching': false,
    'selectedIndex': 0,
    'results': [],
    'details': {},
    'cast': {
      'isFetching': false,
      'details': {}
    }
  },
  'config': {
    'apiKey': '',
    'image': {
      'secureBaseUrl': '',
      'numColumns': 3, // default
      'backdropSize': '',
      'posterSizeForBackground': '',
      'posterSizeForImageList': '',
      'profileSize': '',
      'stillSize': ''
    },
    'style': {
      'posterSize': {},
      'backdropSize': {},
      'carousel': {}
    }
  },
  'settings': {
    'language': 'IN-hi',
    'region': 'IN',
    'theme': 'Dark'
  },
  // TODO: We should not be using the following. Study the right way of doing this
  'helper': {
    'currentTab': 'Movies'
  }
}
