import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Share, ImageBackground, Modal } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../Screens/MainStyle'
import LinearGradient from 'react-native-linear-gradient'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { ServerUrl } from '../Helper/Helper'
import * as Animatable from 'react-native-animatable';
import { Menu, MenuOptions, MenuOption, MenuContext, MenuProvider, MenuTrigger } from 'react-native-popup-menu';

const TrackTeacherList = () => {
    const dmImg = require('../assets/images/dummy_user.png');
    const navigation = useNavigation();
    const addRoute = () => { navigation.navigate(navigationStrings.TEACHEROUTE) }
    const { myTrack_teach_data } = useSelector(state => state.login)
    console.log(myTrack_teach_data.trackTeacherData, " myTrack_teach_data ")
    console.log(myTrack_teach_data?.trackTeacherData?.teacher_img, " myTrack_teach_data ")

    // to share anything
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
                {myTrack_teach_data?.trackTeacherData?.map((item, index) => {
                    return (
                        <Animatable.View animation={'fadeInRightBig'} delay={index * 500} duration={1000} style={styles.track_list_Container} key={index}>
                            <View style={styles.track_fst_box}>
                                <ImageBackground style={styles.backImg_track_list} source={imagePath.icbackInfo}>
                                    <View style={styles.track_fst_row}>
                                        <View style={styles.track_fst_row_clm}>
                                            <View style={styles.track_fst_row_clm_Css}>
                                                <Text style={styles.track_txt_head}></Text>
                                                <TouchableOpacity >
                                                    <Image source={imagePath.icMoreMore} style={{ width: 15, height: 20, }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.track_Snd_row}>
                                        <View style={styles.track_Snd_row_txt_css}>
                                            <Text style={styles.track_textCsslist}>Hi, </Text>
                                            <Text style={styles.track_textCsslist}>{item.teacher_name} </Text>
                                            <Text style={styles.track_textCsslist}>{item.email}</Text>
                                        </View>
                                        <View style={styles.track_Snd_row_img}>
                                            <Image source={item?.teacher_img ? { uri: `${ServerUrl()}${item?.teacher_img}` } : dmImg} style={styles.img_Dsg_Css} />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.track_snd_box}>
                                <View style={styles.track_snd_Container}>
                                    <View style={styles.track_Snd_row_Css}>
                                        <Text style={styles.track_list_heading}>Organization:</Text>
                                        <Text style={styles.track_list_data}>{item?.current_organization.toUpperCase()}</Text>
                                    </View>
                                    <View style={styles.track_Snd_row_Css}>
                                        <Text style={styles.track_list_heading}>Contact:</Text>
                                        <Text style={styles.track_list_data}>{item?.mobile}</Text>
                                    </View>
                                    <View style={styles.track_Snd_row_Css}>
                                        <Text style={styles.track_list_heading}>Experience:</Text>
                                        <Text style={styles.track_list_data}>{item?.experience.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</Text>
                                    </View>
                                    <View style={styles.track_Snd_row_Css}>
                                        <Text style={styles.track_list_heading}>Qualification:</Text>
                                        <Text style={styles.track_list_data}>{item?.qualification}</Text>
                                    </View>
                                    <View style={styles.track_Snd_row_Css}>
                                        <Text style={styles.track_list_heading}>Position:</Text>
                                        <Text style={styles.track_list_data}>{item?.current_position.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</Text>
                                    </View>
                                    <View style={styles.track_Snd_row_Css}>
                                        <Text style={styles.track_list_heading}>Residence:</Text>
                                        <Text style={styles.track_list_data}>{item?.current_residence.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</Text>
                                    </View>
                                </View>
                            </View>
                        </Animatable.View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TrackTeacherList