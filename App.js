import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  let input = '';
  const saveUserInput = userInput => {
    input = userInput;
  };
  const [outputText, setOutputText] = useState('Input your name:')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <TextInput onChangeText={userInput => saveUserInput(userInput)} style={styles.TextInput}/>
      <Button title="Submit" onPress={() => setOutputText('Hello ' + input)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    // border: '1px solid #000'
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    width: 100
  }
});
