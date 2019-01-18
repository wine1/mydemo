import React, { Component } from "react";
import { View,Text, TextInput, StyleSheet, Image } from "react-native";
import rpx from "../util/rpx";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.cancel = this.cancel.bind(this)
  }
  // TextInput 中的文字改变触发handleChange函数
  handleChange(text) {
    this.setState({
      text: text
    });
    // this.props.callback(text);
  }
  cancel(text) {
    this.setState({
      text:''
    })
    // this.props.callback(text);
  }
  render() {
    return (
      <View style={css.wrap}>
        <View style={css.wrapSearch}>
          <View style={css.iconSearch}>
            <Image source={require("../images/search.png")} />
          </View>
          <View style={css.search}>
            <TextInput
              style={css.searchInput}
              underlineColorAndroid="transparent"
              placeholder="快来买买买啊"
              value={this.state.text}
              // 使文本垂直居中显示
              multiline={true}
              onChangeText={this.handleChange.bind(this)}
            />
          </View>

        </View>
        {this.state.text ? (
            <Text onPress={this.cancel} style={css.cancelText}>
              取消
            </Text>
          ) : null}
      </View>
    );
  }
}

const css = StyleSheet.create({
  wrap: {
    width: "100%",
    padding: rpx(10),
    flexDirection: "row",
    backgroundColor: "#ee4a22"
  },
  wrapSearch: {
    width: "75%",
    marginLeft: "8%",
    flexDirection: "row",
    borderRadius: rpx(50),
    backgroundColor: "#fff"
  },
  iconSearch: {
    width: "10%",
    paddingTop: rpx(1)
  },
  search: {
    width: "80%",
    paddingTop: rpx(8)
  },
  searchInput: {
    width: "100%",
    padding: 0,
    paddingLeft: rpx(20),
    fontSize: rpx(16)
  },
  cancelText:{
    flex:1,
    color: "#333",
    fontSize: rpx(16),
    marginTop:rpx(8),
    marginLeft:rpx(3)
  }
});
