import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageTitle from "../components/PageTitle";
import { FONTS, COLORS, SIZES } from "../constants";
import images from "../constants/images.js";
import Button from "../components/Button";

const PhoneNumber = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  const goBack = () => {
    navigation.goBack();
  };

  const showModal = () => {
    setModalVisible(true);
  };

  // fetch country data
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`, // https://flagsapi.com/${item.alpha2Code}/flat/64.png
          };
        });

        setAreas(areaData);
        if (areaData.length > 0) {
          let defaultData = areaData.filter((a) => a.code == "ID");

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  // render countries codes modal
  function renderAreasCodesModal() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: 10,
            flexDirection: "row",
          }}
          onPress={() => {
            setSelectedArea(item), setModalVisible(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
          />

          <Text style={{ ...FONTS.body3, color: COLORS.white }}>
            {item.item}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                color: "#fff",
                backgroundColor: "#342342",
                borderRadius: 12,
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                extraData={selectedArea}
                verticalScrollIndicator={false}
                contentLength={2000}
                style={{
                  padding: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
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

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TouchableOpacity style={styles.input} onPress={showModal}>
                <View style={{ justifyContent: "center" }}>
                  <Image source={images.down} style={styles.arrowDown} />
                </View>

                <View style={{ justifyContent: "center", marginLeft: 5 }}>
                  <Image
                    source={{ uri: selectedArea?.flag }}
                    style={styles.flag}
                    resizeMode="contain"
                  />
                </View>

                <View style={{ justifyContent: "center", marginLeft: 5 }}>
                  <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
                    {selectedArea?.callingCode}
                  </Text>
                </View>
              </TouchableOpacity>

              <TextInput
                style={styles.numInput}
                placeholder="Nomer Telepon"
                placeholderTextColor={COLORS.black}
                selectionColor={COLORS.black}
                keyboardType="numeric"
              />
            </View>

            <Button
              title={"Lanjutkan"}
              onPress={() => navigation.navigate("Verification")}
              styles={
                modalVisible
                  ? {
                      backgroundColor: COLORS.primary,
                      opacity: 0.5,
                    }
                  : {
                      backgroundColor: COLORS.primary,
                    }
              }
            />
          </View>
        </View>

        {renderAreasCodesModal()}
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

  inputContainer: {
    width: "100%",
    paddingHorizontal: 22,
    paddingVertical: 60,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 88,
  },

  input: {
    width: 100,
    height: 48,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: SIZES.padding,
    borderColor: COLORS.black,
    // borderWidth: 1,
    backgroundColor: COLORS.secondaryWhite,
    flexDirection: "row",
    fontSize: 12,
  },

  arrowDown: {
    width: 12,
    height: 12,
    tintColor: COLORS.black,
  },

  flag: {
    width: 30,
    height: 30,
  },

  numInput: {
    flex: 1,
    marginVertical: 10,
    borderColor: "#111",
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: SIZES.padding,
    paddingLeft: SIZES.padding,
    height: 48,
    fontSize: 14,
    color: "#111",
  },
});
