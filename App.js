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
import Index from './components/Index'
import Show from './components/Show'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'



class App extends Component {
  state = {
    cupcakes: '',
    selectedCupcake: ''
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

              <Route
                exact path="/"
                render={(routeProps) => (
                  <Index
                  {...routeProps}
                  cupcakes={this.state.cupcakes}
                  />
                )}
              />

              <Route
                path="/cupcake"
                render={(routeProps) => (
                  <Show
                  {...routeProps}
                  cupcake={this.state.selectedCupcake}
                  />
                )}
              />

              <SwipeUpDown
              itemMini={<Footer />}
              itemFull={<ShoppingCart
                          item="an item"
               />}
              onShowMini={() => console.log('mini')}
              onShowFull={() => console.log(this.state.cupcakes)}
              onMoveDown={() => console.log('down')}
              onMoveUp={() => console.log('up')}
              disablePressToShow={true}
              style={{ backgroundColor: 'green' }} // style for swipe
              animation="easeInEaseOut"
              swipeHeight={120}
              />

          </NativeRouter>

          : null

    )
  }
}



export default App
