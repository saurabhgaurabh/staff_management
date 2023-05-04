import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, removeMyCartItem, fixMyCartItem, deleteItemFromAddToCart } from '../../redux/MyProductSlice';
import imagePath from '../../constants/imagePath';
import { ServerUrl } from '../../Helper/Helper';
import navigationStrings from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import FinalOrder from './FinalOrder';



const AddCardScreen = () => {

    const LastOrder = () => { navigation.navigate(navigationStrings.FINALORDER) }
    const { cardProduct, ImageAddToCart } = useSelector(state => state.product)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const getTotal = () => {
        let total = 0;
        cardProduct?.map(item => {
            total = total + item.quantity * item.sale_price;
        });
        return total;
    }
    const TotalOfFavItemCount = () => {
        var dataquantity = 0;
        cardProduct?.map((item) => {
            dataquantity = dataquantity + item.quantity
        });
        return dataquantity;
    }

    return (
        <View style={styles.mainContainer}>
            <View>
                <View style={{ height: '100%', paddingTop: 10,paddingBottom: 120 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        style={styles.listsrcsytle}
                        contentContainerStyle={styles.contentContainer}>
                        {cardProduct?.map((item, index) => {
                            return (
                                <View style={styles.layoutStyle} key={index}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Image style={{ height: 70, width: 70, bottom: -15, borderRadius: 50, }} source={{ uri: `${ServerUrl()}${JSON.parse(item.fileName)[0]}` }} />
                                    </View>
                                    <View style={{ paddingTop: 10, flexDirection: 'column' }}>
                                        <Text style={styles.dataStyleCss}>{item.name}</Text>
                                        <Text style={styles.dataStyleCss}>{'₹' + item.sale_price}</Text>
                                        <Text style={styles.dataStyleCss}>{item.gst + '%'}</Text>
                                        <Text style={styles.dataStyleCss}>{'Total: ₹' + item.quantity * item.sale_price}</Text>
                                    </View>
                                    <View style={styles.list_iconstyle_subCss}>
                                        <View style={{ flexDirection: 'row', paddingTop: 10, bottom: 2, paddingLeft: 2, paddingRight: 2 }}>
                                            <TouchableOpacity style={{ position: 'absolute', bottom: 30, paddingLeft: 2, paddingRight: 2 }} onPress={() => dispatch(deleteItemFromAddToCart(item))}>
                                                <Image style={{ height: 25, width: 23 }} source={imagePath.icDeleteItem} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={styles.cartQuantityCss}
                                                onPress={() => {
                                                    if (item.quantity > 1) {
                                                        dispatch(removeMyCartItem(item));
                                                    } else {
                                                        dispatch(fixMyCartItem(item.item_id));
                                                    }
                                                }}>
                                                <Text style={{ color: 'green', fontWeight: 'bold' }}>-</Text>
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: 5, marginRight: 5, paddingTop: 5, fontSize: 15,color: 'black' }}>{item.quantity}</Text>
                                            <TouchableOpacity style={styles.cartQuantityCss}
                                                onPress={() => {
                                                    dispatch(addProductToMyCart({ item_id: item.item_id }));
                                                }}>
                                                <Text style={{ color: 'green', fontWeight: 'bold' }}>+</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            )
                        })}

                    </ScrollView>
                        <View style={styles.footerCartMainCss}>
                            <View style={styles.footerCssForItemStyle}>
                                <Text style={styles.footerCssForItemFont}>{'Total:  ' + '₹' + getTotal()}</Text>
                                <Text style={styles.footerCssForItemFont}>{'Add Items' + ' (' + TotalOfFavItemCount() + ')'}</Text>
                            </View>
                            <View style={styles.footerCssForOrder}>
                                <TouchableOpacity>
                                    <Text onPress={() => {
                                        LastOrder()
                                    }} style={styles.AddCartOrderCss}>Place Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartQuantityCss: {
        borderRadius: 7,
        height: 30,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    layoutStyle: {
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center',
        height: 110,
        backgroundColor: '#E1E2E5',
        marginTop: 10,
        borderRadius: 10,
        elevation: 1,
        paddingLeft: 10,
        paddingTop: 5
    },
    dataStyleCss: {
        fontSize: 16,
        color: 'grey',
        fontWeight: '600',
        paddingTop: 0,
        paddingLeft: 10
    },
    mainContainer: {
        display: 'flex'
    },
    listsrcsytle: {
        display: 'flex',
        height: 60,
    },
    middleContainer: {
        display: 'flex',
    },
    Sub_middle_container: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        paddingTop: 1

    },
    listeditemStyle: {
        color: 'red',
        flexDirection: 'column',
        height: 60,
        width: '100%',
        backgroundColor: '#D5DAD2',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        paddingTop: 20,
        alignItems: 'center',
        marginRight: 10,
        margin: 5,

    },
    list_mainstyle: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 5,
    },
    list_imagestyle: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignContent: 'center',
    },
    list_imagestyle_subCss: {
        flexDirection: 'column',
        width: '23%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 5
    },
    list_datastyle_subCss: {
        flexDirection: 'column',
        width: '40%',
        height: '100%',
        // backgroundColor: 'gray',
    },
    list_iconstyle_subCss: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingLeft: 250,
        paddingBottom: 15,
        alignItems: 'center',
        height: 95,
        marginRight: 20,
        marginLeft: 0,
        position: 'absolute',
    },
    footerCssForItemStyle: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    footerCssForItemFont: {
        color: 'green',
        fontSize: 15,
        fontWeight: 'bold',
    },
    footerCssForOrder: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        backgroundColor: '#ffc932',
        borderRadius: 10
    },
    AddCartOrderCss: {
        fontWeight: 'bold',
        color: 'black',
        // backgroundColor: 'green'
    },
    footerCartMainCss: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        bottom: 50,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
})
export default AddCardScreen
