import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useCameraPermissions } from 'expo-camera';

import { fetchQuiz } from '../api/quiz-api';
import { homePageStyles }   from '../styles/home-page.styles';

import { 
  CameraScanner, 
  PermissionPrompt, 
  ScanOverlay
 } from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomePage({ navigation, route }: Props) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const { params } = route;

  useEffect(() => {
    if (params?.showScanAgain) {
      setScanned(true);
      navigation.setParams({ showScanAgain: undefined });
    }
  }, [params?.showScanAgain]);

  const onScanned = async (data: string) => {
    if (scanned) return;
    try {
      const quizData = await fetchQuiz(data);
      navigation.navigate('Question', {
        questionData: { ...quizData, endpoint: data },
      });
    } catch {
      setScanned(true);
      Alert.alert(
        'Error',
        'Unable to find quiz data for this code. Try another one!'
      );
    }
  };

  if (!permission) {
    return <Text>Loading…</Text>;
  }

  if (!permission.granted) {
    return <PermissionPrompt onRequest={requestPermission} />;
  }

  return (
    <View style={homePageStyles.container}>
      {!scanned ? (
        <CameraScanner onScanned={onScanned} />
      ) : (
        <ScanOverlay onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
