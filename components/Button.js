import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const Button = ({ onPress, style, color, disabled, title }) => {
  const enabledBgColor = color || COLORS.primary;
  const disabledBgColor = COLORS.secondaryWhite;
  const bgColor = disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btn,
        backgroundColor: bgColor,
        ...style,
      }}
    >
      <Text
        style={[
          styles.title,
          { color: disabled ? COLORS.primary : COLORS.white },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding3,
    borderColor: COLORS.primary,
    borderRadius: SIZES.padding,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    ...FONTS.body2,
  },
});
