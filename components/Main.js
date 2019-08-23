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




// api url
import { baseURL } from '../constants.js'

// components
import Index from './Index'
import Show from './Show'




class Main extends Component {
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

  render() {
    return (

          this.state.cupcakes
          ?
            <NativeRouter>

              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <Index
                  {...routeProps}
                  cupcakes={this.state.cupcakes}
                  chooseCupcake={this.chooseCupcake}
                  />
                )}
              />

              <Route
                path="/cupcake"
                render={(routeProps) => (
                  <Show
                  {...routeProps}
                  cupcake={this.state.selectedCupcake}
                  baseURL={baseURL}
                  />
                )}
              />

          </NativeRouter>

          : null

    )
  }
}



export default Main
