import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Search from "../components/Search";
import Swipers from "../components/Swiper";
export default class Home extends Component {
  render() {
    return (
      <View>
        <Search style={css.search} />
        <View>
          <Swipers />
        </View>
        {/* 分类列表 */}
        <View>
          <Text>hahaha</Text>
        </View>
      </View>
    );
  }
}
const css = StyleSheet.create({});
