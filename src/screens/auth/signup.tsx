import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup() {
  const onSubmit = (data: SignupType) => {
    console.log(data);
  };

  const signupSchema = z
    .object({
      fullName: z.string().min(4, "Full name must be at least 4 characters."),
      email: z.email("Please enter a valid email"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must have at least one uppercase letter")
        .regex(/[a-z]/, "Password must have at least one lowercase letter")
        .regex(/[0-9]/, "Password must have at least one number")
        .regex(
          /[^a-zA-Z0-9]/,
          "Password must have at least one special character",
        ),
      passwordConfirmation: z.string().min(8, "Both passwords must be equal"),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Password must match",
      path: ["passwordConfirmation"],
    });
  type SignupType = z.infer<typeof signupSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<SignupType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(signupSchema),
  });

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
        {/* <Text style={styles.subtitle}>Welcome {name}</Text> */}
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
              <Controller
                control={control}
                name="fullName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>
          {touchedFields.fullName && errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName?.message}</Text>
          )}
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
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>

          {touchedFields.email && errors.email && (
            <Text style={styles.errorText}>{errors.email?.message}</Text>
          )}
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
              <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your pasword"
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>

          {touchedFields.password && errors.password && (
            <Text style={styles.errorText}>{errors.password?.message}</Text>
          )}
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
              <Controller
                control={control}
                name="passwordConfirmation"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>

          {touchedFields.passwordConfirmation &&
            errors.passwordConfirmation && (
              <Text style={styles.errorText}>
                {errors.passwordConfirmation?.message}
              </Text>
            )}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Already have an account?</Text>
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
    fontSize: 32, // changed
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: 18, // changed
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
    paddingHorizontal: wp("3%"), // Changed again
    minHeight: hp("6.5%"), // Changed again
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
    fontSize: 18,
    marginBottom: hp("0.8%"),
  },
  btn: {
    backgroundColor: COLORS.bgColor, // Changed
    justifyContent: "center", // Changed
    alignItems: "center", // Changed
    paddingVertical: wp("3%"), // Changed again
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
    gap: 8, // Changed again
  },
  bottomText: {
    fontFamily: "Medium", // Changed
    fontSize: 16, // Changed again
  },
  bottomLink: {
    fontFamily: "Medium", // Changed
    fontSize: 16, // Changed
    color: COLORS.bgColor, // Changed
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
