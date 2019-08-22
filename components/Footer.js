import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

class Footer extends Component {
  render(){
    return(
      <View style={styles.footer}>
        <View
          style={styles.priceBox}
          >
            <Text>{this.props.cupcake.mini_price}</Text>
          </View>
        <View
          style={styles.console}
          >

          </View>
        <View
          style={styles.add}
          >

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "#FFF0E9",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",

  },
  priceBox: {
    height: 70,
    width: 120,
    borderColor: "red",
    borderWidth: 1,
    marginLeft: "8%",
  },
  console: {
    height: 70,
    width: 100,
    borderColor: "red",
    borderWidth: 1,
  },
  add: {
    height: 70,
    width: 50,
    borderRadius: 100,
    borderColor: "red",
    borderWidth: 1,
  },
})

export default Footer
