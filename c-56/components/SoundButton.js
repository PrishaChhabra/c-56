import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component{
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
          onPress={this.playSound}>
        <Text
          style={styles.text}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles= StyleSheet.create({
  button: {
          marginLeft: 100,
          marginTop:100,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
          backgroundColor: 'red',
          borderRadius: 100,
  },
  text : {
            fontWeight: 'bold',
            fontSize: 20,
  }

})

export default SoundButton;