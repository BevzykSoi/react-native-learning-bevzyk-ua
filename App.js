import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment/moment';

export default function App() {
  let newVariable = 0;
  const myCredentials = {
    name: "Bevzyk UA",
    age: 13,
  };

  const variablePlusOne = (variable) => {
    return variable + 1;
  };
  const greeting = ({name, age}) => {
    return `Hello, ${name}. You are ${age} years old!`
  };

  console.log(greeting(myCredentials));
  console.log(variablePlusOne(newVariable));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Today is {moment().format("MMMM Do YYYY")}
      </Text>
      <StatusBar style='auto' />
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
  text: {
    fontFamily: 'Roboto',
    fontSize: 38,
  }
});
