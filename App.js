import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native'

const App = () => { //Fungsional Component
  return (
    <ScrollView>
      <MyName></MyName>
      <YourName> </YourName>     
    </ScrollView>
  )
}

const MyName = () => { //Fungsional Component
  const name='Hanna Rabitha';

  return (
    <View style={{
      marginBottom:50,
      backgroundColor:'black'
    }}>
    <Text style={{
      fontSize:30,
      color:'white'}
      }>Hello, my name is {name} </Text>
    <Image source={{uri:'http://placeimg.com/200/200/tech'}}
    style={{width:200, height:200}}></Image>
    </View>
  );
}


class YourName extends Component { //Class Component
  render() {
    return (
      <View>
      <Text style={{
      textAlign:"center",
      fontSize:30,
      color:'brown'}}>Your Name?</Text>
      <TextInput defaultValue='Your Name?'
      style={{borderWidth:1, height:50}}></TextInput>
    </View>
    );
  }
}



export default App
