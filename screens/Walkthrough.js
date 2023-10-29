import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PageContainer from "../components/PageContainer";
import { SIZES, images, FONTS } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const Walkthrough = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
        <View style={styles.wrapper}>
          <Image
            source={images.illustration}
            style={styles.img}
            resizeMode="contain"
          />
          <Text
            style={[
              { ...(SIZES.width <= 360 ? { ...FONTS.h2 } : { ...FONTS.h1 }) },
              styles.text,
            ]}
          >
            Terhubung dengan teman dan keluarga
          </Text>
          <View style={styles.btnWrapper}>
            <Text style={[styles.term, { ...FONTS.body }]}>
              Terms and Privacy
            </Text>

            <Button
              title="Start Messaging"
              onPress={() => navigation.navigate("PhoneNumber")}
              style={styles.btnStart}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },

  img: {
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.8,
    marginVertical: 48,
  },

  btnWrapper: {
    width: "100%",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    marginHorizontal: SIZES.padding * 0.8,
  },

  term: {
    marginVertical: 12,
  },

  btnStart: {
    width: "100%",
    paddingVertical: 12,
    marginBottom: 48,
  },
});
