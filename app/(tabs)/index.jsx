import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const index = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.header}>
        <View style={styles.userData}>
          <View>
            <Image
              style={styles.userImg}
              source={require("../../assets/images/user.jpg")}
            />
          </View>
          <View style={styles.userContent}>
            <Text style={{ color: "gray" }}>Good Morning</Text>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Ragul R</Text>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <View>
            <Ionicons name="search-outline" size={24} color="#0356fc" />
          </View>
          <View style={{ marginLeft: 20 }}>
            <FontAwesome name="bell" size={24} color="#0356fc" />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 15,
            }}
          >
            <View style={styles.specialBar}>
              <View style={styles.spl}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: 20,
                    paddingBottom: 10,
                  }}
                >
                  TODAY SPECIAL
                </Text>
                <Text style={{ color: "#e5e5e5", paddingBottom: 10 }}>
                  Hurry! Today's your last chance for a discount
                </Text>
              </View>

              <Text
                style={{
                  color: "white",
                  fontSize: 40,
                  // alignContent: "flex-start",
                  padding: 10,
                  // marginTop: 0,
                }}
              >
                75%
              </Text>
            </View>
          </View>

          <View style={styles.icons}>
            <View style={styles.iconContainer}>
              <Text style={styles.pic}>
                <Text style={styles.icon}>
                  <MaterialIcons
                    name="design-services"
                    size={32}
                    color="#0356fc"
                  />
                </Text>
              </Text>
              <Text style={{ textAlign: "center" }}>Design</Text>
            </View>

            <View style={styles.iconContainer}>
              <Text style={styles.pic}>
                <FontAwesome5 name="python" size={34} color="#0356fc" />
              </Text>
              <Text style={{ textAlign: "center" }}>Coding</Text>
            </View>

            <View style={styles.iconContainer}>
              <Text style={styles.pic}>
                <FontAwesome5 name="heartbeat" size={32} color="#0356fc" />
              </Text>
              <Text style={{ textAlign: "center" }}>Health</Text>
            </View>

            <View style={styles.iconContainer}>
              <Text style={styles.pic}>
                <MaterialIcons name="more" size={32} color="#0356fc" />
              </Text>
              <Text style={{ textAlign: "center" }}>More</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Popular Courses
              </Text>
              <Text
                style={{
                  color: "#0356fc",
                  fontWeight: 500,
                }}
              >
                View all
              </Text>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/newp.png")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Python Pro
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.9 |
                  6,923 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  {" "}
                  Sri |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Programming
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/UX.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  UX/UI Design
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.7 |
                  8,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/newp.png")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Python Pro
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.9 |
                  6,923 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  {" "}
                  Sri |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Programming
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/UX.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  UX/UI Design
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.7 |
                  8,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/newp.png")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Python Pro
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.9 |
                  6,923 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  {" "}
                  Sri |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Programming
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/UX.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  UX/UI Design
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.7 |
                  8,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/newp.png")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Python Pro
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.9 |
                  6,923 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  {" "}
                  Sri |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Programming
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/UX.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  UX/UI Design
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.7 |
                  8,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/newp.png")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Python Pro
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.9 |
                  6,923 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  {" "}
                  Sri |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Programming
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/UX.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  UX/UI Design
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.7 |
                  8,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Top Rated Courses
              </Text>
              <Text
                style={{
                  color: "#0356fc",
                  fontWeight: 500,
                }}
              >
                View all
              </Text>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.courses}>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/MG.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Motion Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.8 |
                  10,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
              <View style={styles.Imgcover}>
                <Image
                  style={styles.courseImg}
                  source={require("../../assets/images/grapics.jpg")}
                />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  Graphics
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 4,
                  }}
                >
                  {" "}
                  <FontAwesome name="star" size={15} color="black" /> 4.5 |
                  9,123 Students
                </Text>
                <Text
                  style={{
                    padding: 4,
                  }}
                >
                  Asif Ashan |{" "}
                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#0356fc",
                    }}
                  >
                    {" "}
                    Design
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    // flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  userData: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  userContent: {
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 10,
  },
  headerIcons: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignContent: "center",
    // marginTop: 1,
  },
  specialBar: {
    padding: 15,
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#0356fc",
    borderRadius: 30,
    flexDirection: "row",
    height: 140,
  },
  spl: {
    paddingTop: 10,
    paddingLeft: 10,
    width: "70%",
  },
  icons: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    textAlign:'center',
    alignItems:'center'
  },
  pic: {
    // flex:1,
    backgroundColor: "#d4d5e5",
    width: 70,
    height: 70,
    alignItems: "center",
    borderRadius: 50,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    // borderWidth:1,
    padding:16
  },
  iconContainer: {
    // borderWidth:1,
    width: 100,
    height: 100,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
 
  courses: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  Imgcover: {
    borderWidth: 1,
    width: "50%",
    height: "auto",
    padding: 10,
    borderRadius: 10,
  },
  courseImg: {
    height: 100,
    width: "auto",
    resizeMode: "cover",
    borderRadius: 10,
    padding: 10,
  },
});
