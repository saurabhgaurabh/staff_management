import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { View, Text, StyleSheet, Image, useState, RefreshControl, } from 'react-native'
import styles from './Styles'
import imagePath from '../../constants/imagePath'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {
    const { ledgerBal } = useSelector(state => state.login)
    const { outstanding } = useSelector(state => state.login)
    const [refreshing, setRefreshing] = React.useState(false);
    const goToLedger = () => navigation.navigate(navigationStrings.LEDGER_BALANCE)
    const goToOutstandingPatble = () => navigation.navigate(navigationStrings.OUTSTANDINGPAYBLE)
    const goToTotalSale = () => navigation.navigate(navigationStrings.TOTAL_SALE)
    const gotTotarget = () => navigation.navigate(navigationStrings.TARGET)
    const goToRoutePlan = () => navigation.navigate(navigationStrings.ROUTEPLANS)


    // console.log(ledgerBal[0].AccountLedger.Transactions[0].Balance,"ledgerBal")
    // const lg_balance=()=>{
    //     ledgerBal?.map((item)=>{
    //         item.AccountLedger.Transactions[0].Amount
    //     })
    // }
    let data_array = [
        { label: 'Ledger Balance', image: "https://www.leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToLedger, money: '₹ ' + '8000.00' },
        { label: 'Outstanding Receivable', image: "https://www.leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToOutstandingPatble, money: "₹ 8000.00" },
        { label: 'Total Sale', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToTotalSale, money: "₹ 9652.00" },
        { label: 'Target', image: "https://leadchainsystems.com/images/client/peddleLogo.png", pressButton: gotTotarget, money: "₹ 4529.00" },
        // { label: 'Roots Plan', image: "http://leadchainsystems.com/images/client/peddleLogo.png", pressButton: goToRoutePlan, money: "INR 5523.00" },

    ]
    return (
        <View style={styles.flexContainer}>
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
        </View>
    )
}
export default HomeScreen