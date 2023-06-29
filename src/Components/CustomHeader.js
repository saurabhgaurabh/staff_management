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
        <View style={[styles.headerContainer, { backgroundColor: color }]}>
            <TouchableOpacity onPress={handleBackButtonClick} style={styles.icon} >
                <Image style={{ height: 25, width: 20 }} source={imagePath.icbackNoraml} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '35%',
        paddingHorizontal: 16,
        backgroundColor: 'blue',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default CustomHeader;
