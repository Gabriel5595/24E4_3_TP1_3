import { Text, View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [textColor, setTextColor] = useState('Black');

  return (
    <View style={styles.container}>
      <Text style={[styles.paragraph, {color: textColor}]}>"Este é o meu texto"</Text>

      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Mostrar em verde"
              onPress={() => setTextColor('green')}/>
          </View>

          <View style={styles.button}>
            <Button
              title="Mostrar em azul"
              onPress={() => setTextColor('blue')}/>
          </View>

          <View style={styles.button}>
            <Button
              title="Mostrar em vermelho"
              onPress={() => setTextColor('red')}/>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  button: {
    margin: 5
  }
});
