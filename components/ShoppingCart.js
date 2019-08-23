import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

class ShoppingCart extends Component {
  render(){
    return(
      <View style={styles.test}>
        {
          this.props.cartItems.length
          ?
          this.props.cartItems.map(item=>(
            <Text>{item.name}</Text>
          ))
          :
          <Text>Add items to your cart to check out!</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 50
  }
})

export default ShoppingCart
