import { View, Text } from "react-native";
import React from "react";

import "../global.css";
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="./auth/Login" />;
}
