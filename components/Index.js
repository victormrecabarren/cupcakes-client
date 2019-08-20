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

import Header from './Header'

class Index extends Component {
  render(){
    return(
      <ScrollView
        maximumZoomScale={5}
        >
        <View style={styles.body}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.indexPage}>
            {
              this.props.cupcakes.map(cupcake=>(
              <Image
                style={{width: 200, height: 200}}
                source={{url: cupcake.image2}} />
            ))
          }
          </View>
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "rgba(255, 240, 231, 1)",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  header: {
    flex: 1,
    backgroundColor: "transparent"
  },
  indexPage: {
    flex: 7,
    backgroundColor: "pink"
  }
})

export default Index
