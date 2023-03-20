/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */


// Linking Config is used to tell the app how to respond to incoming deep links
// so that the app can open the correct screen when a link is opened.

import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      NotFound: '*',
      Modal: 'modal',
      Login: 'login',
      Profile: 'profile',
      About: 'about',
      Root: {
        screens: {
          Dashboard: {
            screens: {
              DashboardScreen: 'dashboard',
            },
          },
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
          ThoughtDiary: {
            screens: {
              ThoughtDiaryScreen: 'thought-diary',
            },
          },
        },
      },
    },
  },
};

export default linking;
