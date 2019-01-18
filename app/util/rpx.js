"use strict";
import { Dimensions } from "react-native";

const deviceH = Dimensions.get("window").height;
const deviceW = Dimensions.get("window").width;

const basepx = 375;

export default function rpx(px) {
  return (px * deviceW) / basepx;
}
