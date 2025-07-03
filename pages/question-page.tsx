import React, { useState } from 'react';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { questionPageStyles } from '../styles/question-page.styles';
import { submitQuizAnswer } from '../api/quiz-api';

import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Question'>;

export default function QuestionPage({ route, navigation }: Props) {
  const { questionData } = route.params;
  const [selected, setSelected] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!selected) return Alert.alert('Select an answer first.');

    setSubmitting(true);
    try {
      const endpoint = questionData.endpoint || '/endpoint243252';
      const response = await submitQuizAnswer(endpoint, selected);

      const { isCorrect, coordinates } = response.data;

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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={questionPageStyles.container}>
      <Image source={{ uri: questionData.img_src }} style={questionPageStyles.image} />
      <Text style={questionPageStyles.question}>{questionData.question}</Text>

      {questionData.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={[
            questionPageStyles .choice,
            selected === choice && questionPageStyles.selectedChoice,
          ]}
          onPress={() => setSelected(choice)}
        >
          <Text style={questionPageStyles.choiceText}>{choice}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[questionPageStyles.submitButton, submitting && { opacity: 0.6 }]}
        onPress={handleSubmit}
        disabled={submitting}
      >
        <Text style={questionPageStyles .submitText}>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  );
}