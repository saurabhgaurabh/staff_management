import { StyleSheet, View, Text, Button, TouchableOpacity, PermissionsAndroid, Platform, SafeAreaView, StatusBar, ScrollView, Image, RefreshControl, BackHandler } from 'react-native';
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyCartItem, removeMyCartItem, deleteItemFromFavoriteItem, cardProduct } from '../../redux/MyProductSlice';
import imagePath from '../../constants/imagePath';
import { ServerUrl } from '../../Helper/Helper';
import { useNavigation } from '@react-navigation/native';


const FavoriteScreen = () => {
    const navigation =  useNavigation();
    const [userlist, setUserlist] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch();
    const { favoriteProduct } = useSelector(state => state.product)

    const getTotal = () => {
        let total = 0;
        favoriteProduct?.map(item => {
            total = total + item.quantity * item.sale_price;
        });
        return total;
    }
    const onRefresh = () => {
        favoriteProduct
    };
      
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
        <View style={styles.mainContainer}>
            <View>
                <View style={{ height: '100%', paddingTop: 120,bottom: 110 }}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        style={styles.listsrcsytle}
                        contentContainerStyle={styles.contentContainer}>
                        {favoriteProduct?.map((item, index) => {
                            return (
                                <View style={styles.layoutStyle} key={index}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Image style={{ height: 70, width: 70, borderRadius: 10, bottom: -10 }} source={{ uri: item.image }} />
                                        <Image style={{ height: 70, width: 70, bottom: 55 }} source={{ uri: `${ServerUrl()}${JSON.parse(item.fileName)[0]}` }} />
                                    </View>
                                    <View style={{ paddingTop: 10, flexDirection: 'column' }}>
                                        <Text style={styles.dataStyleCss}>{item.name}</Text>
                                        <Text style={styles.dataStyleCss}>{'₹' + item.sale_price}</Text>
                                        <Text style={styles.dataStyleCss}>{'' + item.gst + '%'}</Text>
                                        <Text style={styles.dataStyleCss}>{'Total: ₹' + item.sale_price * item.quantity}</Text>
                                        <View style={{ flexDirection: 'column', }}>
                                            <TouchableOpacity style={{ position: 'absolute', bottom: 45, paddingLeft: 206 }} onPress={() => { dispatch(deleteItemFromFavoriteItem(item)) }}>
                                                <Image style={{ height: 25, width: 23 }} source={imagePath.icDeleteItem} /></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}

                    </ScrollView>
                    {favoriteProduct.length > 0 ? (
                        <View style={styles.footerCss}>
                            <View style={styles.footerCssForItemStyle}>
                                <Text style={styles.favoriteSrcFooterTotal}>{'Added Items' + '(' + favoriteProduct.length + ')'}</Text>
                            </View>
                            <View style={styles.footerCssForItemStyle}>
                                <Text style={styles.favoriteSrcFooterTotal}>{'Total:  ' + '₹' + getTotal()}</Text>
                            </View>
                        </View>
                    ) : null}

                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
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
        paddingTop: 4,
        bottom: 15
    },
    dataStyleCss: {
        fontSize: 16,
        color: '#000',
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
    },
    list_iconstyle_subCss: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        height: 95,
        marginRight: 20,
        marginLeft: 0,
    },
    footerCss: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        bottom: -60,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    footerCssForItemStyle: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    favoriteSrcFooterTotal: {
        fontWeight: 'bold',
        color: 'green'
    }
})
export default FavoriteScreen