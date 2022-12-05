import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

/* If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// Screens
import NotFoundScreen from '../screens/NotFoundScreen';
import ModalScreen from '../screens/ModalScreen';
import About from '../screens/AboutScreen';
import Profile from '../screens/ProfileScreen';

import DashboardScreen from '../screens/DashboardScreen';
import MoodTrackerScreen from '../screens/MoodTrackerScreen';
import JournalScreen from '../screens/JournalScreen';

// Components

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ route, navigation }: RootTabScreenProps<'Dashboard'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          title: 'Dashboard',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </Pressable>
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('About')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="MoodTracker"
        component={MoodTrackerScreen}
        options={({ navigation }: RootTabScreenProps<'MoodTracker'>) => ({
          title: 'Mood Tracker',
          tabBarIcon: ({ color }) => <TabBarIcon name="smile-o" color={color} />,
          headerTitleAlign: 'center',
          headerTransparent: true,
        })}
      />
      <BottomTab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          title: 'Journal',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
