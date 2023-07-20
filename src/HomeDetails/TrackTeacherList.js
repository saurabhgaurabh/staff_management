import { View, Text, TouchableOpacity, Image, Share, ImageBackground, } from 'react-native'
import React from 'react'
import CustomHeader from '../Components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../Screens/MainStyle'
import LinearGradient from 'react-native-linear-gradient'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'


const TrackTeacherList = () => {

    const navigation = useNavigation();
    const addRoute = () => { navigation.navigate(navigationStrings.TEACHEROUTE) }
    const { myTrack_teach_data } = useSelector(state => state.login)
    console.log(myTrack_teach_data.trackTeacherData, " myTrack_teach_data ")
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

            <ScrollView showsHorizontalScrollIndicator={true}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: '95%', height: 375, alignContent: 'center', alignSelf: 'center', margin: 10, alignItems: 'center', borderBottomWidth: 2, borderRadius: 10, borderBottomColor: '#bd75ec', borderWidth: 2 , top: 10}}>
                    <View style={{ flexDirection: 'row', width: '100%', height: '50%', }}>
                        <ImageBackground style={{ resizeMode: 'cover', flex: 1, opacity: 1 }} source={imagePath.icbackInfo}>
                            <View style={{ flexDirection: 'row', height: '100%', width: '100%', justifyContent: 'center', }}>
                                <View style={{ flexDirection: 'column', height: '100%', width: '70%', justifyContent: 'flex-start', alignContent: 'center', alignSelf: 'center', paddingTop: 20, paddingHorizontal: 10 }}>
                                    <Text style={styles.track_textCsslist}>Hi, {'username'} </Text>
                                    <Text style={styles.track_textCsslist}>developersaurabhkumar15@gmail.com </Text>
                                </View>
                                <View style={{ flexDirection: 'column', height: '100%', width: '30%', alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <Image source={imagePath.icDummyUser} style={{ width: '100%', height: '60%', top: 25, borderRadius: 50, }} />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', height: 185, borderRadius: 20 }}>
                        <View style={{ flexDirection: 'column', backgroundColor: 'skyblue', paddingHorizontal: 10, width: '100%', height: '100%', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Organization:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Gyan Lok Inter College</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Contact:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>9249929248</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Experience:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>3 Years</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Qualification:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Master of Comuter Applications</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Position:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Sr Developer</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Residence:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Firozabad</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: '95%', height: 375, alignContent: 'center', alignSelf: 'center', margin: 10, alignItems: 'center', borderBottomWidth: 2, borderRadius: 10, borderBottomColor: '#bd75ec', borderWidth: 2 }}>
                    <View style={{ flexDirection: 'row', width: '100%', height: '50%', }}>
                        <ImageBackground style={{ resizeMode: 'cover', flex: 1, opacity: 1 }} source={imagePath.icbackInfo}>
                            <View style={{ flexDirection: 'row', height: '100%', width: '100%', justifyContent: 'center', }}>
                                <View style={{ flexDirection: 'column', height: '100%', width: '70%', justifyContent: 'flex-start', alignContent: 'center', alignSelf: 'center', paddingTop: 20, paddingHorizontal: 10 }}>
                                    <Text style={styles.track_textCsslist}>Hi, {'username'} </Text>
                                    <Text style={styles.track_textCsslist}>developersaurabhkumar15@gmail.com </Text>
                                </View>
                                <View style={{ flexDirection: 'column', height: '100%', width: '30%', alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <Image source={imagePath.icDummyUser} style={{ width: '100%', height: '60%', top: 25, borderRadius: 50, }} />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', height: 185, borderRadius: 20 }}>
                        <View style={{ flexDirection: 'column', backgroundColor: 'skyblue', paddingHorizontal: 10, width: '100%', height: '100%', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Organization:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Gyan Lok Inter College</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Contact:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>9249929248</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Experience:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>3 Years</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Qualification:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Master of Comuter Applications</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Position:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Sr Developer</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>Residence:</Text>
                                <Text style={{ fontSize: 17, color: '#000', marginLeft: 10 }}>Firozabad</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default TrackTeacherList