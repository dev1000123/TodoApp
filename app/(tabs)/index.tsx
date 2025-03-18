import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
import {homepageStyles} from "../../styles/styles"

const styles = homepageStyles
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>wtf bro</Text>
    </View> 
  );
}


