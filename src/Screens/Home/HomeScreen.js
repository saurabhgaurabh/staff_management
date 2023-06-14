import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { View, Text, Image, useState, RefreshControl, ScrollView } from 'react-native'
import imagePath from '../../constants/imagePath'
import { useSelector } from 'react-redux'
import MomoHeaderScreen from './MomoHeaderScreen'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../MainStyle'
import ImageCarousel from '../../Components/ImageCarousel'

const HomeScreen = ({ navigation }) => {
    // const [scrollOffset, setScrollOffset] = useState(0);


    const { ledgerBal } = useSelector(state => state.login)
    const { outstanding } = useSelector(state => state.login)
    const [refreshing, setRefreshing] = React.useState(false);
    const images = [
        { source: require('../../assets/images/pexels.webp'), text: 'write caption here' },
        { source: require('../../assets/images/pexels1.jpg') },
        { source: require('../../assets/images/pexels-polina.jpg') },
    ];
    const goToLedger = () => navigation.navigate(navigationStrings.LEDGER_BALANCE)
    const goToOutstandingPatble = () => navigation.navigate(navigationStrings.OUTSTANDINGPAYBLE)
    const goToTotalSale = () => navigation.navigate(navigationStrings.TOTAL_SALE)
    const gotTotarget = () => navigation.navigate(navigationStrings.TARGET)



    let data_array = [
        { label: 'Ledger Balance', image: "https://www.leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToLedger, money: '₹ ' + '8000.00' },
        { label: 'Outstanding Receivable', image: "https://www.leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToOutstandingPatble, money: "₹ 8000.00" },
        { label: 'Total Sale', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToTotalSale, money: "₹ 9652.00" },
        { label: 'Target', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: gotTotarget, money: "₹ 4529.00" },
        { label: 'Target', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: gotTotarget, money: "₹ 4529.00" },
    ]

    return (
        <View style={{ height: '100%', paddingBottom: 55 }}>
            <ScrollView showsHorizontalScrollIndicator={true}>
                <LinearGradient colors={['#8e9eab', '#eef2f3']}
                    style={styles.Linearcontainer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, marginRight: 10, marginLeft: 10, }}>
                        <ImageCarousel images={images} />
                    </View>

                    {/* <View style={styles.MomoHeaderContainer}>
                    {data_array.map((cur, ind) => {
                        const { label, image, pressButton, money } = cur
                        return <View style={styles.FlexBoxOne} key={ind}>
                            <View style={styles.ledgerBalanceImage}>
                                <Image source={{ uri: image }} style={{ width: 90, height: 65 }} alt="Loading" />
                            </View>
                            <View style={styles.ledgerBalanceContent}>
                                <Text onPress={pressButton} style={styles.ledgerbalancetext}>{label}</Text>
                                <Text style={styles.ledgerbalancetext}>{money}</Text>
                            </View>
                        </View>
                    })}

                </View> */}

                    <View style={styles.MainContainer}>
                        <View style={styles.card_container}>
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
                                        </View>
                                        <View style={styles.card_text_main_css}>
                                            <View style={styles.card_main_css}>
                                                <Text style={styles.textCss}>Add up Teachers</Text>
                                            </View>
                                            <View style={styles.count_css}>
                                                <Text style={styles.textCss}>Count(0)</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
                                        </View>
                                        <View style={styles.card_text_main_css}>
                                            <View style={styles.card_main_css}>
                                                <Text style={styles.textCss}>Teacher Route</Text>
                                            </View>
                                            <View style={styles.count_css}>
                                                <Text style={styles.textCss}>Count(0)</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.card_container}>
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                        </View>
                        <View style={styles.card_container}>
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                        </View>
                        <View style={styles.card_container}>
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                        </View>
                        <View style={styles.card_container}>
                            <View style={styles.card_main_style}>
                                <View style={styles.card_decoration}>
                                    <View style={styles.card_inner_decoration}>
                                        <View style={styles.image_main_css}>
                                            <Image source={imagePath.icgoogle} style={styles.image_style} />
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
                        </View>
                    </View>

                </LinearGradient>
            </ScrollView>
        </View>
    )
}
export default HomeScreen