import { Stack } from "expo-router";
import {Text, View,StyleSheet} from 'react-native'

export default function RootLayout() {
  return (
  <Stack >
    <Stack.Screen name="index" options={{header:()=>null,}} />
  </Stack>);
}

