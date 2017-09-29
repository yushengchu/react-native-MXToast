/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';

// const toast = NativeModules.MXToastBridge;

import toast from '/Users/joker/Desktop/EXP/index.js';
/*
 NSString* message = params[@"msg"];
 NSString* type = params[@"type"];
 CGFloat padding = [params[@"padding"] floatValue];
 CGFloat duration = [params[@"duration"] floatValue];
 */
const params1 = {
    msg:"顶部50像素 3s",
    type:'top',
    padding:50,
    duration:3.0
};

const params2 = {
    msg:"顶部50像素 默认时间",
    type:'top',
    padding:50,
}

const params3 = {
    msg:"居中 3s",
    duration:3.0
}

const params4 = {
    msg:"居中 默认时间",
}

const params5 = {
    msg:"底部50像素 3s",
    type:'bottom',
    padding:50,
    duration:3.0
}

const params6= {
    msg:"底部50像素 默认时间",
    type:'bottom',
    padding:50,
}

export default class toastDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={this.showToastWithParams}>顶部50像素 3s</Text>
        <Text style={styles.instructions} onPress={() => this.showToast(params2)}>顶部50像素 默认时间</Text>
        <Text style={styles.instructions} onPress={() => this.showToast(params3)}>中间 3s</Text>
        <Text style={styles.instructions} onPress={() => this.showToast(params4)}>中间 默认时间</Text>
        <Text style={styles.instructions} onPress={() => this.showToast(params5)}>底部50像素 3s</Text>
        <Text style={styles.instructions} onPress={() => this.showToast(params6)}>底部50像素 默认时间</Text>
      </View>
    );
  }

  showToast = (params) =>{
      toast.showToast(params);
  }

  showToastWithParams = () =>{
    toast.showToast({
        msg:"顶部50像素 3s",
        type:'top',
        padding:50,
        duration:3.0
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('toastDemo', () => toastDemo);
