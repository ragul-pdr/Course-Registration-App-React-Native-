import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Button,
  Appearance,
} from "react-native";
import { Colors } from '@/constants/Colors';
// import colorScheme from '@/hooks/useColorScheme';
const colorScheme = Appearance.getColorScheme();

import CheckBox from "expo-checkbox";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { useState } from "react";
export default function Index() {
  const [isSelected, setSelection] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Create an account</Text>
        <Text>Lorem ipsumoloribus, odiamus quasi</Text>
        <Text>Lorem ipsumoloribus, odiamus</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.firstInput}>
          <View style={styles.icon}>
            <FontAwesome name="user" size={24} color="#0356fc" />
          </View>
          <View style={styles.inputField}>
            <View style={styles.forBottomBorder}>
              <Text>Full Name</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Full Name"
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </View>
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
                  onChangeText={setPassword}
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
        <View style={styles.firstInput}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>I agree to the terms & conditions</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Link href={'/(tabs)'} asChild>
            <Pressable>
              <Text
                style={{ textAlign: "center", color:{}, fontSize: 20 }}
              >
                Sign Up
              </Text>
            </Pressable>
          </Link>
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
          Already have an account?{" "}
          <Link
            style={{
              color: "#0356fc",
              borderColor: "#0356fc",
              borderBottomWidth: 2,
            }}
            href={"/signin"}
          >
            Sign in
          </Link>{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:colorScheme === 'dark' ? Colors.light : Colors.dark,
    flex: 1,
    backgroundColor:'white'
    // color:{Colors}
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
    flex: 2,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    // backgroundColor:'blue'
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
    padding: 0,
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
    // borderWidth:1,
    width: "40%",
  },
  imgBox: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: "50%",
    // padding:20,
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
  password: {
    // borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
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
