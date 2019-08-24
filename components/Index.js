import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native'

import {
  NativeRouter,
  Route,
  Link
} from 'react-router-native'

import { withNavigation } from 'react-navigation'

import Header from './Header'

import { baseURL } from '../constants.js'


class Index extends Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {backgroundColor: "rgba(255, 240, 231, 1)"},
    headerTitle: (
      <Image
        style={{paddingTop: 110, height: 40, width: 40}}
        source={{url: "https://ui-ex.com/images/cupcake-vector-icon-2.png"}}
       />
    ),
  }

  state = {
    cupcakes: '',
    selectedCupcake: '',
  }

  chooseCupcake = (cupcake) => {
    this.setState({
      selectedCupcake: cupcake,
    })
  }

  componentDidMount = () => {
    this.state.cupcakes
    ?
    null
    :
    fetch(baseURL + '/cupcakes')
    .then(res=>res.json())
    .then(cupcakes=>this.setState({
      cupcakes: cupcakes
    }))
    .catch(err=>console.log(err))

    console.log('fetched')
  }


  render(){
    return(

      this.state.cupcakes ?

      <ImageBackground
        source={{url: "https://wallpaperplay.com/walls/full/3/b/0/233799.jpg"}}
        style={{flex: 1, width:'100%', height:'100%'}}>
        <ScrollView
          style={styles.body}
          contentContainerStyle={{paddingBottom: 0, backgroundColor: "transparent"}}
          >
          <View style={styles.indexPage}>
            {
              this.state.cupcakes.map((cupcake, i)=>{return (



                  <TouchableOpacity
                    onPress={() => {
                      this.chooseCupcake(cupcake)
                      this.props.navigation.navigate('Show', {
                        props: {
                          cupcake: cupcake,
                          baseURL: baseURL,
                          ok: "ok"
                        }
                      })
                    }}
                    key={i} style={styles.indexItem}>
                    <Image
                      style={styles.images}
                      source={{url: cupcake.image2}} />
                      <View
                        style={{display: "flex", flexDirection:"row", justifyContent:"space-between"}}
                        >
                        <Text
                          style={{
                            color: "rgba(100,41,37,1)",
                            fontSize: 30,
                            width: 200,
                            fontFamily: "Didot",
                          }}
                          >
                          {cupcake.name} Cupcakes
                        </Text>
                        <Text
                          style={{
                            color: "rgba(256, 92, 101, 1)",
                            fontSize: 20,
                            fontFamily: "Didot-Bold",
                            fontWeight: "bold"
                          }}
                          >
                          {cupcake.mini_price}
                        </Text>
                      </View>
                  </TouchableOpacity>

            )})
          }
          </View>
        </ScrollView>
      </ImageBackground>
      :
      null
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#00000000",
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
