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
    <View style={{marginBottom:50, backgroundColor:'grey'}}>
    <Text style={{fontSize:50}}>Hello, my name is {name} </Text>
    <Image source={{uri:'http://placeimg.com/200/200/tech'}}
    style={{width:200, height:200}}></Image>
    </View>
  );
}


class YourName extends Component { //Class Component
  render() {
    return (
      <View>
      <Text style={{fontSize:30}}>Your Name?</Text>
      <TextInput defaultValue='Your Name?'
      style={{borderWidth:1, height:50}}></TextInput>
    </View>
    );
  }
}



export default App

const styles = StyleSheet.create({})
