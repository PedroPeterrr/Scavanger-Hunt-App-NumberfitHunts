import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuestionData } from './types/question-data';

import { 
  HomePage,
  QuestionPage
} from './pages';

export type RootStackParamList = {
  Home: { showScanAgain?: boolean } | undefined;
  Question: { questionData: QuestionData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Question" component={QuestionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}