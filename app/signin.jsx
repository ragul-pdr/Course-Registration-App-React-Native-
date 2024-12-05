import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Button,
  // CheckBox,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  // console.log(password, showPassword);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Welcome back</Text>
        <Text>Lorem ipsumoloribus, odiamus quasi</Text>
        <Text>Lorem ipsumoloribus, odiamus</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.firstInput}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="gmail" size={24} color="#0356fc" />
          </View>
          <View style={styles.inputField}>
            <View style={styles.forBottomBorder}>
              <Text>Gmail</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter mail id"
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </View>
        <View style={styles.firstInput}>
          <View style={styles.icon}>
            <MaterialIcons name="password" size={24} color="#0356fc" />
          </View>
          <View style={styles.inputField}>
            <View style={styles.forBottomBorder}>
              <Text>Password</Text>
              <View style={styles.password}>
                <TextInput
                  secureTextEntry={!showPassword}
                  value={password}
                  style={styles.input}
                  onChangeText={handleChangePassword}
                  placeholder="Enter Password"
                  placeholderTextColor="gray"
                />
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#aaa"
                  style={styles.inputPassIcon}
                  onPress={toggleShowPassword}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.forgotPassword}>
          <Text>
            <Link
              style={{
                color: "#0356fc",
                borderColor: "#0356fc",
                borderBottomWidth: 2,
              }}
              href={`/signin`}
            >
              Forgot Password
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Pressable>
            {" "}
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Sign in
            </Text>
          </Pressable>
        </View>
        <Text style={{ paddingTop: 10, paddingBottom: 10 }}>or</Text>
        <View style={styles.social}>
          <View style={styles.imgBox}>
            <Image
              style={styles.img}
              source={require("../assets/images/fb.png")}
            />
          </View>
          <View style={styles.imgBox}>
            <Image
              style={styles.img}
              source={require("../assets/images/google.png")}
            />
          </View>
        </View>
        <Text style={{ paddingBottom: 20 }}>
          Do you have an account?{" "}
          <Link
            style={{
              color: "#0356fc",
              borderColor: "#0356fc",
              borderBottomWidth: 2,
            }}
            href={`/`}
          >
            Sign Up
          </Link>{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    alignItems: "center",
  },
  inputContainer: {
    flex: 3,
    paddingLeft: 35,
  },
  buttonContainer: {
    flex: 3,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  title1: {
    fontSize: 30,
    fontWeight: 500,
  },

  firstInput: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  icon: {
    backgroundColor: "#d6d4d4",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  inputField: {
    marginLeft: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  forBottomBorder: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    width: 200,
  },
  TextInput: {
    marginBottom: 10,
    marginTop: 10,
    padding: 8,
    paddingLeft: 0,
    alignContent: "center",
  },
  button: {
    width: "70%",
    backgroundColor: "#0356fc",
    color: "white",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 18,
    height: 50,
    borderRadius: 20,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 4,
    width: "40%",
  },
  imgBox: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 35,
    width: 35,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  forgotPassword: {
    width: "80%",
    // paddingRight:10,
    alignItems: "flex-end",
  },
  password: {
    // borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent:'center',
    padding: 8,
    alignContent: "center",
  },
  input: {
    paddingLeft: 0,
    padding: 8,
  },
  inputPassIcon: {
    // paddingLeft:0,
    padding: 8,
  },
});
