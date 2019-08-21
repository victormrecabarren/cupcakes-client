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

              

          </NativeRouter>

          : null

    )
  }
}



export default App
