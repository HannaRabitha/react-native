import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView } from 'react-native'

const App = () => {
  return (
    <ScrollView>
      <Items/>
      <Items/>
      <Items/>
    </ScrollView>
  )
}

const Items = () => {
  return (
    <View style={styles.square
    //   {
    //   backgroundColor: '#E6E6E6',
    //   width: 227,
    //   height:269,
    //   marginTop: 48,
    //   alignSelf: 'center',
    //   padding:12,
    //   borderRadius: 10
    // }
    }>

      <Image source={{uri:'http://placeimg.com/200/100/tech'}}
      style={{width:200, height:100}}>
      </Image>
      <Text style={styles.productName
      //   {
      //   fontWeight:'bold',
      //   fontSize:20,
      //   marginTop:12
      // }
      }>
        Product Name
      </Text>
      <Text style={{
        fontSize:20,
        color:'#E87918',
        paddingVertical:18
      }}>
        $ 00.00
      </Text>
      <Button
        color='#E87918'
        title="Buy"
        onPress={() => Alert.alert('Bayar Sekarang')}
      />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  square : {
    backgroundColor: '#E6E6E6',
      width: 227,
      height:269,
      marginTop: 30,
      alignSelf: 'center',
      padding:12,
      borderRadius: 10
  },
  productName: {
    fontWeight:'bold',
    fontSize:20,
    marginTop:12
  }
})
