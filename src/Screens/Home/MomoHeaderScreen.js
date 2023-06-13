import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';
import imagePath from '../../constants/imagePath';

const  MomoHeaderScreen = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (event) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const headerHeight = scrollOffset > 0 ? 50 : 80;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={[styles.header, { height: headerHeight }]}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={imagePath.icClose_image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
            />
          </View>
          <View style={styles.menu}>
            {/* Add your menu items with images here */}
          </View>
        </View>

        {/* Add the rest of your app content here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    transitionProperty: 'height',
    transitionDuration: '0.3s',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  logo: {
    flex: 1,
  },
  logoImage: {
    width: 100,
    height: 50,
  },
  searchBar: {
    flex: 3,
    paddingLeft: 20,
  },
  searchInput: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default MomoHeaderScreen;
