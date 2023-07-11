import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppButton({ children, onPress, style, styleText }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '60%',
    backgroundColor: '#e75480',
    padding: 10,
    borderRadius: 5,
    height:40,
    alignItems: 'center',
    marginTop: 70,
  },
  text: { color: '#fff',
  fontWeight: 'bold', },
});