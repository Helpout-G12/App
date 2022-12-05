/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const root_linking = {
  screens: {
    TabOne: {
      screens: {
        TabOneScreen: 'one',
      },
    },
    TabTwo: {
      screens: {
        TabTwoScreen: 'two',
      },
    },
  },
}

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: root_linking,
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
