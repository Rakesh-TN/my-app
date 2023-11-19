import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

export default function Main() {
  return (
    <View style={style.mainContainer}>
        <Text style={style.mainHeadText}>Welcome to Little Lemon</Text>
        <ScrollView>
        <Text style={style.mainText}>Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!</Text>
        </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#aacc00',
  },
  mainHeadText:{
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
    color: '#ffc300'
  },
  mainText:{
    padding:10,
    textAlign: 'justify'
  }
})
