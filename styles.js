import { StyleSheet } from "react-native";

const ThemeA = {
  background: "#rgb(51,204,177)",
  primary: "rgb(26,230,121)",
  secondary: "rgb(13,202,242)",
  tertiary: "rgb(255,179,0)",
  contrast: "black",
}

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  box:{
    borderColor: theme.contrast,
    borderWidth: 2,
  },
  primary: {
    backgroundColor: theme.primary,
  },
  secondary: {
    backgroundColor: theme.secondary,
  },
  tertiary: {
    backgroundColor: theme.tertiary,
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default {...styles(ThemeA), StatusBar: "dark"};