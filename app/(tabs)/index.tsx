import { View, StyleSheet, Appearance } from "react-native";
import CircleLogo from "@/components/CircleLogo";

export default function home() {
  return (
    <View style={styles.container}>
      <CircleLogo size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  logoContainer: {},
});
