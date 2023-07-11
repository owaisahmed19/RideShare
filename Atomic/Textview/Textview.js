

import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
//import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AppTextInput({
  style,
  rightIcon,
  onPress,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
      
        placeholderTextColor="#4d463d"
        style={styles.textInput}
        {...otherProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onPress}>
          <Icon style={{ alignSelf:"left" }} name={rightIcon} size={25} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    flexDirection: "row",
  
    padding: 10,

    
  },
  textInput: {
    width: '80%',
    padding: 10,
    borderColor:"#e75480",
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    
  },
});
