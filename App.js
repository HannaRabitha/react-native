import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View, } from 'react-native'

const App = () => { //Fungsional Component
  return (
    <View>
      <MyName></MyName>
      <YourName> </YourName>     
    </View>
  )
}


const MyName = () => { //Fungsional Component
  const name='Hanna Rabitha';

  return (
    <View style={styles.view}>
    <Text style={styles.text}>Hello, my name is {name} </Text>
    <Image source={{uri:'http://placeimg.com/200/200/tech'}}
    style={{width:200, height:200}}></Image>
    </View>
  );
}


class YourName extends Component { //Class Component
  render() {
    return (
      <View>
      <Text style={styles.text}>Your Name?</Text>
      <TextInput defaultValue='Your Name?'
      style={{borderWidth:1, height:50}}></TextInput>
    </View>
    );
  }
}



export default App

const styles = StyleSheet.create({

  text: {
    fontSize:30,
    color:'red'
  },

  view: {
    marginBottom:50,
    backgroundColor:'grey'
  }



})
