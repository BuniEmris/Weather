import { StatusBar } from "expo-status-bar";
import React from "react";
import { SectionList, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const DATA = [
    {
      title: "7:04 pm",
      data: ["Palo Alto"],
    },
    {
      title: "7:04 pm",
      data: ["San Fransisco"],
    },
    {
      title: "7:04 pm",
      data: ["Beverly Hills"],
    },
    {
      title: "7:04 pm",
      data: ["Los Angeles"],
    },
    {
      title: "3:04 am",
      data: ["London"],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="md-sunny" style={styles.icon} />
        <Text style={styles.headerText}>Weather App</Text>
      </View>
      <MaterialCommunityIcons name="weather-night" style={styles.night} />
      <Feather name="sun" style={styles.sunPalo} />
      <Feather name="sun" style={styles.sunFran} />
      <Feather name="sun" style={styles.sunBeverly} />
      <Feather name="sun" style={styles.sunLos} />
      <Text style={styles.gradusPalo}>60&deg;</Text>
      <Text style={styles.gradusSan}>61&deg;</Text>
      <Text style={styles.gradusBev}>63&deg;</Text>
      <Text style={styles.gradusLos}>65&deg;</Text>
      <Text style={styles.gradusLondon}>40&deg;</Text>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#17BCF8",
  },
  headerText: {
    alignSelf: "center",
    position: "absolute",
    left: 60,
    top: 10,
    fontSize: 20,
    color: "white",
  },
  icon: {
    fontSize: 24,
    color: "white",
    position: "absolute",
    left: 20,
    top: 10,
  },
  gradusPalo: {
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    top: 75,
    right: 20,
  },
  gradusSan: {
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    top: 155,
    right: 20,
  },
  gradusBev: {
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    top: 235,
    right: 20,
  },
  gradusLondon: {
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    bottom: 32,
    right: 20,
  },
  gradusLos: {
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    bottom: 115,
    right: 20,
  },
  text: {
    fontSize: 20,
    paddingBottom: 29,
    borderBottomColor: "#E1DDDD",
    borderBottomWidth: 4,
    width: "100%",
  },
  night: {
    fontSize: 24,
    position: "absolute",
    right: 100,
    bottom: 32,
  },
  sunPalo: {
    fontSize: 24,
    color: "yellow",
    position: "absolute",
    top: 80,
    right: 100,
    alignSelf: "center",
  },
  sunFran: {
    fontSize: 24,
    color: "yellow",
    position: "absolute",
    top: 160,
    right: 100,
    alignSelf: "center",
  },
  sunBeverly: {
    fontSize: 24,
    color: "yellow",
    position: "absolute",
    top: 240,
    right: 100,
    alignSelf: "center",
  },
  sunLos: {
    fontSize: 24,
    color: "yellow",
    position: "absolute",
    bottom: 120,
    right: 100,
    alignSelf: "center",
  },
});
