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
        <Text>FooterComp</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    height: "100%",
  }
})

export default Footer
