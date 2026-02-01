import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import { Button } from './src/components/button';
import { Input } from './src/components/input';
import { styles } from './App.styles';
import { currencies } from './src/constants/currencies';
import { colors } from './src/styles/colors';

// Mock exchange rates (Base: USD)
const exchangeRates = {
  'USD': 1.0,
  'BRL': 5.75,
  'EUR': 0.92,
  'GBP': 0.79,
  'JPY': 147.50,
  'CAD': 1.35,
  'AUD': 1.52,
  'CHF': 0.86
};

export default function App() {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]); // USD
  const [toCurrency, setToCurrency] = useState(currencies[2]);   // EUR -> Let's start with different ones like image (EUR is index 2)
  // Wait, image has From: EUR (blue), To: GBP (green). Let's mimic that default for "wow" factor if we want, or stick to USD/BRL. 
  // Let's stick to standard USD/BRL or user preference. Keeping defaults simple.
  
  const [amount, setAmount] = useState('1000');
  const [convertedAmount, setConvertedAmount] = useState('0.00');
  const [exchangeRate, setExchangeRate] = useState('');

  useEffect(() => {
    convert();
  }, [fromCurrency, toCurrency, amount]);

  const convert = () => {
    if (!amount) {
      setConvertedAmount('');
      setExchangeRate('');
      return;
    }

    const value = parseFloat(amount.replace(',', '.'));
    if (isNaN(value)) {
      setConvertedAmount('');
      setExchangeRate('');
      return;
    }

    const fromRate = exchangeRates[fromCurrency.code] || 1;
    const toRate = exchangeRates[toCurrency.code] || 1;

    // Convert to USD first (since base is USD), then to target
    const valueInUSD = value / fromRate;
    const result = valueInUSD * toRate;
    
    // Calculate 1 Unit Rate
    const oneUnitInUSD = 1 / fromRate;
    const oneUnitResult = oneUnitInUSD * toRate;

    // Using en-US locale for consistent formatting in English context, or keep pt-BR if user wants formatting style?
    // User asked to translate everything to English, so let's use 'en-US' or undefined (default).
    setConvertedAmount(result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    setExchangeRate(`1 ${fromCurrency.code} = ${oneUnitResult.toFixed(4)} ${toCurrency.code}`);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="light"/>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Currency Converter</Text>
          <Text style={styles.subTitle}>Convert values between different currencies</Text>
        </View>

        <View style={styles.mainCard}>
          {/* FROM Section */}
          <Text style={styles.label}>From:</Text>
          <View style={styles.currencyGrid}>
            {currencies.map((currency) => (
              <Button 
                key={`from-${currency.code}`}
                currency={currency}
                selected={fromCurrency.code === currency.code}
                selectedColor={colors.primary} // Blue
                onPress={() => setFromCurrency(currency)}
              />
            ))}
          </View>
          
          {/* AMOUNT Section */}
          <Input 
            label="Amount:" 
            value={amount} 
            onChangeText={setAmount}
            placeholder="1000"
          />

          {/* SWAP Separator */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <TouchableOpacity style={styles.swapButton} onPress={handleSwap}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>
          </View>

          {/* TO Section */}
          <Text style={styles.label}>To:</Text>
          <View style={styles.currencyGrid}>
            {currencies.map((currency) => (
              <Button 
                key={`to-${currency.code}`}
                currency={currency}
                selected={toCurrency.code === currency.code}
                selectedColor={colors.secondary} // Green
                onPress={() => setToCurrency(currency)}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.convertButton} onPress={convert}>
          <Text style={styles.convertButtonText}>Convert</Text>
        </TouchableOpacity>

        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.resultValue}>
             {toCurrency.symbol} {convertedAmount}
          </Text>
          <Text style={styles.exchangeRateText}>
            Exchange Rate: {exchangeRate}
          </Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
