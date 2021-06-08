import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
return(
  <View style={styles.container_style}>
    <Text style={styles.text_style}> Quiz Buzzer App </Text> 
  </View>
);
  }
}

  const styles= StyleSheet.create({
   container_style : {backgroundColor:'lightblue',
   height:50,
   marginTop:10},
   text_style:{
    color: 'purple',
    textAlign: 'center',
    fontSize: 30,
    fontWeight : 'bold',
    marginTop:5
   }
  
})

 export default AppHeader 
