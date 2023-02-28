import { Text, View, TextInput, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              bottom: -3,
              right: -3,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
          }}
        >
          Hello Victoria 👋
        </Text>

        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find masterpiece Art{" "}
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.base,
            paddingVertical: SIZES.base / 2,
            borderRadius: SIZES.base,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search NFTs"
            placeholderTextColor={COLORS.white}
            style={{
              flex: 1,
              color: COLORS.white,
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
