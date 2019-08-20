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
        <Text>{this.props.item}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    width: "100%",
    backgroundColor: "yellow"
  }
})

export default ShoppingCart
