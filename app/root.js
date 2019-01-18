/*
my first react native project
wrote by wine
2018/12/12
*/
"use strict";

import React, { Component } from "react";
import {
  View,
  Text,
  Easing,
  StyleSheet,
  Animated,
  YellowBox
} from "react-native";
import { createStackNavigator } from "react-navigation";

import IndexPage from "./pages/Home";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const MainStack = createStackNavigator(
  {
    Home: {
      screen: IndexPage
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none" //隐藏原生导航栏
  }
);
export default class Root extends Component {
  render() {
    return (
        <MainStack />
    );
  }
}
