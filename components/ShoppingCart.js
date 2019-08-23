import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native'

class ShoppingCart extends Component {
  render(){
    return(
      <View style={styles.cartBody}>
        <Text
          style={{fontSize: 40, textAlign: "center", paddingBottom: 50, color: "brown"}}
          >Your cart</Text>
          <ScrollView
            style={{display: "flex", flexDirection: "column"}}
            >
            {
              this.props.cartItems.length
              ?
              this.props.cartItems.map(item=>(
                 item.mini?
                  <View
                  key={item.id}
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
                      style={{fontSize: 20, color: "brown"}}
                      >
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 20, color: "brown", paddingBottom: 10}}
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
                      {item.mini}
                    </Text>
                    <Text>
                      +
                    </Text>
                  </View>
                </View>
                : null

              ))
              :
              <Text>Add items to your cart to check out!</Text>
            }
          </ScrollView>
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
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cartItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default ShoppingCart
