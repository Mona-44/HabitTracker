import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";

export default function Signup() {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start your journey with HabitTrack</Text>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        {/* Full Name Input */}
        <View>
          {/* Lable Text */}
          <Text style={styles.label}>Full Name</Text>
          {/* Input Field - The Input Container */}
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

        {/* Email Input */}
        <View>
          {/* Lable Text */}
          <Text style={styles.label}>Email</Text>
          {/* Input Field - The Input Container */}
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

        {/* Password Input */}
        <View>
          {/* Lable Text */}
          <Text style={styles.label}>Password</Text>
          {/* Input Field - The Input Container */}
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
                secureTextEntry={true} // Changed
              />
            </View>
          </View>
        </View>

        {/* Confirm Password Input */}
        <View>
          {/* Lable Text */}
          <Text style={styles.label}>Confirm password</Text>
          {/* Input Field - The Input Container */}
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
                secureTextEntry={true} // Changed
              />
            </View>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Already have an accound?</Text>
        <Text style={styles.bottomLink}>Log in</Text>
      </View>
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
    gap: hp("2%"), // Changed
  },
  inputField: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    flexDirection: "row",
    gap: wp("2%"),
    alignItems: "center",
    paddingHorizontal: 16, // Changed
    paddingVertical: 8, // Changed
  },
  inputView: {
    flexGrow: 1,
  },
  inputIcon: {},
  input: {
    fontSize: 22, // Changed
  },
  label: {
    fontFamily: "Bold",
    fontSize: 20,
    marginBottom: hp("0.8%"),
  },
  btn: {
    backgroundColor: COLORS.bgColor, // Changed
    justifyContent: "center", // Changed
    alignItems: "center", // Changed
    padding: wp("3%"), // Changed
    borderRadius: 8, // Changed
    marginTop: hp("2%"), // Changed
  },
  btnText: {
    fontFamily: "Bold", // Changed
    fontSize: 22, // Changed
    color: "white", // Changed
    elevation: 1, // Changed
  },
  bottom: {
    flexDirection: "row", // Changed
    gap: 8, // Changed
  },
  bottomText: {
    fontFamily: "Medium", // Changed
    fontSize: 20, // Changed
  },
  bottomLink: {
    fontFamily: "Medium", // Changed
    fontSize: 20, // Changed
    color: COLORS.bgColor, // Changed
  },
});
