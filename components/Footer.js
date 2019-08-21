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
    backgroundColor: "rgba(255, 200, 200, 1)",
    width: "100%",
    height: 50,
  }
})

export default Footer
