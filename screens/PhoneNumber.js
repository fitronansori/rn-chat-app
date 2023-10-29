import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageTitle from "../components/PageTitle";
import { FONTS, COLORS, SIZES } from "../constants";

const PhoneNumber = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle onPress={() => goBack()} title="Kembali" />
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={[styles.title, { ...FONTS.h2 }]}>
            Masukkan Nomer Telepon
          </Text>
          <Text style={[styles.info, { ...FONTS.body4 }]}>
            {`Silahkan Konfirmasi Kode Negara Anda \n dan Masukkan Nomer Telepon Anda`}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    color: COLORS.black,
    marginTop: 80,
  },

  info: {
    textAlign: "center",
    color: COLORS.black,
    marginVertical: 16,
  },
});
