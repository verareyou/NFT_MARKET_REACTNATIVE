import { View, Text, Image } from "react-native";

import { EthPrice } from "./SubInfo";
import { SIZES, COLORS, FONTS } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
      }}
      key={bid.id}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View style={{
        flex: 1,
        marginHorizontal: SIZES.base,
        alignItems: "flex-start",
      }}>
        <Text
         style={{
            color: COLORS.primary,
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
         }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text style={{
            color: COLORS.secondary,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            marginTop: 3,
        }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
