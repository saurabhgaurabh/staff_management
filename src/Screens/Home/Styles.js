import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        height: '69%',
        width: '95%',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'column',
        paddingTop: 10,
        marginLeft: 5,
    },
    FlexBoxOne: {
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#E1E2E5",
        // borderWidth: 1.8,
        borderColor: 'gray',
        width: '100%',
        height: '85%',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexShrink: 1,
    },
    ledgerBalanceImage: {
        width: '40%',
        alignItems: 'center',
    },
    ledgerBalanceContent: {
        height: '100%',
        width: '50%',
        color: 'green',
        justifyContent: 'center',
    },
    ledgerbalancetext: {
        color: '#000',
        fontSize: 12.5,
        marginLeft: 35,
    },
    btnstyle: {
        backgroundColor: 'gray',
        margin: 10,
        alignItems: 'center'
    },
    userItem: {
        width: 350,
        backgroundColor: '#3EB489',
        margin: 10,
        // height: 100
        alignContent: 'center',
        // alignItems: 'center',
        padding: 10,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        height: 100

    },
    downview:{
        width: 100,
        height: 50,
        // backgroundColor: '#f2f2f2',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        flexDirection: 'row',
        // paddingHorizontal: 20,
        marginRight: 15,
        paddingTop: 10
    },
    icon:{width: 20,height: 20,}
})

export default styles