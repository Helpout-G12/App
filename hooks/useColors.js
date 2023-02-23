import { useColorScheme } from 'react-native'
import { LightTheme } from '../constants/Colours'

export const useColors = () => {
    // const colorScheme = useColorScheme()
    // const colors = colorScheme === 'dark' ? DarkTheme : LightTheme
    const colors = LightTheme // TODO: Add dark theme
    return colors
}