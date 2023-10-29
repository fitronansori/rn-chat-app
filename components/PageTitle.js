import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS } from "../constants";

const PageTitle = ({ onPress, title }) => {
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity onPress={onPress} style={styles.titleWrapper}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={SIZES.padding * 3}
          color={COLORS.black}
        />
        {title && (
          <Text style={{ ...FONTS.h4, color: COLORS.black }}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 22,
    marginVertical: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrapper: {
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
