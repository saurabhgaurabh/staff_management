import { View, Text, BackHandler, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../../constants/imagePath';


const AddUpTeacher = () => {
  const navigation = useNavigation();

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView  >
        <View style={styles.header}>
          <View style={styles.header_body}>
            <TouchableOpacity onPress={handleBackButtonClick} >
              <Image style={{ height: 30, width: 25 }} source={imagePath.icback} />
            </TouchableOpacity>
          </View>
          <View style={styles.header_txt}>
            <Text style={styles.headerText}>Registration</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Username" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: { flexDirection: 'row', backgroundColor: '#f5f5f5', paddingVertical: 20, paddingHorizontal: 30, borderBottomWidth: 1, borderBottomColor: '#ddd', },
  header_body:{ flexDirection: 'column', width: '20%', paddingHorizontal: 2, justifyContent: 'center' },
  header_txt:{ flexDirection: 'column', width: '80%', paddingHorizontal: 20 },
  headerText: {fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddUpTeacher