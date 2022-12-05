/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */


// Linking Config is used to tell the app how to respond to incoming deep links
// so that the app can open the correct screen when a deep link is received.
// This is not a priority for this app, but it is a good idea to have it set up.

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      NotFound: '*',
      Modal: 'modal',
      About: 'about',
      Root: {
        screens: {
          MoodTracker: {
            screens: {
              MoodTrackerScreen: 'mood-tracker',
            },
          },
          Journal: {
            screens: {
              JournalScreen: 'journal',
            },
          },
        },
      },
    },
  },
};

export default linking;
