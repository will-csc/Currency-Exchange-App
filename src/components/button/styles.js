import { colors } from '../../styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 55,
  },
  buttonUnselected: {
    backgroundColor: colors.inputBackground, // Dark grey for unselected
    borderWidth: 0,
  },
  buttonText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 14,
  },
});
