import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { addProductToMyCart, removeMyCartItem, fixMyCartItem } from '../../redux/MyProductSlice';
import { profileUpdate } from '../../redux/MyLoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../MainStyle'
import { ServerUrl } from '../../Helper/Helper';
import Timeline from 'react-native-timeline-flatlist'
import navigationStrings from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import { orderDetailsToView } from '../../redux/MyLoginSlice';

const FinalOrder = () => {
  const navigation = useNavigation();
  const OrderDetails = () => { navigation.navigate(navigationStrings.ORDERDETAILS) }
  const dispatch = useDispatch();
  const { cardProduct } = useSelector(state => state.product)
  const login = useSelector(state => state.login)
  const orderInfo = useSelector(state => state.login)


  useEffect(() => {
    calculation()
  }, [cardProduct])
  const [discountPersentage, setdiscountPersentage] = useState(0)
  const [TotalAmount, setTotalAmount] = useState(0)
  const [TotalQty, setTotalQty] = useState(0)
  const [TotalDiscount, setTotalDiscount] = useState(0)
  const [TotalTax, setTotalTax] = useState(0)
  const [TotalSavePrice, setTotalSavePrice] = useState(0)
  const calculation = () => {
    var qty = 0
    var ttl_amount = 0
    var save_price = 0
    var ttl_tax = 0
    var ttl_discount = 0
    var ttl_discount_in_persentage = 0

    cardProduct?.map((item, index) => {

      ttl_amount = ttl_amount + (item.quantity * item.sale_price)
      qty = qty + item.quantity
      save_price = save_price + item.MRP * item.quantity - item.sale_price * item.quantity
      ttl_tax = ttl_tax + item.discount * item.quantity
      ttl_discount = ttl_discount + item.discount * item.quantity
      ttl_discount_in_persentage = (item.sale_price - item.discount) / 100
      // setTotal(total - item.sale_price * item.quantity / 100 + item.sale_price * item.quantity) // amount after reduce gst
    })
    setTotalAmount(ttl_amount)
    setTotalQty(qty) // total quantity of items
    setTotalSavePrice(save_price) // total  save price
    setTotalTax(ttl_tax)  // total tax
    setTotalDiscount(ttl_discount) // total discount
    setdiscountPersentage(ttl_discount_in_persentage) // discount in persentage
  }

  const newData = cardProduct.map(obj => {
    return {
      ...obj,
      net_price: obj.quantity * obj.sale_price,
      amount: obj.quantity * obj.sale_price,
      net_amount: obj.quantity * obj.sale_price,
      QTY: obj.quantity,
      price: (obj.quantity * obj.sale_price),
      discount_persentage: discountPersentage,
      tax: '',
    };
  });

  var date = new Date().toLocaleString()

  const placeOrderAPi = async () => {
    try {
      const response = await fetch(`${ServerUrl()}create_order`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderDetails: {
            order_date: date,
            numberingType: "1",
            order_Number: '',
            customer_id: login.loginData.user_id,
            godown: "1",
            narration: "narration",
            description: "desription"
          },
          items: newData,
          charges: [],
          netPayableAmount: TotalAmount,
          total_amount: TotalAmount,
          bill_amount: TotalAmount,
          total_price: TotalAmount,
          total_qty: TotalQty,
          total_charges: "0",
          user_id: login.loginData.user_id,
          total_discount: TotalDiscount,
          total_tax: TotalTax,
          items_total_amount: TotalQty,
        })
      });
      const result = await response.json();
      if (result) {
        ToastAndroid.show('You Have Successfully Order', ToastAndroid.SHORT)
        dispatch(orderDetailsToView(newData))
      } else {
        alert('No Data Found')
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View style={styles.FinalOrderScrMainContainer}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          style={styles.listsrcsytle}
        // contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.orderDeliverAddressCss} >
            <View style={{ width: '50%', justifyContent: 'space-evenly', alignItems: 'flex-start', paddingHorizontal: 13, }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>{'Deliver To:'} </Text>
              <Text style={{ color: 'black', }}>{login.loginData.name} </ Text>
              <Text style={{ color: 'black' }}>{login.loginData.address}</Text>
              <Text style={{ fontWeight: 'bold' }}>{login.loginData.mobile}</Text>
            </View>
          </View>

          {cardProduct?.map((item, index) => {
            return (
              <View style={styles.cartMainCss} key={index}>
                <View style={{ flexDirection: 'column' }}>
                  <Image style={{ height: 70, width: 70, bottom: -15, borderRadius: 50, }} source={{ uri: `${ServerUrl()}${JSON.parse(item.fileName)[0]}` }} />
                </View>
                <View style={{ paddingTop: 10, flexDirection: 'column' }}>
                  <Text style={styles.dataStyleCss}>{item.name}</Text>
                  <Text style={styles.dataStyleCss}>{'₹' + item.sale_price}</Text>
                  <Text style={styles.dataStyleCss}>{item.gst + '%'}</Text>
                  <Text style={styles.dataStyleCss}>{'Total: ₹' + item.quantity * item.sale_price}</Text>
                </View>
                <View style={styles.QtyMainCss}>
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
                  <Text style={{ marginLeft: 5, marginRight: 5, paddingTop: 5, fontSize: 15 ,color: 'black',}}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.cartQuantityCss}
                    onPress={() => {
                      dispatch(addProductToMyCart({ item_id: item.item_id }));
                    }}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}

          <View style={styles.PriceDetailsCss}>
            <View style={{ width: '50%', justifyContent: 'space-evenly', alignItems: 'flex-start', paddingHorizontal: 13, }}>
              <Text style={{ color: 'black' }}>{'Price' + ' (' + TotalQty + ' items)'}</Text>
              <Text style={{ color: 'black', }}>{'Save Price'}</ Text>
              <Text style={{ color: 'black' }}>Delivery Charges</Text>
              <Text style={{ fontWeight: 'bold' }}>Total Amount</Text>
            </View>
            <View style={{ width: '50%', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 13, }}>
              <Text style={{ color: 'black' }}>{'₹' + TotalAmount}</Text>
              <Text style={{ color: 'green' }}>{'₹' + TotalSavePrice}</Text>
              <Text style={{ color: 'green', textDecorationLine: 'underline' }}>Free Delivery</Text>
              <Text style={{ color: 'green', }}>{'₹' + TotalAmount}</Text>
            </View>
          </View>
        </ScrollView>




      </View>
      <View style={styles.footerCartMainCss}>
        <View style={styles.footerCssForItemStyle}>
          <Text style={styles.footerCssForItemTotal}>{'Total ₹' + TotalAmount}</Text>
        </View>
        <View style={styles.footerCssForOrder}>
          <TouchableOpacity>
            <Text onPress={() => {
              placeOrderAPi(),
                OrderDetails()
            }} style={styles.AddCartOrderScc}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default FinalOrder