import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native'
// 3rd party libraries
import SwipeUpDown from 'react-native-swipe-up-down';

import Header from './Header'
import Footer from './Footer'
import ShoppingCart from './ShoppingCart'

class Show extends Component {
  state = {

  }

  componentDidMount() {
    this.state.cartItems
    ?
    null
    :
    fetch(this.props.baseURL + '/cart_items')
    .then(res=>res.json())
    .then(cart => this.setState({
      cartItems: cart
    }))
  }

  addToCart = (cupcake, amount, mode) => {

    let exists = this.state.cartItems.find((item) => {
        return cupcake.id === item.cupcake_id
    })

    if (exists) {
      console.log('already exists')
      this.updateCartItem(cupcake, amount, mode)
    } else {
      cupcake[mode] = amount
      cupcake.cupcake_id = cupcake.id

      fetch(this.props.baseURL + '/cart_items', {
        method: 'POST',
        body: JSON.stringify(
          {
            cart_item: cupcake
          }
        ),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(newCartItem => {
        updatedCart = [...this.state.cartItems, newCartItem]
        this.setState({
          cartItems: updatedCart
        })
      })
      .catch(err=>console.log(err))
    }
  }

  updateCartItem = (cupcake, amount, mode) => {
      mycake = this.state.cartItems.find((item)=>{
      return cupcake.id === item.cupcake_id
    })
      mycake[mode] = mycake[mode]+amount

      fetch(this.props.baseURL + '/cart_items/' + mycake.id, {
        method: 'PUT',
        body: JSON.stringify(
          {
            cart_item: mycake
          }
        ),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(updatedCart => this.setState({
        cartItems: updatedCart
      }))
      .catch(err=>console.log(err))
  }

  render(){

    return(
      <View style={styles.show}>
      <Header
        onShow="true"
       />
       <Text style={styles.title}>
         {this.props.cupcake.name}
       </Text>
       <Text style={styles.type}>
         Cupcakes
       </Text>

      <Image
        style={styles.image}
        source={{url: this.props.cupcake.image}}
      />

      <View style={styles.descriptionContainer}>
        <View style={styles.infoContainer}>
          <View
            style={styles.infoData}>
            <Text
              style={styles.infoHeader}
              >cal</Text>
            <Text
              style={styles.infoValue}
              >{this.props.cupcake.calories}</Text>
          </View>
          <View
            style={styles.infoData}>
            <Text
              style={styles.infoHeader}
              >carbs</Text>
            <Text
              style={styles.infoValue}
              >{this.props.cupcake.carbs}</Text>
          </View>
        </View>

        <View style={styles.descriptionBox}>
          <Text>{this.props.cupcake.description}</Text>
        </View>
      </View>




      <SwipeUpDown
      itemMini={<Footer
                  addToCart={this.addToCart}
                  cupcake={this.props.cupcake}
      />}
      itemFull={<ShoppingCart
                  cupcake={this.props.cupcake}
       />}
      onShowMini={() => console.log('mini')}
      onShowFull={() => console.log('full')}
      onMoveDown={() => console.log('down')}
      onMoveUp={() => console.log(this.props.cupcake)}
      disablePressToShow={true}
      style={styles.cart}
      animation="easeInEaseOut"
      swipeHeight={130}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  descriptionBox: {
    color: "brown",
    fontSize: 50,
    flex: 1,
    marginRight: 30,
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginLeft: 30,
  },
  infoData: {
    display: "flex",
    flexDirection: "column",
  },
  infoHeader: {
    fontSize: 20,
    color: "pink",
    textAlign: "center",
  },
  infoValue: {
    fontSize: 40,
    color: "brown",
    textAlign: "center",
  },
  image: {
    height: 300,
    width: 400,
  },
  title: {
    marginTop: 30,
    fontSize: 40,
    textAlign: "center"
  },
  type: {
    textAlign: "center",
    fontSize: 25
  },
  show: {
    backgroundColor: "white",
    height: "100%"
  },
  cart: {
    backgroundColor: "#FFF0E9",
  }
})

export default Show
