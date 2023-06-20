import { StyleSheet } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import { responsiveHeight } from "react-native-responsive-dimensions";


const styles = StyleSheet.create({
    //////////////////////   intro page properties /  / /////////
    background: {
        flex: 1,
        resizeMode: 'cover',
        // Opacity: 0.4
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        paddingBottom: 180
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        display: 'flex',
        width: '90%',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        opacity: 0.2
    },
    upper_txt: {
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    sub_upper_txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    main_screen_footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        bottom: 10,
    },
    main_screen_footer_division: {
        flexDirection: 'column',
    },
    summary_property: {
        fontWeight: 'bold',
        color: 'white'
    },
    sign_in_property: {
        fontWeight: 'bold',
        color: 'white'
    },
    cont_with_goolge_logo: { flexDirection: 'column', backgroundColor: '#fff', height: 45, justifyContent: 'center', alignItems: 'center', width: '25%' },
    cont_with_fb: { flexDirection: 'column', backgroundColor: '#4285F4', height: 45, justifyContent: 'center', alignItems: 'center', width: '75%', },
    cont_with_goolge: { flexDirection: 'column', backgroundColor: '#FF3D3D', height: 45, justifyContent: 'center', alignItems: 'center', width: '75%', },
    cont_with_new_acc: { flexDirection: 'column', backgroundColor: '#32CD32', height: 45, justifyContent: 'center', alignItems: 'center', width: '100%', },
    goole_properties: { height: '70%', width: '45%' },
    networking_container: { flexDirection: 'row', backgroundColor: '#98FB98', width: '100%', borderRadius: 10, },
    networking_txt: { fontSize: 17, color: '#fff', fontWeight: 'bold' },
    ////////////// Intro Page Properties  end //////////////////////


    //////////  login page css  start /////////
    Linearcontainer: {
        flex: 1,
        // height: '100%'
    },
    formContainer: {
        display: 'flex',
        // backgroundColor: '#6441A5',
    },
    headingContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text_css_heading: {
        fontSize: 35,
        paddingHorizontal: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#2193b0',
    },
    logoCss: {
        width: '50%',
        height: 180,
    },
    formbodycss: {
    },
    FlexBoxOne: {
    },
    MainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // height: '100%'
    },
    heading_trending: { flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, padding: 10 },
    headingCss: { fontSize: 22, fontWeight: 'bold' , fontStyle: 'italic'},
    card_container: { flexDirection: 'row' },
    card_main_style: { flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', },
    card_decoration: { height: 120, width: 160, borderRadius: 10, margin: 5, borderWidth: 0, opacity: 0.9, shadowOpacity: 1, shadowRadius: 30.00, elevation: 3, },
    card_inner_decoration: { backgroundColor: '#fff', flexDirection: 'column', height: '100%', width: '100%', justifyContent: 'center', alignContent: 'center', alignSelf: 'center', borderRadius: 10 },
    image_main_css: { flexDirection: 'row', width: '100%', height: '50%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' },
    image_style: { height: 40, width: 50 },
    card_text_main_css: { flexDirection: 'row', width: '100%', height: '50%', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' },
    card_main_css: { flexDirection: 'column', width: '50%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
    count_css: { flexDirection: 'column', width: '50%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
    textCss: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black'
    },
    MomoHeaderContainer: {
        // top: 15
    },
    form_field_container: {
        width: '100%',
        // backgroundColor: '#3d72b4',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    passwordContainer: {
        paddingHorizontal: 15

    },
    forgerPasswordCss: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end'
    },
    inputCss: {
        margin: 10,
        fontSize: 15
    },
    loginCss: {
        width: '92%',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // height: '15%',
        margin: 20,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
    },
    footerEvents: {
        width: '92%',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // height: '15%',
        margin: 20,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        position: 'absolute',
        bottom: -20
    },
    submitbuttontext: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    notificationContainer: {
        backgroundColor: 'green',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 20,
        alignItems: 'center',
    },
    notificationText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        fontStyle: 'italic',
    },
    // formbodycss: { borderRightColor: '#A594F9', height: '55%', alignItems: 'center', width: '90%', alignContent: 'center', alignSelf: 'center' , borderRadius: 50,borderWidth: 2, borderColor: 'grey'},

    //////////  login page css  end /////////



    //////////  Home Screen page css  start /////////

    MomoHeaderContainer: {
        flex: 1
    },
    header: {
        position: 'absolute',
        width: '100%',
        height: 136,
        backgroundColor: 'red'
    },
    MomoHeaderContainer: {
        flex: 1
    },
    //////////  Home Screen page css  end /////////



    // profile screen css properties start...
    profileHeading:{fontStyle: 'italic', flexWrap: 'wrap', fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: '#7c79b0', },
    profileHeading_second:{ fontStyle: 'italic', flexWrap: 'wrap', fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: '#7c79b0',paddingTop: 25 },
    profile_header_component: {
        flexDirection: 'column', height: 250, width: '100%', borderRadius: 10,
 
    },
    profile_img_css: { flexDirection: 'row', width: '100%', height: '50%', borderTopRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', alignSelf: 'center', alignContent: 'center', alignItems: 'center' },
    profile_info: {  flexDirection: 'column', width: '100%', height: '50%', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, justifyContent: 'center', alignSelf: 'center', alignContent: 'center', alignItems: 'center', },
    profile_info_css:{ flexDirection: 'row', justifyContent: 'center' },
    linearCss:{ flex: 1, width: '100%', borderRadius: 10 },
    img_size: { height: '100%', width: '40%' },
    profileText:{fontStyle: 'italic', fontStyle: 'italic',fontWeight: 'bold', fontSize: 20, color: '#fff'},
    profile_menu: { flexDirection: 'column', width: '100%', height: 100, justifyContent: 'center', alignSelf: 'center', },
    profile_main_card: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', },
    profile_card:{ flexDirection: 'column', backgroundColor: 'grey', width: '48%', height: 80, alignContent: 'center', margin: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
    profile_card_img:{ flexDirection: 'row', height: '50%', width: '100%', borderRadius: 10, justifyContent: 'flex-end' , paddingHorizontal: 10},
    profile_card_txt:{ flexDirection: 'row', height: '50%', width: '100%', borderRadius: 10, justifyContent: 'center' },
    // profile screen css properties end...

    mainbackground: {

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
        alignItems: 'center',
    },
    list_imagestyle_subCss: {
        flexDirection: 'column',
        width: '25%',
        height: '100%',
        paddingHorizontal: 8,
        paddingTop: 5
    },
    order_itemImagesCss: { height: 70, width: 70, bottom: 70, borderRadius: 50 },

    CategoryitemImagesCss: {

        height: 90,
        width: 100,
        borderRadius: 20,
        //    opacity: .4

    },
    list_datastyle_subCss: {
        flexDirection: 'column',
        width: '40%',
        height: '90%',
    },
    list_iconstyle_subCss: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 55,
        paddingBottom: 15,
        alignItems: 'center',
        height: 95,
        marginRight: 20,
        marginLeft: 0,
    },
    fav_Css: { position: 'absolute', flexDirection: 'row', bottom: 80, paddingLeft: 100 },
    add_Css: { position: 'absolute', flexDirection: 'row', bottom: 10, paddingLeft: 100 },
    submitbutton: {
        backgroundColor: '#0288D1',
        margin: 5,
        height: 45,
        alignContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        paddingTop: 8,
    },
    addcardstyle: {
        color: 'white',
        margin: 5,
        height: 45,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 100
    },
    submitbuttonforOrder: {
        color: 'white',
        fontSize: 10,
        margin: -5,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    footer_item_Css: {
        display: 'flex',
        backgroundColor: '#0d682b',
        flexDirection: 'row',
        width: '95%',
        height: 40,
        position: 'absolute',
        paddingLeft: 20,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        marginHorizontal: 10,
        bottom: 50,

    },
    Container: {
        paddingTop: 10,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        width: "100%",
        position: 'relative',
        height: '10%',
        paddingTop: '15%'
    },
    header_left_box: {
        flexDirection: 'column',
        width: "50%",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        marginHorizontal: 2,
        position: 'absolute',
        backgroundColor: 'white',
        left: 10,
        // top: 15,
        zIndex: 999,

        // alignContent: 'flex-start'
    },
    header_right_box: {
        flexDirection: 'column',
        backgroundColor: '#E1E3E0',
        width: "50%",
        height: 45,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        marginHorizontal: 2,
        right: 7,
        // top: 1,
        zIndex: 999,
        position: 'absolute',

    },
    header_search: {
        flexDirection: 'column',
        backgroundColor: '#E1E3E0',
        width: "100%",
        height: 40,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        marginHorizontal: 2

    },
    dropdown_container: {
        width: '50%',
        backgroundColor: 'red',
        borderRadius: 6,
        borderColor: 'gray',
    },
    middleContainer: {
        display: 'flex',
    },
    Sub_middle_container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 1,
    },
    inner_container_style_for_first_row: {
        flexDirection: 'column',
        height: 110,
        width: 100,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        paddingTop: 1,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,

    },
    sub_category_text: {
        fontSize: 17,
        bottom: -87,
        textAlign: 'center',
        color: 'grey'
    },
    subCategoryItemsCss: {
        flexDirection: 'column',
        height: 40,
        width: 70,
        backgroundColor: '#D5DAD2',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        paddingTop: 10,
        alignItems: 'center',
        marginLeft: 10,

    },
    listeditemStyle: {
        flexDirection: 'column',
        height: 120,
        width: '97%',
        backgroundColor: "#E1E2E5",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        paddingTop: 20,
        alignItems: 'center',
        margin: 5,
    },
    contentContainer: {
    },
    scrcontainer: {
        display: 'flex',
    },
    listsrcsytle: {
        display: 'flex',
    },
    footerContainer: {
        display: 'flex',
        backgroundColor: 'red',
    },
    subContainer: {
        flexDirection: 'column'
    },
    titlecontainer: {
        flexDirection: 'row'
    },
    buttonstyle: {
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        height: 40

    },
    textstyle: {
        fontSize: 20,
        backgroundColor: 'green',
        alignContent: 'center',
        alignItems: 'center',
    },
    txtcss: {
        marginLeft: 30,
        fontSize: 22,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#D5DAD2',
        paddingHorizontal: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 35,
        paddingLeft: 25,
        paddingRight: 25,
    },
    submitbuttonforlogin: {
        backgroundColor: '#0288D1',
        // paddingTop: 10,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        width: '90%',
        textalign: 'center',
        height: 45
    },

    increaseQty: {
        backgroundColor: 'green',
        borderRadius: 7,
        height: 30,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    footerCss: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    footerMainCssForOrderScreen: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        paddingTop: 600,
        width: '100%'
    },
    increaseQtyCss: {
        borderRadius: 7,
        height: 30,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    increaseQtyColor: { color: 'green', fontWeight: 'bold' },
    addToCartCss: {
        backgroundColor: '#0d682b',
        borderRadius: 7,
        height: 30,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // profile_information_image: {
    //     paddingTop: 20,
    //     flexDirection: 'column',
    //     width: 50,
    // },
    // profile_information_Css: {
    //     paddingTop: 20,
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     width: 200,
    // },
    // middle_Css: {
    //     flexDirection: 'row',
    //     alignContent: 'center',
    //     paddingTop: 10
    // },
    input: {
        height: 45,
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        mode: 'outlined',
        width: '100%'
    },
    // inputForProfile: {
    //     // height: 45,
    //     margin: 12,
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     mode: 'outlined',
    //     width: 250,
    //     borderColor: '#0288D1',

    // },
    // inputForIMage: {
    //     // height: 45,
    //     height: '12%',
    //     margin: 12,
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     mode: 'outlined',
    //     // width: 250,
    //     borderColor: '#0288D1',
    //     flexDirection: 'row',
    //     width: '100%'
    // },
    inputfields: {
        bottomTop: 10,
    },
    // profile_text_logout: { fontSize: 16, fontWeight: 'bold', alignItems: 'flex-start', bottom: 40, color: 'grey' },
    // profile_text_about: { fontSize: 16, fontWeight: 'bold', alignItems: 'flex-start', bottom: 25, color: 'grey' },
    // profile_text_editProfile: { fontSize: 16, fontWeight: 'bold', alignItems: 'flex-start', bottom: 10, color: 'grey' },
    // profile_close_editProfile: { fontSize: 16, fontWeight: 'bold', justifyContent: 'space-around', color: 'red' },
    // profile_update_event: { fontSize: 16, fontWeight: 'bold', alignItems: 'flex-start', paddingRight: 70, color: 'green' },
    // popupInnerCss: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    // popupInfoTextCss: { backgroundColor: 'lightgray', padding: 20, borderRadius: 15, alignItems: 'center', paddingRight: 10, margin: 10 },
    image_css: {
        alignContent: 'flex-start', alignItems: 'center', alignSelf: 'center',
        borderWidth: 1,
        height: '7%'
    },
    // img_text: { color: 'green', fontSize: 17, textAlign: 'center', margin: 10 },

    FinalOrderScrMainContainer: {
        position: 'relative',
        height: '100%',
        paddingBottom: 115,
        paddingTop: 10,
    },
    timelineCss: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cartMainCss: {
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center',
        height: 110,
        backgroundColor: '#E1E2E5',
        marginTop: 10,
        borderRadius: 10,
        elevation: 1,
        paddingLeft: 10,
        paddingTop: 5,

    },


    // info_css: { fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'grey' },
    // profile_middle_main_css: { flexDirection: 'column', justifyContent: 'space-between', paddingTop: 40 },

    orderDeliverAddressCss: {
        flexDirection: 'row',
        width: '94%',
        height: '100%',
        height: 100,
        alignSelf: 'center',
        backgroundColor: '#f3f5fc',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    cartQuantityCss: {
        borderRadius: 7,
        height: 30,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    QtyMainCss: {
        flexDirection: 'row',
        paddingLeft: 60,
        paddingTop: 70
    },
    footerCartMainCss: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        bottom: 50,
        right: 0
    },
    CheckoutfooterCartMainCss: {
        width: '100%',
        height: '8%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: -62,
    },
    footerCssForItemStyle: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    footerCssForItem: {
        fontWeight: 'bold',
        color: 'green',
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',
    },
    footerCssForItemTotal: {
        color: 'green',
        fontSize: 20,
        margin: 10
    },
    AddCartOrderScc: {
        fontWeight: 'bold',
        color: 'black',
    },
    Order_btn: {
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#ffc932',
    },
    footerCssForOrder: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        backgroundColor: '#ffc932',
        borderRadius: 10
    },
    PriceDetailsCss: {
        flexDirection: 'row',
        width: '94%',
        height: 120,
        alignSelf: 'center',
        backgroundColor: '#f3f5fc',
        marginTop: 20,
        justifyContent: 'center',
        elevation: 1,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        paddingTop: 8,
        bottom: 10,
    },
    PriceDetailsCssOrderDetails: {
        flexDirection: 'row',
        width: '94%',
        height: 120,
        alignSelf: 'center',
        backgroundColor: '#f3f5fc',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 1,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        paddingTop: 12,
        bottom: 0,
        position: 'absolute',
        paddingTop: 10
    },
    OrderSummary: {
        flexDirection: 'column',
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,
        position: 'relative'
    },
    topHeadingCss: {
        height: 200,
        backgroundColor: '#0288D1',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50
    },
    OrderDetailsContainer: {
        display: 'flex'
    },
    order_summary: {
        fontSize: 25,
        paddingTop: 115,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'grey'
    },
    orderContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 3,
        color: 'black'
    },
    orderinfoCss: {
        fontWeight: '400',
        color: 'black'
    },
    totalamtCss: {
        fontWeight: '400',
        fontSize: 15,
        color: 'black'
    },
    footerttlamt: {
        display: "flex",
        flexDirection: "row",
        padding: 1,
        position: 'absolute',
        bottom: -190,
        paddingHorizontal: 40
    },
    totalamtfooterCss: {
        fontWeight: '400',
        fontSize: 15,
        color: 'green',
        width: '60%',
        paddingLeft: 30,
        height: '60%',

    },
    footer: {
        height: '9%',
        padding: 10,
        position: 'absolute',
        bottom: 35,
        borderWidth: 1,
        color: 'grey',
        borderTopEndRadius: 1,
        width: '100%',
        borderTopColor: 'grey',
        borderBottomColor: 'white',
        borderRightColor: 'white',
        flexDirection: 'row'
    },
    btnCss: {
        backgroundColor: '#ffc932',
        height: '120%',
        width: '50%',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 15,
        color: 'black'


    },
    shareCss: {
        paddingRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    shareEventCss: {
        padding: 5,
        height: '100%',
        width: '30%',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'column',
    },
    drawercontentStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 550,
        // height: '10%',
        overflow: 'scroll',
        paddingTop: 1
    },
    lblCssDrawer:
    {
        fontWeight: 'bold',
    }


})

export default styles