import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start your journey with HabitTrack</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputField}>
            <Ionicons
              style={styles.inputIcon}
              name="person"
              size={24}
              color="gray"
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
              />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputField}>
            <Ionicons
              style={styles.inputIcon}
              name="mail"
              size={24}
              color="gray"
            />
            <View style={styles.inputView}>
              <TextInput style={styles.input} placeholder="Enter your email" />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputField}>
            <Ionicons
              style={styles.inputIcon}
              name="lock-closed"
              size={24}
              color="gray"
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
              />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputField}>
            <Ionicons
              style={styles.inputIcon}
              name="lock-closed"
              size={24}
              color="gray"
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: hp("2%"),
  },
  logo: {
    height: hp("15%"),
    width: hp("15%"),
  },
  header: {
    width: wp("80%"),
  },
  title: {
    fontFamily: "Bold",
    fontSize: 36,
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: 20,
    color: "gray",
  },
  form: {
    width: wp("80%"),
  },
  inputField: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    flexDirection: "row",
    gap: wp("2%"),
    alignItems: "center",
    padding: 8,
  },
  inputView: {
    flexGrow: 1,
  },
  inputIcon: {},
  input: {
    fontSize: 18,
  },
  label: {
    fontFamily: "Bold",
    fontSize: 20,
    marginBottom: hp("0.8%"),
  },
  bottom: {},
});
