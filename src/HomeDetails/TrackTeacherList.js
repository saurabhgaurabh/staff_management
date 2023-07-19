import { View, Text, TouchableOpacity, Image, Share, } from 'react-native'
import React from 'react'
import CustomHeader from '../Components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../Screens/MainStyle'
import LinearGradient from 'react-native-linear-gradient'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings'


const TrackTeacherList = () => {

    const navigation = useNavigation();
    const addRoute = ()=> { navigation.navigate(navigationStrings.TEACHEROUTE)}
    const handleShare = () => {
        const message = 'Sharing this content.';
        Share.share({
            message,
        })
            .then(result => console.log(result))
            .catch(error => console.log(error));
    };

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader name={'Tracking Staff Listing'} />
            <SafeAreaView style={{ padding: 10, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={styles.headingCss}>Track Your Members</Text>
            </SafeAreaView>
            <View style={styles.teacherListAddMenu}>
                <View style={styles.contanerBody}>
                    <LinearGradient colors={['#f9cc0a', '#f9b511']} style={styles.linearCss} >
                        <View style={styles.ContainerCss}>
                            <TouchableOpacity onPress={addRoute}>
                                <Text style={styles.btn_txt}>Add More</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default TrackTeacherList