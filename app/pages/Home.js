import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Search from "../components/Search";
import Swiper from "../components/Swiper";
export default class Home extends Component {
  render() {
    return (
      <View>
        <Search style={css.search} />
        {/* 分类列表 */}
        <View>
          <Text>hahah </Text>
        </View>
      </View>
    );
  }
}
const css = StyleSheet.create({});
