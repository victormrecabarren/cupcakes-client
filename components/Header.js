import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import { NativeRouter, Route, Link } from 'react-router-native'

class Header extends Component {
  render(){
    return(
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {
          this.props.onShow
          ?
          <TouchableHighlight

            >

          <Link
          to="/"
          underlayColor="white"
          >
            <Image
              style={styles.backButton}
              source={{url: 'https://cupcakeshop.s3.amazonaws.com/171489-512.png'}}
             />

          </Link>
        </TouchableHighlight>
          :
          <Text style={styles.backBlank}></Text>
      }

          <Image
            style={{paddingTop: 110, height: 40, width: 40}}
            source={{url: "https://ui-ex.com/images/cupcake-vector-icon-2.png"}}
           />

           <TouchableHighlight
             >
           <Link
           to="/"
           underlayColor="white"
           >
             <Image
               style={styles.burger}
               source={{url: 'https://cupcakeshop.s3.amazonaws.com/134216-512.png'}}
              />
           </Link>
         </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    height: 25,
    width: 25,
    resizeMode: "contain",
    paddingTop: 120,
    marginLeft: 20,
  },
  backBlank: {
    width: 25,
    textAlign: "left",
    paddingTop: 50,
    marginLeft: 20,
    color: "rgba(255, 120, 120, 1)",
  },
  burger: {
    flex: 1,
    height: 30,
    width: 30,
    resizeMode: "contain",
    paddingTop: 120,
    marginRight: 20,
  }
})



export default Header
