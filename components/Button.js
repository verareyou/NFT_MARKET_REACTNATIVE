import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.medium,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ handlePress, minWidth, fontsize, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.semiBold,
          fontSize: fontsize,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
