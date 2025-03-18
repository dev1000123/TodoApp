import { Text, View, StyleSheet } from 'react-native';
import {aboutStyles} from "../../styles/styles"

const styles = aboutStyles
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
} 

