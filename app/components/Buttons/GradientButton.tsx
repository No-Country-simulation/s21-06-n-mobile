import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

type GradientButtonProps = {
  title: string;
  onPress: () => void;
};

const GradientButton: React.FC<GradientButtonProps> = ({ title, onPress }) => {
  const colorScheme = useColorScheme();
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePressIn = () => {
    console.log(isPressed)
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    console.log(isPressed)
    // Reset style after 300ms
    // setTimeout(() => setIsPressed(false), 300);
  };
  
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        underlayColor="transparent"
        style={[styles.button, isPressed ? styles.buttonPressed : { borderWidth: 0 }]}

      >
        <LinearGradient
          colors={isPressed ? ['#FFFFFF', '#FFFFFF'] : Colors[colorScheme ?? 'light'].gradien}
          style={styles.gradient}
        >
          <View style={styles.buttonContent}>
            <Text
              style={[
                styles.text,
                isPressed ? styles.textPressed : styles.textDefault,
              ]}
            >
              {title}
            </Text>
          </View>
        </LinearGradient>
      </TouchableHighlight>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: 191,
    elevation: 3,
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: 'black'
  },
  buttonPressed: {
    borderWidth: 1
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.5
  },
  textDefault: {
    color: '#FFFFFF',
  },
  textPressed: {
    color: 'black',
  },
});

export default GradientButton;
