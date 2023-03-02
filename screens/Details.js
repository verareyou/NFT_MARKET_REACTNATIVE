import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";

import { NFTData } from "../constants";

import { COLORS, FONTS, icons, SIZES, assets, SHADOWS } from "../constants";
import {
  CircleButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
  RectButton,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373, alignItems: "center" }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{
        width: "110%",
        height: "100%",
      }}
    />

    <CircleButton
      imgUrl={assets.left}
      left={15}
      handlePress={() => navigation.goBack()}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  // console.log(route);
  const { data } = route.params;
  // const data = NFTData[3];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.font} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        ListHeaderComponent={
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{
              padding: SIZES.font,
            }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.medium,
                    color: COLORS.primary,
                  }}
                >
                  current bids 
                  -{" "}
                  <Text
                   style={{
                    color:"green",
                    fontFamily: FONTS.semiBold,
                   }}
                  >{data.bids.length}</Text>
                </Text>
              )}
            </View>
          </React.Fragment>
        }
      />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
