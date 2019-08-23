import React, {Fragment, Component} from 'react'

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Index from './components/Index'
import Show from './components/Show'

const MainNavigator = createStackNavigator({
  Home: Index,
  Show: Show
},{
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(MainNavigator)

export default class App extends Component {

  render() {
    return <AppContainer />
  }
}
