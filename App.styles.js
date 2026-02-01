import { StyleSheet } from 'react-native';
import { colors } from './src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    marginTop: 60,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  mainCard: {
    backgroundColor: colors.cardBackground,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 12,
    fontSize: 14,
    marginTop: 4,
  },
  currencyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Left aligned usually looks cleaner in grids like the image
    marginHorizontal: -4,
    marginBottom: 16,
  },
  separatorContainer: {
    alignItems: 'center',
    marginVertical: 16,
    height: 40,
    justifyContent: 'center',
  },
  separatorLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: colors.inputBackground,
    top: '50%',
  },
  swapButton: {
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.cardBackground, // Blend a bit
  },
  swapButtonText: {
    color: colors.textSecondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  convertButton: {
    backgroundColor: colors.primary,
    marginHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  convertButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultCard: {
    backgroundColor: colors.cardBackground,
    marginHorizontal: 16,
    padding: 24,
    borderRadius: 16,
  },
  resultLabel: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 8,
  },
  resultValue: {
    color: colors.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  exchangeRateText: {
    color: colors.textSecondary,
    fontSize: 12,
  }
});
