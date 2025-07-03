import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { homePageStyles } from '../styles/home-page.styles';

interface ScanOverlayProps {
  onPress: () => void;
}

export function ScanOverlay({ onPress }: ScanOverlayProps) {
  return (
    <View style={homePageStyles.overlay}>
      <TouchableOpacity style={homePageStyles.button} onPress={onPress}>
        <Text style={homePageStyles.buttonText}>Scan Again</Text>
      </TouchableOpacity>
    </View>
  );
}
