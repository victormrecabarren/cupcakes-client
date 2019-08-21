import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

class Header extends Component {
  render(){
    return(
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={styles.backButton}>back</Text>
        <Text style={{fontSize: 30, textAlign: "center", paddingTop: 40, color: "white"}}>
          Cupcake Shop!
        </Text>
        <Text style={styles.burger}>|||</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    textAlign: "left",
    paddingTop: 50,
    marginLeft: 20,
    color: "rgba(255, 120, 120, 1)",

  },
  burger: {
    textAlign: "right",
    paddingTop: 50,
    marginRight: 20,
    color: "rgba(255, 120, 120, 1)",
  }
})



export default Header
