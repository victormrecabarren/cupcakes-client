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

class MiniCartItem extends Component {
  render() {
    return(

      <View
      key={this.props.item.id}
      style={styles.cartItem}>
      <View>
        <Image
          style={{height: 130, width: 130}}
          source={{url: this.props.item.image2}}
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
          {this.props.item.name}
        </Text>
        <Text
          style={{fontSize: 20, color: "brown", paddingBottom: 10}}
          >
          Cupcakes
        </Text>
        <Text
          style={{color: "#rgba(256, 92, 101, 1)", fontSize: 16, fontStyle:"italic"}}
          >
          {this.props.item.price}
        </Text>
      </View>

      <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around", paddingTop: 30, paddingBottom: 30}}>
        <Text>
          -
        </Text>
        <Text>
          {this.props.item.mini}
        </Text>
        <Text>
          +
        </Text>
      </View>
    </View>

    )
  }
}

const styles = StyleSheet.create({
  cartItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default MiniCartItem
