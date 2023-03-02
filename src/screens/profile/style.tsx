import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    profile: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.95,
    },

    profileHeader: {
        alignItems: "center",
        backgroundColor: "#F1F3F6",
        width: "80%",
        paddingVertical: 20,
        paddingTop: 60,
    },

    name: {        
        fontFamily: 'Poppins-Medium',
        fontWeight: "600",
        fontSize: 24,
        color: "#05264E",
        marginTop: 6,
    },

    admin: {
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        fontSize: 17,
        color: "#66789C",
        marginTop: -4
    },

    contactStyle: {
        width: "80%",
        backgroundColor: "#F1F3F6",
        borderRadius: 8,
        paddingHorizontal: 45,
        paddingVertical: 15,
        paddingBottom: 80,
    },

    contactText: {
        fontFamily: 'Poppins-Regular',
        fontWeight: "600",
        fontSize: 18,        
        color: "#000000",
        marginBottom: 10
    },

    email: {
        color: "#A0ABB8",
        fontSize: 18,
        fontFamily: "Poppins-Regular",
    },

    email_: {
        color: "#66789C",
        marginBottom: 7,
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        marginTop: -7
    },

    phone: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "#A0ABB8"
    },

    phone_: {
        color: "#66789C",
        marginBottom: 7
    },

    logoutSection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },

    logOut: {
        color: "red",
        marginLeft: 5,
        marginTop: 3,
        fontSize: 17,
        fontFamily: "Poppins-Regular",
    }
});
  
export default styles;