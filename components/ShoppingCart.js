import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

import Swipeout from 'react-native-swipeout'



class ShoppingCart extends Component {


  render(){

    return(
      <View style={styles.cartBody}>
        <Text
          style={{fontSize: 40, textAlign: "center", paddingBottom: 50, color: "brown"}}
          >Your cart</Text>
        <TouchableHighlight style={{height: 300}}>
          <ScrollView
            style={{
              display: "flex", flexDirection: "column",
            }}
            >
            {
              this.props.cartItems.length
              ?
              this.props.cartItems.map(item=>(
                 item.mini && item.big
                 ?
                 <View
                   key={item.id}
                   >
                 <Swipeout
                   left={[
                     {
                       text: 'Delete',
                       backgroundColor: 'red',
                       underlayColor: 'blue',
                       onPress: () => {
                         this.props.deleteCartItem(item)
                       }
                     }
                   ]}
                   autoClose={true}
                   backgroundColor='transparent'>
                  <View
                  style={styles.cartItem}>
                    <View>
                      <Image
                        style={{height: 130, width: 130}}
                        source={{url: item.image2}}
                       />
                    </View>

                    <View style={{display: "flex", flexDirection: "column", width: 150, paddingTop: 20}}>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 15}}
                        >
                        Mini
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown"}}
                        >
                        {item.name}
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown", paddingBottom: 10}}
                        >
                        Cupcakes
                      </Text>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 16, fontStyle:"italic"}}
                        >
                        {item.mini_price}
                      </Text>
                    </View>


                    <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around", paddingTop: 30, paddingBottom: 30}}>
                        <Text>
                          -
                        </Text>
                        <Text>
                          {item.mini}
                        </Text>
                        <Text>
                          +
                        </Text>
                    </View>
                  </View>
                </Swipeout>

                <Swipeout
                 left={[
                   {
                     text: 'Delete',
                     backgroundColor: 'red',
                     underlayColor: 'blue',
                     onPress: () => {
                       this.props.deleteCartItem(item)
                     }
                   }
                 ]}
                  autoClose={true}
                  backgroundColor='transparent'
                  key={item.id+100}
                  >
                  <View
                  style={styles.cartItem}>
                    <View>
                      <Image
                        style={{height: 130, width: 130}}
                        source={{url: item.image}}
                       />
                    </View>

                    <View style={{display: "flex", flexDirection: "column", width: 150, paddingTop: 20}}>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 15}}
                        >
                        Big
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown"}}
                        >
                        {item.name}
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown", paddingBottom: 10}}
                        >
                        Cupcakes
                      </Text>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 16, fontStyle:"italic"}}
                        >
                        {item.price}
                      </Text>
                    </View>

                    <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around", paddingTop: 30, paddingBottom: 30}}>
                      <Text>
                        -
                      </Text>
                      <Text>
                        {item.big}
                      </Text>
                      <Text>
                        +
                      </Text>
                    </View>
                  </View>
                </Swipeout>
              </View>
                  :
                  item.mini
                  ?
                  <Swipeout
                   left={[
                     {
                       text: 'Delete',
                       backgroundColor: 'red',
                       underlayColor: 'blue',
                       onPress: () => {
                         this.props.deleteCartItem(item)
                       }
                     }
                   ]}
                    autoClose={true}
                    backgroundColor='transparent'
                    key={item.id}
                    >
                  <View
                  style={styles.cartItem}>
                    <View>
                      <Image
                        style={{height: 130, width: 130}}
                        source={{url: item.image2}}
                       />
                    </View>

                    <View style={{display: "flex", flexDirection: "column", width: 150, paddingTop: 20}}>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 15}}
                        >
                        Mini
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown"}}
                        >
                        {item.name}
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown", paddingBottom: 10}}
                        >
                        Cupcakes
                      </Text>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 16, fontStyle:"italic"}}
                        >
                        {item.mini_price}
                      </Text>
                    </View>

                    <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around", paddingTop: 30, paddingBottom: 30}}>
                      <Text>
                        -
                      </Text>
                      <Text>
                        {item.mini}
                      </Text>
                      <Text>
                        +
                      </Text>
                    </View>
                  </View>
                </Swipeout>
                  :
                  <Swipeout
                   left={[
                     {
                       text: 'Delete',
                       backgroundColor: 'red',
                       underlayColor: 'blue',
                       onPress: () => {
                         this.props.deleteCartItem(item)
                       }
                     }
                   ]}
                    autoClose={true}
                    backgroundColor='transparent'
                    key={item.id}
                    >
                  <View
                  style={styles.cartItem}>
                    <View>
                      <Image
                        style={{height: 130, width: 130}}
                        source={{url: item.image}}
                       />
                    </View>

                    <View style={{display: "flex", flexDirection: "column", width: 150, paddingTop: 20}}>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 15}}
                        >
                        Big
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown"}}
                        >
                        {item.name}
                      </Text>
                      <Text
                        style={{fontSize: 17, color: "brown", paddingBottom: 10}}
                        >
                        Cupcakes
                      </Text>
                      <Text
                        style={{color: "#rgba(256, 92, 101, 1)", fontSize: 16, fontStyle:"italic"}}
                        >
                        {item.price}
                      </Text>
                    </View>

                    <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around", paddingTop: 30, paddingBottom: 30}}>
                      <Text>
                        -
                      </Text>
                      <Text>
                        {item.big}
                      </Text>
                      <Text>
                        +
                      </Text>
                    </View>
                  </View>
                </Swipeout>


              ))
              :
              <Text>Add items to your cart to check out!</Text>
            }
          </ScrollView>
        </TouchableHighlight>
          <View style={{borderBottomWidth:1, borderBottomColor: "rgba(200, 200, 200, 0.5)", paddingTop: 10, marginBottom: 10}}></View>
          <View
            style={styles.totalsInfo}>
            <Text
              style={styles.totalsText}
              >cart</Text>
            <Text
              style={styles.totalsText}
              >$total</Text>
          </View>
          <View
            style={styles.totalsInfo}>
            <Text
              style={styles.totalsText}
              >shipping</Text>
            <Text
              style={styles.totalsText}
              >$total</Text>
          </View>
          <View style={styles.totalsInfo}>
            <Text
              style={{fontSize: 22, fontWeight: "bold"}}
              >total</Text>
            <Text
              style={{fontSize: 22, fontWeight: "bold", fontStyle: "italic"}}
              >$total</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 70,
              width: "100%",
              marginTop: 30,
              borderRadius: 50,
              backgroundColor: "rgba(230, 98, 84, 1)",
              }} >
            <Text
              style={{
                textAlign:"center",
                padding: 20,
                color: "white",
                fontSize: 25
              }}
              >Buy now</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cartBody: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cartItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  totalsInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  totalsText: {
    fontSize: 18
  },
  bold: {
    color: "red"
  }
})

export default ShoppingCart
