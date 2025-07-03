import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homePageStyles } from '../styles/home-page.styles';

interface PermissionPromptProps {
  onRequest: () => void;
}

export function PermissionPrompt({ onRequest }: PermissionPromptProps) {
  return (
    <View style={homePageStyles.centered}>
      <Text>No access to camera</Text>
      <TouchableOpacity style={homePageStyles.button} onPress={onRequest}>
        <Text style={homePageStyles.buttonText}>Grant Permission</Text>
      </TouchableOpacity>
    </View>
  );
}