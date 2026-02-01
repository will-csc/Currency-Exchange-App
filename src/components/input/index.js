import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export function Input({ label, value, onChangeText, placeholder = "0.00" }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}
