import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import imagePath from '../constants/imagePath';
import { BackHandler } from 'react-native';

const CustomHeader = ({ name, color }) => {
    
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
        <View style={[styles.headerContainer, { backgroundColor: '#c1b0f4' }]}>
            <TouchableOpacity onPress={handleBackButtonClick} style={styles.icon} >
                <Image style={{ height: 26, width: 26, }} source={imagePath.icbackNoraml} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 16,
        // position: 'absolute', 
        top: 0,
        borderBottomWidth: 0.3,
        borderColor: 'black'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    headerColor:{
        
    },
    icon: {
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 15
    },
});

export default CustomHeader;
