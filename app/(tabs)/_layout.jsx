import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0356fc",
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "My Courses",
          headerTitleStyle: { color: "#0356fc" },
          headerTitleAlign: "center",
          headerTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="my-library-books" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Chat Box",
          headerTitleStyle: { color: "#0356fc" },
          headerTitleAlign: "center",
          headerTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          headerTitleStyle: { color: "#0356fc" },
          headerTitleAlign: "center",
          headerTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-check" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
