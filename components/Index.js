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
                      source={{url: cupcake.image}} />
                      <View>
                        <Text>
                          {cupcake.name} Cupcakes
                        </Text>
                      </View>
                  </TouchableOpacity>

            )})
          }
          </View>
        </ScrollView>
      </View>
      :
      null
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
