import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.inputBackground, // Changed to inputBackground for better contrast if card is cardBackground
    padding: 16,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
