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
    const { outstanding } = useSelector(state => state.login)
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



    // let data_array = [
    //     { label: 'Ledger Balance', image: "https://www.leadchainsystems.com/images/client/peddleLogo.png", pressButton: addUpTeacher, money: '₹ ' + '8000.00' },
    //     { label: 'Outstanding Receivable', image: "https://www.leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToOutstandingPatble, money: "₹ 8000.00" },
    //     { label: 'Total Sale', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToTotalSale, money: "₹ 9652.00" },
    //     { label: 'Target', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: gotTotarget, money: "₹ 4529.00" },
    //     { label: 'Target', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: gotTotarget, money: "₹ 4529.00" },
    // ]

    return (
        <View style={{ height: '100%', paddingBottom: 55 }}>
            <ScrollView showsHorizontalScrollIndicator={true}>
                <LinearGradient colors={['#9f9bd4', '#d6d3e8']} style={styles.Linearcontainer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, marginRight: 10, marginLeft: 10, }}>
                        <ImageCarousel images={images} />
                    </View>

                    {/* <View  style={styles.MomoHeaderContainer}>
                    {data_array.map((cur, ind) => {
                        const { label, image, pressButton, money } = cur
                        return <Animatable.View animation={'pulse'} duration={1000} delay={ind * 100} style={styles.FlexBoxOne} key={ind}>
                            <View style={styles.ledgerBalanceImage}>
                                <Image source={{ uri: image }} style={{ width: 90, height: 65 }} alt="Loading" />
                            </View>
                            <View style={styles.ledgerBalanceContent}>
                                <Text onPress={pressButton} style={styles.ledgerbalancetext}>{label}</Text>
                                <Text style={styles.ledgerbalancetext}>{money}</Text>
                            </View>
                        </Animatable.View>
                    })}
                </View> */}

                    <View style={styles.heading_trending}><Animatable.Text style={styles.headingCss} animation="zoomIn" >Trending Now</Animatable.Text></View>
                    <Animatable.View animation={'fadeInUp'} duration={1000} delay={100} style={styles.MainContainer}>
                        <View style={styles.card_container}>
                            <TouchableOpacity onPress={AddUpTeacher}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icStaff} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Animatable.Text animation="zoomInUp" style={styles.textCss}>Add up Teachers</Animatable.Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                    <TouchableOpacity onPress={teacherList}>
                                                        <Text style={styles.textCss}>View More</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={TeacherRoute}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icRoute} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Teacher Route</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                    <Text style={styles.textCss}>View More</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card_container}>
                            <TouchableOpacity onPress={TeacherTimeLine}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icTimeline} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Teacher Timeline</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={AddStaffSalary}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icSalary} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Staff Salary</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card_container}>
                            <TouchableOpacity onPress={AddInvoice}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icInvoice} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Invoice generate</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={AddJoiningTeacher}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icJoining} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Add Joining</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card_container}>
                            <TouchableOpacity onPress={AddSTotaltaff}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.ictTotal_staff} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Total Staff</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={AddSTotalClass}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icClass} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Add Class</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card_container}>
                            <TouchableOpacity onPress={AddBooks}>
                                <View style={styles.card_main_style}>
                                    <View style={styles.card_decoration}>
                                        <View style={styles.card_inner_decoration}>
                                            <View style={styles.image_main_css}>
                                                <Image source={imagePath.icBook} style={styles.image_style} />
                                            </View>
                                            <View style={styles.card_text_main_css}>
                                                <View style={styles.card_main_css}>
                                                    <Text style={styles.textCss}>Add Book</Text>
                                                </View>
                                                <View style={styles.count_css}>
                                                    <Text style={styles.textCss}>Count(0)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}
export default HomeScreen