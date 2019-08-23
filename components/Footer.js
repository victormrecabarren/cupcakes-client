import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

class Footer extends Component {
  state = {
    amount: 0,
    mode: "mini",
  }



  render(){
    return(
      <View style={styles.footer}>
        <View
          style={styles.priceBox}
          >
            <Text style={styles.price}
              >
                {
                  this.state.mode==="mini"
                  ?
                  this.props.cupcake.mini_price
                  :
                  this.props.cupcake.price
                }

              </Text>

                {
                  this.state.mode==="mini"
                  ?
                  <Text>mini / 1 dozen</Text>
                  :
                  <Text>big / 1 dozen</Text>
                }

          </View>
        <View
          style={styles.console}
          >
            <View
              style={styles.optionsButton}
              >
              <TouchableOpacity
                style={styles.topButton}
                onPress={() => {
                  this.setState({mode:"mini"})
                }}
                >
                <Text style={{    textAlign: "center"}}>mini</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomButton}
                onPress={() => {
                  this.setState({mode:"big"})
                }}
                >
                <Text style={{    textAlign: "center"}}>
                  big
                </Text>
              </TouchableOpacity>

            </View>

            <View
              style={styles.optionsButton}
              >
                <View style={styles.subtractButton}>
                  <TouchableOpacity
                    onPress={() => {
                      this.state.amount > 0
                      ?
                      this.setState({
                        amount: --this.state.amount
                      })
                      : null
                    }}
                     >
                    <Text
                      style={{textAlign: "center"}}
                      >-</Text>
                  </TouchableOpacity>
                </View>

              <Text style={{textAlign: "center"}}>
                {this.state.amount}
              </Text>
              <View style={styles.addButton}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      amount: ++this.state.amount
                    })
                  }}
                   >
                  <Text
                    style={{textAlign: "center"}}
                    >+</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        <TouchableOpacity
          onPress={() => {
            this.state.amount != 0
            ?
            this.props.addToCart(this.props.cupcake, this.state.amount, this.state.mode)
            : null
          }}
          style={styles.add}
          >
            <Image
              style={{height: 45, width: 45, marginTop: "15%", marginLeft: "17%"}}
              source={{url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/add-to-bag-1-615158.png"}}
             />
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "#FFF0E9",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceBox: {
    height: 70,
    width: 120,
    borderColor: "red",
    borderWidth: 1,
    marginLeft: "5%",
    display: "flex",
    flexDirection: "column",
  },
  console: {
    height: 70,
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  optionsButton: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "2%",
  },
  topButton: {
    height: "50%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    borderBottomColor: "rgba(180, 180, 180, 0.5)",
    borderBottomWidth: 1,
  },
  bottomButton: {
    height: "50%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "white",
  },
  subtractButton: {
    height: "35%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "white",
  },
  addButton: {
    height: "35%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "white",
  },
  add: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: "5%",
    backgroundColor: "#ef7c66"
  },
})

export default Footer
