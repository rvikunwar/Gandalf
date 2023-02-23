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
        width: "60%",
        paddingVertical: 20
    },

    name: {        
        fontFamily: "Lato-Regular",
        fontWeight: "700",
        fontSize: 20,
        color: "#05264E"
    },

    admin: {
        fontFamily: "Lato-Regular",
        fontWeight: "400",
        fontSize: 16,
        color: "#66789C"
    },

    contactStyle: {
        width: "60%",
        backgroundColor: "#F1F3F6",
        borderRadius: 8,
        paddingHorizontal: 25,
        paddingVertical: 15
    },

    contactText: {
        fontFamily: 'Lato-Regular',
        fontWeight: "600",
        fontSize: 18,        
        color: "#000000",
        marginBottom: 10
    },

    email: {
        color: "#A0ABB8",
        fontSize: 16,
        fontFamily: "Lato-Regular",
    },

    email_: {
        color: "#66789C",
        marginBottom: 7
    },

    phone: {
        fontFamily: "Lato-Regular",
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
        fontSize: 17
    }
});
  
export default styles;