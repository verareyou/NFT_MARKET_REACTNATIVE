import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, FocusedStatusBar, HomeHeader } from "../components";

const Home = () => {
  const [data, setData] = useState(NFTData);

  const handleSearch = text => {
    const filteredData = NFTData.filter(item => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setData(filteredData);
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1, marginTop: 30 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NFTCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 300,
              backgroundColor: COLORS.primary,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
