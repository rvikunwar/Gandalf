import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    login: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff"
    },

    header : {
        alignItems: "center",
        marginBottom: 60
    },

    textBox: {
        width: 352,
        height: 60,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "300",
        paddingHorizontal: 10
    },

    logoTitle: {
        fontFamily: "MacondoSwashCaps-Regular",
        fontSize: 40,
        color: "#05264E"
    },

    adminLogin: {
        fontFamily: "Lato-Light",
        fontSize: 40,
        color: "#000000",
        marginBottom: 20
    },

    mainStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    iconStyle: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    checkboxText: {
        fontFamily: "Lato-Regular",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 15,
        textDecorationLine: "none",
        marginLeft: -10
    },

    forgotPass: {
        fontWeight: "600",
        fontSize: 15,
        color: "#3C65F5"
    },

    btnStyle: {
        width: 352,
        height: 60,
        backgroundColor: '#3C65F5',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },

    btnTextStyle: {
        fontFamily: "Lato-Light",
        fontSize: 25,
        color: "#FFFFFF",
        fontWeight: "400"
    },

    footerText: {
        fontFamily: "Lato-Regular",
        fontWeight: "400",
        fontSize: 15,
        marginTop: 10,
        color: "#000000"
    }

  });
  
  export default styles;