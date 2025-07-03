import React from 'react';
import { StyleSheet } from 'react-native';
import { CameraView, BarcodeScanningResult } from 'expo-camera';

interface CameraScannerProps {
  onScanned: (data: string) => void;
}

export function CameraScanner({ onScanned }: CameraScannerProps) {
  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    onScanned(data);
  };

  return (
    <CameraView
      style={StyleSheet.absoluteFillObject}
      onBarcodeScanned={handleBarCodeScanned}
      barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
    />
  );
}
