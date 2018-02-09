import 'react-native';
import "isomorphic-fetch";
import React from 'react';
import App from '../App';

// import Orientation from './__mocks__/orientation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-orientation', () => {
  'Orientation'
});

it('renders correctly', () => {
  const tree = renderer.create(<App/>);
});
