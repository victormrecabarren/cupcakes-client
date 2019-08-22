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
      <View style={{flex: 1}}>
        <ScrollView
          stickyHeaderIndices={[0]}
          style={styles.body}
          contentContainerStyle={{paddingBottom: 60}}
          >
          <View style={styles.header}>
            <Header
              goToTop={this.goToTop}
             />
          </View>
          <View style={styles.indexPage}>
            {
              this.props.cupcakes.map((cupcake, i)=>{return (
                <Link
                  underlayColor="transparent"
                  to="/cupcake"
                  onPress={() => {
                    this.props.chooseCupcake(cupcake)
                  }}
                  key={i}
                  >
                  <View style={styles.indexItem}>
                    <Image
                      style={styles.images}
                      source={{url: cupcake.image}} />
                      <View>
                        <Text>
                          {cupcake.name} Cupcakes
                        </Text>
                      </View>
                  </View>
                </Link>
            )})
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
    flex: 1,
    paddingBottom: 50,
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
    width: 300,
    height: 120,
    marginTop: 30,
  },
  indexItem: {
    marginBottom: 30,
    fontSize: 50,
  }
})

export default Index
