import axios from 'axios';
import * as Linking from 'expo-linking';
import { BASE_URL } from '../constants/constants';
import { QuestionData } from '../types/question-data';
import { Alert } from 'react-native';

export const fetchQuiz = async (endpoint: string): Promise<QuestionData> => {
  const fullUrl = `${BASE_URL}${endpoint}`;
  const response = await axios.get<QuestionData>(fullUrl);
  return response.data;
};

export const submitQuizAnswer = async (
  endpoint: string,
  answer: string
) => {
  const fullUrl = `${BASE_URL}${endpoint}`;
  return axios.post(fullUrl, { answer });
};

export const submitAnswerAndNavigate = async (
  endpoint: string,
  answer: string,
  navigation: any
) => {
  try {
    const response = await submitQuizAnswer(endpoint, answer);
    const { coordinates } = response.data;

    Alert.alert(
      'Answer submitted!',
      `Coordinates: ${coordinates}`,
      [
        {
          text: 'Open in Maps',
          onPress: async () => {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
            await Linking.openURL(mapUrl);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home', params: { showScanAgain: true } }],
            });
          },
        },
      ]
    );
  } catch (error) {
    Alert.alert('Error', 'Could not submit answer.');
  }
};