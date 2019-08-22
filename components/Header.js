import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native'

import { NativeRouter, Route, Link } from 'react-router-native'

class Header extends Component {
  render(){
    return(
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {
          this.props.onShow
          ?
          <Link
          to="/"
          underlayColor="transparent"
          >
            <Text style={styles.backButton}>back</Text>
          </Link>
          :
          <Text style={styles.backButton}></Text>
      }

          <Image
            style={{paddingTop: 110, height: 40, width: 40}}
            source={{url: "https://ui-ex.com/images/cupcake-vector-icon-2.png"}}
           />

        <Text style={styles.burger}>|||</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    width: 50,
    textAlign: "left",
    paddingTop: 50,
    marginLeft: 20,
    color: "rgba(255, 120, 120, 1)",

  },
  burger: {
    width: 50,
    textAlign: "right",
    paddingTop: 50,
    marginRight: 20,
    color: "rgba(255, 120, 120, 1)",
  }
})



export default Header
