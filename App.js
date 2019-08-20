// React Native variables
import React, {Fragment, Component} from 'react'
import { NativeRouter, Route, Link } from 'react-router-native'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

// 3rd party libraries
import SwipeUpDown from 'react-native-swipe-up-down';

// api url
import { baseURL } from './constants'

// components
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'



class App extends Component {
  state = {
    cupcakes: '',
    thing: false
  }

  componentDidMount = () => {
    fetch(baseURL + '/cupcakes')
    .then(res=>res.json())
    .then(cupcakes=>this.setState({
      cupcakes: cupcakes
    }))
    .catch(err=>console.log(err))
  }

  render() {
    return (

          this.state.cupcakes
          ?
            <NativeRouter>
            <View style={styles.header}>
              <Header />
            </View>

            <View style={styles.body}>
              <Body />
            </View>

            <SwipeUpDown
            itemMini={<Footer />} // Pass props component when collapsed
            itemFull={<ShoppingCart
                        item="an item"
             />} // Pass props component when show full
            onShowMini={() => console.log('mini')}
            onShowFull={() => console.log('full')}
            onMoveDown={() => console.log('down')}
            onMoveUp={() => console.log('up')}
            disablePressToShow={false} // Press item mini to show full
            style={{ backgroundColor: 'green' }} // style for swipe
            animation="easeInEaseOut"
            swipeHeight={120}
            />
          </NativeRouter>

          : null

    )
  }
}

const styles = StyleSheet.create({
  app: {
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    height: 50,
  },
  body: {
    flex: 6,
    backgroundColor: "blue",
    width: "100%",
    height: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    height: 50,
  }
})

export default App
