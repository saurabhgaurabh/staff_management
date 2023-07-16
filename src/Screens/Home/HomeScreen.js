import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { View, Text, Image, useState, RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import imagePath from '../../constants/imagePath'
import { useSelector } from 'react-redux'
import MomoHeaderScreen from './MomoHeaderScreen'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../MainStyle'
import ImageCarousel from '../../Components/ImageCarousel'
import * as Animatable from 'react-native-animatable';
import AddTeacherList from '../../HomeDetails/AddTeacherList'


const HomeScreen = ({ navigation }) => {
    // const [scrollOffset, setScrollOffset] = useState(0);


    const { ledgerBal } = useSelector(state => state.login)
    const { myStaffData } = useSelector(state => state.login)
    const [refreshing, setRefreshing] = React.useState(false);
    const images = [
        { source: require('../../assets/images/pexels.webp'), text: 'Stydy is key of Success.' },
        { source: require('../../assets/images/pexels1.jpg') },
        { source: require('../../assets/images/pexels-polina.jpg') },
    ];
    const AddUpTeacher = () => navigation.navigate(navigationStrings.AddUPTeacher);
    const TeacherRoute = () => navigation.navigate(navigationStrings.TEACHEROUTE);
    const TeacherTimeLine = () => navigation.navigate(navigationStrings.TEACHERTIMELINE);
    const AddStaffSalary = () => navigation.navigate(navigationStrings.STAFFSALARY);
    const AddInvoice = () => navigation.navigate(navigationStrings.INVOICE);
    const AddJoiningTeacher = () => navigation.navigate(navigationStrings.JOINING);
    const AddSTotaltaff = () => navigation.navigate(navigationStrings.TOTALSTAFF);
    const AddSTotalClass = () => navigation.navigate(navigationStrings.TOTALCLASS);
    const AddBooks = () => navigation.navigate(navigationStrings.BOOKS);
    const teacherList = () => navigation.navigate(navigationStrings.TEACHLIST);

    const totalCount = myStaffData.data.length;

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 500);
      };



    const cardItems = [
        { title: 'Add up Teachers', image: imagePath.icStaff, count: totalCount ? totalCount : 0, onPress: AddUpTeacher, onViewMore: teacherList, },
        { title: 'Teacher Route', image: imagePath.icRoute, count: totalCount ? totalCount : 0, onPress: TeacherRoute, onViewMore: teacherList, },
        { title: 'Teacher Timeline', image: imagePath.icTimeline, count: totalCount ? totalCount : 0, onPress: TeacherTimeLine, onViewMore: teacherList, },
        { title: 'Staff Salary', image: imagePath.icSalary, count: totalCount ? totalCount : 0, onPress: AddStaffSalary, onViewMore: teacherList, },
        { title: 'Invoice generate', image: imagePath.icInvoice, count: totalCount ? totalCount : 0, onPress: AddInvoice, onViewMore: teacherList, },
        { title: 'Add Joining', image: imagePath.icJoining, count: totalCount ? totalCount : 0, onPress: AddJoiningTeacher, onViewMore: teacherList, },
        { title: 'Total Staff', image: imagePath.ictTotal_staff, count: totalCount ? totalCount : 0, onPress: AddSTotaltaff, onViewMore: teacherList, },
        { title: 'Add Class', image: imagePath.icClass, count: totalCount ? totalCount : 0, onPress: AddSTotalClass, onViewMore: teacherList, },
        { title: 'Add Book', image: imagePath.icBook, count: totalCount ? totalCount : 0, onPress: AddBooks, onViewMore: teacherList, },
    ]

    return (
        <View style={{ height: '100%', paddingBottom: 55 }}>
            <ScrollView showsHorizontalScrollIndicator={true}
             refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <LinearGradient colors={['#fff', '#fff']} style={styles.Linearcontainer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, marginRight: 10, marginLeft: 10, }}>
                        <ImageCarousel images={images} />
                    </View>
                    <View style={styles.heading_trending}><Animatable.Text style={styles.headingCss} animation="zoomIn" >Trending Now</Animatable.Text></View>

                    <View style={styles.MainContainer}>
                        {cardItems.map((item, index) => {
                            return (
                                <Animatable.View animation={'fadeInRightBig'} delay={index * 500} duration={1000} key={index} style={styles.card_container}>
                                    <View style={styles.card_main_style}>
                                        <View style={styles.card_decoration}>
                                            <View style={styles.card_inner_decoration}>
                                                <View style={styles.image_main_css}>
                                                    <Image source={item.image} style={styles.image_style} />
                                                </View>
                                                <View style={styles.card_text_main_css}>
                                                    <View style={styles.count_css} onPress={onRefresh}>
                                                        <Text style={styles.countCss}>{item.count}</Text>
                                                        <TouchableOpacity  onPress={item.onViewMore}>
                                                            <Text style={styles.textCss}>View More</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={styles.card_main_css}>
                                                        <TouchableOpacity onPress={item.onPress}>
                                                            <Text style={styles.textCss}>{item.title}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </Animatable.View>
                            )
                        })}
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}
export default HomeScreen