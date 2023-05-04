import { StyleSheet, Text, View, Button, TextInput, Picker, ScrollView, TouchableOpacity, Image, ImageBackground, Pressable, SafeAreaView, RefreshControl, BackHandler } from 'react-native'
import React, { useEffect, useState, useCa } from 'react';
import navigationStrings from '../../constants/navigationStrings';
import { SelectList } from 'react-native-dropdown-select-list'
import { categoriesProduct, SubCategoryItem } from '../../Components/categoriesProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, addProductToFavorite, deleteItemFromFavoriteItem, removeMyCartItem, fixMyCartItem } from '../../redux/MyProductSlice';
import styles from '../MainStyle';
import imagePath from '../../constants/imagePath';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { ServerUrl } from '../../Helper/Helper';



const OrderScreen = ({ navigation }) => {

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }




    const onRefresh = () => {
        orderItemsApi()
    };

    const [refreshing, setRefreshing] = React.useState(false);
    const { cardProduct } = useSelector(state => state.product)
    const { favoriteProduct } = useSelector(state => state.product)
    const { loginData } = useSelector(state => state.login)

    const dispatch = useDispatch();
    const getTotal = () => {
        let total = 0;
        itemData?.map(item => {
            total = total + item.quantity * item.MRP;
        });
        return total;
    }
    const [selected, setSelected] = useState("");
    const handelSelect = (data) => {
        setSelected(data)
    }
    const TotalOfFavItemCount = () => {
        var dataQty = 0;
        cardProduct?.map((item) => {
            dataQty = dataQty + item.quantity
        });
        return dataQty;
    }
    const TotalAmountOfFavItemCount = () => {
        var dataQty = 0;
        cardProduct?.map((item) => {
            dataQty = dataQty + item.quantity * item.sale_price
        });
        return dataQty;
    }
    const TotalSaveAmountOfFavItemCount = () => {
        var dataQty = 0;
        cardProduct?.map((item) => {
            dataQty = dataQty+ item.MRP * item.quantity
        });
        return dataQty;
    }

    const addtocart = () => { navigation.navigate(navigationStrings.ADDTOCART) }

    const CallFavIcan = (item) => {
        var isFav = false
        favoriteProduct?.map((val) => {
            if (val.item_id == item.item.item_id) { isFav = true }
        })
        if (isFav) {
            return (
                <View >
                    <TouchableOpacity onPress={() => {
                        dispatch(deleteItemFromFavoriteItem(item.item))
                    }}>
                        <Image style={{ height: 26, width: 26 }} source={imagePath.icfavForRemove} />
                    </TouchableOpacity>
                </View>
            )

        } else {
            return (
                <View >
                    <TouchableOpacity onPress={() => {
                        dispatch(addProductToFavorite(item.item))
                    }}><Image style={{ height: 25, width: 25 }} source={imagePath.icAddfavorite} />
                    </TouchableOpacity>
                </View>
            )
        }
    }
    const CallAddToCart = (item) => {
        var isCartItem = false
        cardProduct?.map((val) => {
            if (val.item_id == item.item.item_id) { isCartItem = true }
        })
        if (isCartItem) {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.increaseQtyCss}
                        onPress={() => {
                            dispatch(removeMyCartItem({ item_id: item.item.item_id }));
                        }}>
                        <Text style={styles.increaseQtyColor}>-</Text>
                    </TouchableOpacity>
                    {
                        cardProduct?.map((ele, index) => {
                            if (ele.item_id == item.item.item_id) {
                                return (
                                    <View key={index}>
                                        <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 15, paddingTop: 4, color: 'black' }}>{ele.quantity}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                    <TouchableOpacity style={styles.increaseQtyCss}
                        onPress={() => {
                            dispatch(addProductToMyCart({ item_id: item.item.item_id }));
                        }}>
                        <Text style={styles.increaseQtyColor}>+</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }} >
                    <TouchableOpacity style={styles.addToCartCss}
                        onPress={() => {
                            dispatch(addProductToMyCart(item.item))
                        }}>
                        <Text style={{ color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    // const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState('')
    const [itemData, setitemData] = useState([]);
    const [filterdata, setFilterData] = useState([]);
    const [Categorydata, setCategorydata] = useState([]);
    const [filteredItemCategory, setFilteredItemCategory] = useState([])
    const mappData = Categorydata?.map(item => {
        return { key: item.category_id, value: item.category_name }
    });


    const orderItemsCategoryApi = async () => {
        try {
            setRefreshing(true);
            const response = await fetch(`${ServerUrl()}fetch_item_category/${loginData.user_id}`, {
                method: 'get',
                'headers': {
                    'Authorization': `Bearer ${loginData.token}`,
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            setRefreshing(false);
            setCategorydata(result.resp)
            result.resp?.map((item, index) => {
                setFilteredItemCategory([...filteredItemCategory, { key: index + 1, value: item.category_name }])
            })
        } catch (error) {
            alert('Category Item Not Found.')
        }
    }

    const orderItemsApi = async () => {
        try {
            setRefreshing(true);
            const response = await fetch(`${ServerUrl()}fetch_items/${loginData.user_id}`, {
                method: 'get',
                'headers': {
                    'Authorization': `Bearer ${loginData.token}`,
                    'Content-Type': 'application/json',
                },
            })
            const result = await response.json();
            setRefreshing(false);
            setFilterData(result.resp)
            setitemData(result.resp)
            setSelected('')
        } catch (error) {
            alert('Data Not Found.')
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = filterdata?.filter((item) => {
                const ItemDataa = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return ItemDataa.indexOf(textData) > -1;
            });
            setitemData(newData)
            setSearch(text);
        } else {
            // setFilterData(filterdata)
            orderItemsApi()
            setSearch(text);
        }
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    useEffect(() => {
        orderItemsCategoryApi(),
            orderItemsApi()
    }, []);

    return (

        <View style={{ height: '100%' }}>
            <ScrollView
                contentContainerStyle={styles.Container}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={styles.headerContainer}>
                    <View style={styles.header_left_box}>
                        <SelectList
                            setSelected={(e) => handelSelect(e)}
                            data={mappData}
                            save="key"
                            placeholder='Select Item'
                            notFoundText ="Not Found"
                            // maxHeight={200}
                            // dropdownStyles={{ backgroundColor: 'lightgray' }}
                        />
                    </View>
                    <View style={styles.header_right_box}>
                        <TextInput
                            onChangeText={(text) => searchFilter(text)}
                            value={search}
                            placeholder="Search Item"
                            placeholderTextColor={'grey'}
                            notFoundText ="Not Found"
                        />
                    </View>
                </View>
                <View style={{
                }}>
                    <ScrollView
                        horizontal
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        style={styles.scrcontainer}
                        contentContainerStyle={styles.contentContainer}>
                        {Categorydata?.map((item, index) => {
                            return (
                                <View style={styles.middleContainer} key={index} onPress={() => handelSelect(item.category_id)}>
                                    <View style={styles.Sub_middle_container}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.inner_container_style_for_first_row}>
                                                <ImageBackground style={styles.CategoryitemImagesCss} source={{ uri: `${ServerUrl()}${item.fileName}` }} >
                                                    <Text style={styles.sub_category_text} onPress={() => handelSelect(item.category_id)} >{item.category_name}</Text>
                                                </ImageBackground>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{
                    paddingTop: 90,
                    bottom: 95
                }} >
                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        style={styles.listsrcsytle}
                    >
                        {itemData?.map((item, index) => {
                            if (selected) {
                                if (selected == item.category_id) {
                                    return (
                                        <View style={styles.middleContainer} key={index}>
                                            <View style={styles.Sub_middle_container}>
                                                <View style={styles.list_mainstyle}>
                                                    <View style={styles.listeditemStyle}>
                                                        <View style={styles.list_imagestyle}>
                                                            <View style={styles.list_imagestyle_subCss}>
                                                                {/* <Image style={{ height: 70, width: 70 }} source={{
                                                                }} alt="Loading" /> */}
                                                                <Image style={styles.order_itemImagesCss} source={{ uri: `${ServerUrl()}${JSON.parse(item.fileName)[0]}` }} />
                                                            </View>
                                                            <View style={styles.list_datastyle_subCss}>
                                                                <Text style={{ fontWeight: 'bold', color: 'grey' }}>{item.name.toUpperCase().substring(0, 15) + '...'}</Text>
                                                                <Text style={{ paddingRight: 50, color: 'grey' }}>{'₹' + item.sale_price}</Text>
                                                                <Text style={{ paddingRight: 50, color: 'grey' }}>{item.gst + '%'}</Text>
                                                            </View>
                                                            <View style={styles.list_iconstyle_subCss}>
                                                                <View style={styles.fav_Css}>
                                                                    < CallFavIcan item={item} />
                                                                </View>
                                                                <View style={styles.add_Css}>
                                                                    <CallAddToCart item={item} />
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                            }
                            else {
                                return (
                                    <View style={styles.middleContainer} key={index}>
                                        <View style={styles.Sub_middle_container}>
                                            <View style={styles.list_mainstyle}>
                                                <View style={styles.listeditemStyle}>
                                                    <View style={styles.list_imagestyle}>
                                                        <View style={styles.list_imagestyle_subCss}>
                                                            <Image style={{ height: 70, width: 70 }} source={{
                                                            }} alt="Loading" />
                                                            <Image style={styles.order_itemImagesCss} source={{ uri: `${ServerUrl()}${JSON.parse(item.fileName)[0]}` }} />
                                                        </View>
                                                        <View style={styles.list_datastyle_subCss}>
                                                            <Text style={{ fontWeight: 'bold', color: 'grey' }}>{item.name.toUpperCase().substring(0, 15) + '...'}</Text>
                                                            <Text style={{ paddingRight: 50, color: 'grey' }}>{'₹' + item.sale_price}</Text>
                                                            <Text style={{ paddingRight: 50, color: 'grey' }}>{item.gst + '%'}</Text>
                                                        </View>
                                                        <View style={styles.list_iconstyle_subCss}>
                                                            <View style={{ position: 'absolute', flexDirection: 'row', bottom: 80, paddingLeft: 100 }}>
                                                                < CallFavIcan item={item} />
                                                            </View>
                                                            <View style={{ position: 'absolute', flexDirection: 'row', bottom: 10, paddingLeft: 100 }}>
                                                                <CallAddToCart item={item} />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        })}
                    </ScrollView>
                </View >
            </ScrollView>
            {cardProduct.length > 0 ? (
                <View style={styles.footer_item_Css}>
                    <View style={{ flexDirection: 'column', width: '40%' }}>
                        <Text style={styles.submitbuttonforOrder} onPress={addtocart}>{TotalOfFavItemCount() + '  items'}</Text>
                        <Text style={styles.submitbuttonforOrder} onPress={addtocart}>{'₹' + TotalAmountOfFavItemCount()}</Text>
                        <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', paddingHorizontal: 35, bottom: 10 }}>{'₹' + TotalSaveAmountOfFavItemCount()} </Text>
                    </View>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={styles.addcardstyle} onPress={addtocart}>{'View Cart'} &#x27A4;</Text>
                    </View>
                </View>
            ) : null}
        </View >

    )
}

export default OrderScreen

