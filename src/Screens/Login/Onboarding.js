// Import the necessary modules from React Native
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet ,Text} from 'react-native';
import imagePath from '../../constants/imagePath';


// Create a functional component called OnboardingScreen
const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    (imagePath.icIntroA),
    (imagePath.icIntroA),
    (imagePath.icIntroA),
  ];

  const handleSkip = () => {
    // Handle skip logic here
  };

  const handleNext = () => {
    // Handle next screen logic here
  };

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex]} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define the styles for the container and components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  skipButton: {
    backgroundColor: 'purple',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  nextButton: {
    backgroundColor: 'purple',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboarding;
