import React from 'react'
import { StyleSheet , View , Text } from 'react-native'

export default function HeaderLittle() {
  return (
    <View style={styles.headercontainer}>
        <Text style={styles.textHead}>Little Lemon Restaurant</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headercontainer:{
        backgroundColor: '#ffd60a',
    }, 
    textHead: {
        padding: 25,
        color:'#000000',
        fontSize:30,
        textAlign:'center'
    }
  });
  
 