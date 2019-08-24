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
                  <Text
                    style={{color: "rgba(100,41,37,1)", paddingLeft: 5, fontStyle:"italic"}}
                    >mini / 1 dozen</Text>
                  :
                  <Text
                    style={{color: "rgba(100,41,37,1)", paddingLeft: 5, fontStyle:"italic"}}
                    >big / 1 dozen</Text>
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
                <Text style={this.state.mode=="mini"
                  ?
                  {textAlign: "center", color:"rgba(256, 92, 101, 1)", paddingTop:8,fontFamily: "Didot"}
                  :
                  {textAlign:"center",paddingTop:8, fontFamily: "Didot",color: "rgba(100,41,37,1)"}}
                  >mini</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomButton}
                onPress={() => {
                  this.setState({mode:"big"})
                }}
                >
                <Text style={
                  this.state.mode=="big"
                  ?
                  {textAlign: "center", color:"rgba(256, 92, 101, 1)", paddingTop:5,
                  fontFamily: "Didot",
                  }
                  :
                  {textAlign:"center",
                  paddingTop:5,
                  fontFamily: "Didot",
                  color: "rgba(100,41,37,1)"}}>

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
                      style={{textAlign: "center", fontSize: 20, fontWeight:"100"}}
                      >–</Text>
                  </TouchableOpacity>
                </View>

              <Text style={{
                textAlign: "center",
                backgroundColor: "white",
                color:"rgba(256, 92, 101, 1)",
                fontFamily: "Didot"
              }}>
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
                    style={{textAlign: "center", fontSize: 20, fontWeight: "100"}}
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
    width: 100,
    marginLeft: "4%",
    paddingTop: 10,
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
    width: "55%",
    marginRight: 10,
  },
  topButton: {
    height: "50%",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "white",
    borderBottomColor: "rgba(180, 180, 180, 0.5)",
    borderBottomWidth: 1,
  },
  bottomButton: {
    height: "50%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    backgroundColor: "white",
  },
  subtractButton: {
    height: "35%",
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90,
    backgroundColor: "white",
  },
  addButton: {
    height: "35%",
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    backgroundColor: "white",
  },
  add: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: "5%",
    backgroundColor: "#ef7c66"
  },
  price: {
    color: "rgba(100,41,37,1)",
    fontSize: 30,
    fontStyle: "italic"
  }
})

export default Footer
