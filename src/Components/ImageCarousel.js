import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';

const ScrollingDots = ({ currentIndex, images }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {images.map((_, index) => (
        <View
          key={index}
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 5,
            margin: 10,
            backgroundColor: index === currentIndex ? 'green' : 'gray',
          }}
        />
      ))}
    </View>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImagePress = (index) => {
    // Handle image press logic
    setCurrentIndex(index);
  };

  const renderImageItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleImagePress(index)}>
      <View style={{ alignItems: 'center' }}>
        <Image source={item.source} style={{ width: 350, height: 200, marginRight: 10 }} />
        {/* <Text style={{ marginTop: 1 }}></Text> */}
        <View style={{ position: 'absolute', bottom: 10 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / 200);
          setCurrentIndex(index);
        }}
      />
      <ScrollingDots currentIndex={currentIndex} images={images} />
    </View>
  );
};

export default ImageCarousel;
