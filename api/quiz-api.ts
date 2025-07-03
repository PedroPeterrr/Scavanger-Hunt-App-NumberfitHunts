import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { QuestionData } from '../types/question-data';

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
