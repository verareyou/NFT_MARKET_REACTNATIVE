import { View, Text } from "react-native";
import React, { useState } from "react";

import { COLORS, FONTS, icons, SIZES, assets, SHADOWS } from "../constants";
import { EthPrice, NFTTitle } from "./SubInfo";

const DetailsDesc = ({ data }) => {
  const [isShow, setIsShow] = useState(false);
  const [desc, setDesc] = useState(data.description.slice(0, 110));
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              color: COLORS.secondary,
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              lineHeight: SIZES.large,
            }}
          >
            {desc}
            {!isShow && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
              }}
              onPress={() => {
                if (isShow) {
                  setDesc(data.description.slice(0, 110));
                } else {
                  setDesc(data.description);
                }
                setIsShow(!isShow);
              }}
            >
              {isShow ? " Show Less" : "Show More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
