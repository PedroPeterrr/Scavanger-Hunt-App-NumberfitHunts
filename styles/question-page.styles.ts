import { StyleSheet } from 'react-native';

export const questionPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: '#f6f6f6',
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 28,
    color: '#222',
    textAlign: 'center',
  },
  choice: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 8,
    backgroundColor: '#f7f9fa',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  selectedChoice: {
    backgroundColor: '#e1f5fe',
    shadowOpacity: 0.08,
    elevation: 2,
  },
  choiceText: {
    fontSize: 17,
    color: '#222',
  },
  submitButton: {
    marginTop: 32,
    backgroundColor: '#222',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
