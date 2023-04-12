import * as React from "react";
import { Pressable } from "native-base";
import { useColors } from "../hooks/useColors";

/* If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinkingConfiguration from "./LinkingConfiguration";

// Screens
import NotFoundScreen from "../screens/NotFoundScreen";
import ModalScreen from "../screens/ModalScreen";
import About from "../screens/AboutScreen";
import Profile from "../screens/ProfileScreen";
import Login from "../screens/LoginScreen";

import DashboardScreen from "../screens/DashboardScreen";
import MoodTrackerScreen from "../screens/MoodTrackerScreen";
import JournalScreen from "../screens/PromptedJournalScreen";
import ThoughtDiaryScreen from "../screens/ThoughtDiaryNew";
import ThoughtScreen from "../screens/ThoughtScreen";
import ChatScreen from "../screens/ChatScreen";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faSmile } from "@fortawesome/free-regular-svg-icons/faSmile";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";

// Components

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        // When logging out, a pop animation feels intuitive
        // You can remove this if you want the default 'push' animation
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="ThoughtScreen" component={ThoughtScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colors = useColors();

  return (
    <BottomTab.Navigator
      initialRouteName="Journal"
      screenOptions={{
        headerTransparent: true,
        headerTitleStyle: { color: colors.text },
        tabBarInactiveTintColor: colors.primary,
        tabBarActiveTintColor: colors.text,
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} size={30} color={color} />
          ),
          title: "Dashboard",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable
              ml={3}
              onPress={() => navigation.navigate("Profile")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                size={25}
                color={colors.text}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              mr={3}
              onPress={() => navigation.navigate("About")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                size={25}
                color={colors.text}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="MoodTracker"
        component={MoodTrackerScreen}
        options={({ navigation }) => ({
          title: "Mood Tracker",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faSmile} size={30} color={color} />
          ),
          headerTitleAlign: "center",
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          title: "Journal",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCalendar} size={30} color={color} />
          ),
          headerTitleAlign: "center",
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="ThoughtDiary"
        component={ThoughtDiaryScreen}
        options={({ navigation }) => ({
          title: "Thought Diary",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBrain} size={30} color={color} />
          ), // TODO: Change icon
          headerShown: false
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation }) => ({
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faComment} size={30} color={color} />
          ),
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation }) => ({
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faComment} size={30} color={color} />
          ),
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
}
