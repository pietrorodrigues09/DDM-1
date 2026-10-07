import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
     <View style={styles.scflex}>
      <ScrollView style={styles.container}>

      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder='teste'> </TextInput>
      <Button onPress='' title='botão'></Button>  
      
      </ScrollView>   

    </View>

  );
}

const styles = StyleSheet.create({
  scflex: {
    flex:1,
    b
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
