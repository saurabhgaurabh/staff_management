// import { View, Text, TouchableOpacity, Touchable, Image } from 'react-native'
// import React from 'react'
// import { StyleSheet } from 'react-native'
// // import styles from '../Screens/Home/Styles'
// import { useNavigation } from '@react-navigation/native'
// import imagePath from '../constants/imagePath'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// // import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import { faArrowLeft, faArrowLeftLong, faCoffee } from '@fortawesome/free-solid-svg-icons'


// const HeaderComp = (
// //   {
// //   goBack, text,
// // }
// ) => {
//   const navigation = useNavigation()
//   return (
//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }} >
//       {/* <Text style={{alignItems: 'center',paddingTop: 5,width: 40}}> ↩</Text> */}
//       <View style={{ height: 35 }}>

//       </View>
//       {!!goBack ? <TouchableOpacity
//         onPress={!!goBack ? goBack : () => navigation.goBack()} >
//         <FontAwesomeIcon style={{alignItems: 'center',paddingLeft: 40,paddingTop: 30,alignItems: 'center',justifyContent: 'center'}} icon={faArrowLeft} />
//         <Text style={{paddingLeft: 10,}}></Text>


//       </TouchableOpacity> : <Text />}
//       {/* <Text>{text}</Text> */}
//     </View>
//   )
// }

// // function HeaderComp() {
// //   return (
// //     <View style={styles.header}>
// //       <View style={styles.headertext}>GameZone</View>
// //     </View>
// //   )
// // }

// const styles = StyleSheet.create({
//   header: {
//     height: '100%',
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//   },
//   headertext:{
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: '#333',
//     letterSpacing: 1
//   }
// })

// export default HeaderComp