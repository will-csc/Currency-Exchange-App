import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';

export function Button({ onPress, currency, selected, selectedColor = colors.primary }) {
  
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        selected && { backgroundColor: selectedColor, borderWidth: 0 },
        !selected && styles.buttonUnselected
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        !selected && { color: colors.textSecondary }
      ]}>
        {currency.code}
      </Text>
    </TouchableOpacity>
  );
}
