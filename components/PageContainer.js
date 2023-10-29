import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { COLORS } from "../constants";

const PageContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      Platform={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default PageContainer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.white,
  },
});
