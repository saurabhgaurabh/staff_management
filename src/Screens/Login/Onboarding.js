import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    {
      source: require('../../assets/images/intro_a.png'),
      heading: 'Welcome to eStudy',
      subheading: 'Welcome to the app! and view the list of members then get best.',
      // text: 'This is image 1.',
    },
    {
      source: require('../../assets/images/intro_b.png'),
      heading: 'Anytime, Anywhere',
      subheading: 'Select your best members and performance and pramote.',
      // text: 'This is image 2.',
    },
    {
      source: require('../../assets/images/intro_c.png'),
      heading: 'Ready to find opporctunity?',
      subheading: 'Get started and enjoy! and get your greatest.',
      // text: 'This is image 3.',
    },
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / windowWidth);

    setCurrentIndex(newIndex);
  };

  const handleSkip = () => {
    if (currentIndex === images.length - 1) {
      return; // Skip button is already at the last image, no action needed
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    scrollViewRef.current.scrollTo({ x: nextIndex * windowWidth });
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      // Handle completion of onboarding or next logic
    } else {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({ x: nextIndex * windowWidth });
    }
  };

  const imageWidth = windowWidth * 0.9; // Adjust the width percentage as needed
  const imageHeight = imageWidth; // Make image height same as width

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((item, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.contentContainer}>
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.subheading}>{item.subheading}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={item.source} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
            </View>
          </View>
        ))}
      </ScrollView>
      {currentIndex !== images.length - 1 ? (
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      ) : null}
      {currentIndex === images.length - 1 ? (
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  slide: {
    flex: 1,
    width: windowWidth,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    // paddingBottom: 100
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 70
  },
  image: {
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
    // paddingBottom: 120
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 90
  },
  subheading: {
    fontSize: 18,
    marginTop: 10,
    color: '#888888',
    bottom: 80
  },
  text: {
    fontSize: 16,
    marginTop: 20,
  },
 skipButton: {
    position: 'absolute',
    top: windowHeight * 0.20,
    left: 20,
    backgroundColor: '#7145f1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  nextButton: {
    position: 'absolute',
    top: windowHeight * 0.20,
    right: 20,
    backgroundColor: '#7145f1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default Onboarding;
