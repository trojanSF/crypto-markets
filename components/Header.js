
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist'


import Ionicons from 'react-native-vector-icons/Ionicons';

import configureStore from '../configureStore'
import { createPersistor } from 'redux-persist'



//const store = configureStore()
//let persistor = createPersistor(store, {storage: AsyncStorage, whitelist: ['userInfo']})


class Header extends Component {

  componentDidMount() {
      //persistor.rehydrate();
      this.props.callbackParent();

    }

  render() {

    var gains = this.props.change;
    var colorGains = gains > 0 ? '#03C9A9' : '#D64541';


    //var colorGains = '#03C9A9';


    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>

          <View style={styles.containerTopLeft}>
          {(this.props.userInfo.view != 'home') &&
                <TouchableHighlight
                  onPress = {()=> {this.props.callbackHomeView()}}
                  >
                  <Ionicons name="ios-list-outline" size={32} color={colorGains}/>
                </TouchableHighlight>
    }
          </View>

          <View style={styles.containerTopCenter}>
          {(this.props.userInfo.view != 'search') ?
            <Text style={styles.textHeader}>{this.props.symbol}</Text>:<Text style={styles.textHeader}>search</Text>
          }
          </View>

          <View style={styles.containerTopRight}>

          { (this.props.userInfo.view == 'coin') &&
                <TouchableHighlight
                  onPress = {()=> {}}
                  >
                  <Ionicons name="ios-add-circle-outline" size={32} color={colorGains}/>
                </TouchableHighlight>
}
              { (this.props.userInfo.view == 'home') &&

                <TouchableHighlight
                  onPress = {()=> {this.props.callbackSearchView()}}
                  >
                  <Ionicons name="ios-search-outline" size={32} color={colorGains}/>
                </TouchableHighlight>
}
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerTop: {
    flexDirection: 'row',
    paddingTop:34,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {

  },
  containerTopLeft: {
    flex:3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10
  },
  containerTopCenter:{
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTopRight: {
    flex:3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 28,
    color: '#ffffff',
    //paddingTop: 15,
    fontFamily: 'HelveticaNeue-Thin'
  },
  textPrice: {
    textAlign: 'center',
    fontSize: 35,
    color: '#ffffff',
    paddingTop: 10,
    fontFamily: 'HelveticaNeue-Thin'
  },
  text: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    color: 'grey',
    fontFamily: 'HelveticaNeue-Thin'

  }
});





export default Header;
