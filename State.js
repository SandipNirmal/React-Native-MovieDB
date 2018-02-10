export default {
  'movies': {
    'isFetching': true,
    'categories': {
      'nowShowing': [],
      'comingSoon': [],
      'popular': []
    },
    'details': {}
  },
  'tvShows': {
    'isFetching': false,
    'categories': {
      'showingToday': [],
      'topRated': [],
      'popular': [],
    },
    'details': {}
  },
  'search': {
    'isSearching': false,
    'selectedIndex': 0,
    'results': [],
    'details': {},
  },
  'config': {
    'apiKey': '',
    'image': {
      'secureBaseUrl': '',
      'backdropSize': '',
      'posterSizeForBackground': '',
      'posterSizeForImageList': '',
      'profileSize': '',
    },
  },
  'settings': {
    'language': 'IN-hi',
    'region': 'IN',
  },
  // TODO: We should not be using the following. Study the right way of doing this
  'helper': {
    'currentTab': ''
  }
}

