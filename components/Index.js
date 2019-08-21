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

import {
  NativeRouter,
  Route,
  Link
} from 'react-router-native'

import Header from './Header'

class Index extends Component {
  render(){
    return(
      <View>
        <ScrollView
          stickyHeaderIndices={[0]}
          style={styles.body}>
          <View style={styles.header}>
            <Header
             />
          </View>
          <View style={styles.indexPage}>
            {
              this.props.cupcakes.map(cupcake=>(
                <Link
                  underlayColor="transparent"
                  to="/cupcake"
                  onPress={() => {
                    this.props.chooseCupcake(cupcake)
                  }}
                  >
                  <Image
                    style={styles.images}
                    source={{url: cupcake.image}} />
                </Link>
            ))
          }
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  header: {
    height: 85,
    backgroundColor: "rgba(255, 240, 231, 1)"
  },
  indexPage: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  images: {
    width: 160,
    height: 160,
    marginBottom: 30
  }
})

export default Index
