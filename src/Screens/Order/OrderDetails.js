import React, { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ToastAndroid, Image } from 'react-native'
import { useSelector } from 'react-redux'
import styles from '../MainStyle'
import { ServerUrl } from '../../Helper/Helper'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import numberToWords from 'number-to-words';
import Share from 'react-native-share';





const OrderDetails = () => {
  const orderInfo = useSelector(state => state.login)
  const login = useSelector(state => state.login)
  var date = new Date().toLocaleString()
  var sr_no = 1



  useEffect(() => {
    orderUpdatedValue()
  }, [orderInfo])

  const [newqty, setNewQty] = useState(0)
  const [newMRP, setNewMRP] = useState(0)
  const [newListPrice, setNewListPrice] = useState(0)
  const [newPrice, setNewPrice] = useState(0)
  const [newNetAmount, setNewNetAmount] = useState(0)
  const [newNetPrice, setNewNetPrice] = useState(0)
  const [newPurchasePrice, setNewPurchasePrice] = useState(0)
  const [newSalerice, setNewSalePrice] = useState(0)
  const [newdiscount, setNewDiscount] = useState(0)
  const [newTax, setNewTax] = useState(0)
  const [newSavePrice, setNewSavePrice] = useState(0)
  const orderUpdatedValue = () => {
    var orderQty = 0
    var order_MRP = 0
    var order_list_price = 0
    var order_price = 0
    var order_net_amount = 0
    var order_new_net_price = 0
    var order_new_purchase_price = 0
    var order_new_Sale_price = 0
    var order_new_tax = 0
    var order_discount = 0
    var order_total_save_price = 0

    orderInfo.orderInfo?.map((item) => {
      orderQty = orderQty + item.QTY
      order_MRP = order_MRP + item.MRP * item.QTY
      order_list_price = order_list_price + item.list_price * item.QTY
      order_price = order_price + item.price * item.QTY
      order_net_amount = order_net_amount + item.QTY * item.sale_price
      order_new_net_price = order_new_net_price + item.QTY * item.sale_price - item.discount + item.tax
      order_new_purchase_price = order_new_purchase_price + item.purchase_price * item.QTY
      order_new_Sale_price = order_new_Sale_price + item.sale_price * item.QTY
      order_new_tax = order_new_tax + item.tax * item.QTY
      order_discount = order_discount + (item.sale_price - item.discount) / 100
      order_total_save_price = order_total_save_price + item.MRP * item.quantity - item.sale_price * item.quantity
    })
    setNewQty(orderQty)
    setNewMRP(order_MRP)
    setNewListPrice(order_list_price)
    setNewPrice(order_price)
    setNewNetAmount(order_net_amount)
    setNewNetPrice(order_new_net_price)
    setNewPurchasePrice(order_new_purchase_price)
    setNewSalePrice(order_new_Sale_price)
    setNewTax(order_new_tax)
    setNewDiscount(order_discount)
    setNewSavePrice(order_total_save_price)
  }


  const num_to_words = newNetPrice
  const numInWords = numberToWords.toWords(num_to_words);


  const generatePdf = async () => {
    var name = login.loginData.name;
    var mobile = login.loginData.mobile;
    var email = login.loginData.email;
    var address = login.loginData.address;
    const options = {
      html: `
      <html>
      <head>
      <style>
      body {
          font-family: sans-serif;
          font-size: 10pt;
      }
      p {
          margin: 0pt;
      }
      table.items {
          border: 0.1mm solid #e7e7e7;
      }
      td {
          vertical-align: top;
      }
      .items td {
          border-left: 0.1mm solid #e7e7e7;
          border-right: 0.1mm solid #e7e7e7;
      }
      table thead td {
          text-align: center;
          border: 0.1mm solid #e7e7e7;
      }
      .items td.blanktotal {
          background-color: #EEEEEE;
          border: 0.1mm solid #e7e7e7;
          background-color: #FFFFFF;
          border: 0mm none #e7e7e7;
          border-top: 0.1mm solid #e7e7e7;
          border-right: 0.1mm solid #e7e7e7;
      }
      .items td.totals {
          text-align: right;
          border: 0.1mm solid #e7e7e7;
      }
      .items td.cost {
          text-align: "."center;
      }
      </style>
</head>

<body>
    <table width="100%" style="font-family: sans-serif;" >
          <tr style='padding-bottom:20px'>
              <td width="50%" style="text-align: left;">
                <a href="#" target="_blank"><img src="http://leadchainsense.com/static/media/logo.35b95ac4.png" width="150" height="60" alt="Logo" align="center" border="0"></a>
              </td>
              <td width="50%" style=" text-align: right;">
               <strong> Tax Invoice/Bill of Supply/Cash Memo</strong></br>(Original for Reciepent)
              </td>
            </tr>      
        <tr>
          <td height="10" style="font-size: 0px; line-height: 10px; height: 10px; padding: 0px;">&nbsp;</td>
        </tr>
    </table>


    <table width="100%" style="font-family: sans-serif;" cellpadding="10">
        <tr>
            <td width="50%" style="border: 0; text-align: left;">
               <strong>Sold By</strong>
              <br>
              Leadchain Systems Pvt. Ltd
              <br>
              Express Trade Tower 2,
              <br>
              7th flour, Noida,201301 <br/>
              <a href="http://www.leadchainsystems.com" target="_blank" style="color: #000; text-decoration: none;">LeadchainSystems.com</a>
              <br>
            </td>       
            <td width="50%" style="border: 0; text-align: right;">
              <strong>Billing Address:</strong><br>
              ${name}<br>
              ${mobile}<br>
              ${email}<br/>
              ${address}<br/>
              <strong>State/UT Code: 09</strong>
            </td>
        </tr>
    </table>
    <br><br/>


    <table width="100%" style="font-family: sans-serif;" cellpadding="10">
    <tr>
        <td width="50%" style="border: 0; text-align: left;">
           <strong>Pan No: GTUDO0912V</strong>
           <br>
           GST Registration No: 19AALCA017E1ZY<br><br><br><br><br><br><br>
           <strong>Order Number: </strong> &nbsp; 408-5031103-9141945<br>
           <strong>Order Date: </strong>&nbsp; ${date}
        </td>       
        <td width="50%" style="border: 0; text-align: right;">
          <strong>Shipping Address:</strong><br>
          ${name}<br>
          ${mobile}<br>
          ${email}<br/>
          ${address}<br/>
          <strong>State/UT Code:</strong>&nbsp; 09<br>
          <strong>Place of Supply: </strong>&nbsp; UTTAR PRADESH<br>
          <strong>Place of Delivery: </strong> &nbsp;UTTAR PRADESH<br>
          <strong>Invoice Number: </strong>&nbsp; SGAA-880446<br>
          <strong>Invoice Details: </strong>&nbsp; AS-SGAA-1034-2223<br>
          <strong>Invoice Date: </strong> &nbsp;${date}<br>
        </td>
    </tr>
</table>
    <br>
    <table class="items" width="100%" style="font-size: 14px; border-collapse: collapse;" cellpadding="8">
        <thead>
            <tr bgcolor="#c4c4c4">
                <td width="15%" style="text-align: center;"><strong>Sr. No</strong></td>
                <td width="45%" style="text-align: center;"><strong>Description</strong></td>
                <td width="45%" style="text-align: center;"><strong>Name</strong></td>
                <td width="20%" style="text-align: center;"><strong>Unit Price</strong></td>
                <td width="20%" style="text-align: center;"><strong>Discount</strong></td>
                <td width="20%" style="text-align: center;"><strong>QTY</strong></td>
                <td width="20%" style="text-align: center;"><strong>Net Amount</strong></td>
                <td width="20%" style="text-align: center;"><strong>Tax Rate</strong></td>
                <td width="20%" style="text-align: center;"><strong>Tax Type</strong></td>
                <td width="20%" style="text-align: center;"><strong>Tax Amount</strong></td>
                <td width="20%" style="text-align: center;"><strong>TotalAmount</strong></td>
            </tr>
        </thead>
        <tbody>
              ${orderInfo.orderInfo.map((item) => `
                <tr>
                  <td style='text-align: center'>${sr_no++ + '.'}</td>
                  <td style='text-align: center'>${item.description}</td>
                  <td style='text-align: center'>${item.name}</td>
                  <td style='text-align: center'>${item.net_price}</td>
                  <td style='text-align: center'>${item.discount}</td>
                  <td style='text-align: center'>${item.quantity}</td>
                  <td style='text-align: center'>${item.net_amount}</td>
                  <td style='text-align: center'>${item.gst + '%'}</td>
                  <td style='text-align: center'>${item.tax}</td>
                  <td style='text-align: center'>${item.amount}</td>
                  <td style='text-align: center'>${item.amount}</td>
                </tr>
              `).join('')}
            </tbody>
    </table>

    <table class="items" width="100%",margin-bottom="50px",padding-top="20%" ,background-color="plum">
      <tr>
        <td width="78%"><strong>Total</strong</td>
        <td  width="11%" style='text-align: center' bgcolor="#c4c4c4">${newNetPrice}</td>
      </tr>   
    </table>

    <table class="items" width="100%",margin-bottom="50px",padding-top="20%" ,background-color="plum">
      <tr><td style='text-align: left'><strong>Amount In Words:</strong><br><strong>${numInWords.toUpperCase() + ' ONLY'}</strong</td></tr>   
    </table>

    <table class="items" border="0.5" width="100%",margin-bottom="50px",padding-top="20%" ,background-color="plum">
      <tr><td style='text-align: right'><strong>For Leadchain Systems Pvt. Ltd:</strong><br>
      <strong>Signature</strong><br><strong>Authorised Signatory</strong</td></tr>   
    </table>
    <p>Whether tax is payble under reverse charge - No</p>
    <br>

    <table class="items" width="100%" style="font-size: 14px; border-collapse: collapse;" cellpadding="8">
      <thead>
        <tr bgcolor="#c4c4c4", border="1">
            <td width="15%" style="text-align: center;"><strong>Payment Transaction ID:</strong><br>8AKNSnk900sjklKNKJN</td>
            <td width="45%" style="text-align: center;"><strong>Date & Time: <br></strong>${date}</td>
            <td width="20%" style="text-align: center;"><strong>Invoice value:</strong><br>${newNetPrice}</td>
            <td width="20%" style="text-align: center;"><strong>Mode of Payment:</strong><br>Credit Card</td>
        </tr>
     </thead>
    </table>   
</body>    

      
    </html>`,
      fileName: "Leadchain Invoice",
      directory: "Documents"
    };
    const pdf = await RNHTMLtoPDF.convert(options);

    const shareOptions = {
      title: 'Invoice',
      url: `file://${pdf.filePath}`,
      type: 'application/pdf',
      failOnCancel: false,
    };
    await Share.open(shareOptions);
  };

  return (
    <View style={{ height: '100%', position: 'relative', bottom: 110, width: '100%' }}>
      <ScrollView showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        style={styles.listsrcsytle}>
        <View>
          <Text style={styles.order_summary}>Order Summary</Text>
        </View>
        <View style={styles.OrderSummary}>
          <View style={{ flexDirection: 'column', }}>
            <View><Text style={styles.totalamtCss}>{' Name:       ' + login.loginData.name}</Text></View>
            <View><Text style={styles.totalamtCss}>{' Mobile:      ' + login.loginData.mobile}</Text></View>
            <View><Text style={styles.totalamtCss}>{' E-Mail:       ' + login.loginData.email}</Text></View>
            <View><Text style={styles.totalamtCss}>{' Address:    ' + login.loginData.address}</Text></View>
          </View>

          {orderInfo.orderInfo?.map((item, index) => {
            return (
              <View style={styles.cartMainCss} key={index}>
                <View style={{ flexDirection: 'column' }}>
                  <Image style={{ height: 70, width: 70, bottom: -15, borderRadius: 50, }} source={{ uri: `${ServerUrl()}${JSON.parse(item.fileName)[0]}` }} />
                </View>
                <View style={{ paddingTop: 10, flexDirection: 'column', }}>
                  <Text style={styles.dataStyleCss}>{item.name}</Text>
                  <Text style={styles.dataStyleCss}>{'₹' + item.sale_price}</Text>
                  <Text style={styles.dataStyleCss}>{item.gst + '%'}</Text>
                  <Text style={styles.dataStyleCss}>{'Total: ₹' + item.quantity * item.sale_price}</Text>
                </View>
              </View>
            )
          })}

          <View style={styles.PriceDetailsCss}>
            <View style={{ width: '50%', justifyContent: 'space-evenly', alignItems: 'flex-start', paddingHorizontal: 13, }}>
              <Text style={{ color: 'black' }}>{'Price' + ' (' + newqty + ' items)'}</Text>
              <Text style={{ color: 'black', }}>{'Save Price'}</ Text>
              <Text style={{ color: 'black' }}>Delivery Charges</Text>
              <Text style={{ color: 'black' }}>Tax</Text>
              <Text style={{ fontWeight: 'bold' }}>Total Amount</Text>
            </View>
            <View style={{ width: '50%', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 13, }}>
              <Text style={{ color: 'black' }}>{'₹' + newNetAmount}</Text>
              <Text style={{ color: 'black' }}>{'₹' + newSavePrice}</Text>
              <Text style={{ color: 'green', textDecorationLine: 'underline' }}>Free Delivery</Text>
              <Text style={{ color: 'black' }}>not available</Text>
              <Text style={{ color: 'black', }}>{'₹' + newNetAmount}</Text>
            </View>
          </View>
        </View>

      </ScrollView >

      <View style={styles.CheckoutfooterCartMainCss}>
        <View style={styles.footerCssForItemStyle}>
          <Text style={styles.footerCssForItemTotal}>{'Total ₹' + newNetAmount}</Text>
        </View>
        <View style={styles.footerCssForOrder}>
          <TouchableOpacity>
            <Text onPress={() => {
              if (generatePdf()) {
                ToastAndroid.show('Pdf Generated Successfully', ToastAndroid.SHORT);
              }
            }} style={styles.AddCartOrderScc}>Share PDF</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default OrderDetails