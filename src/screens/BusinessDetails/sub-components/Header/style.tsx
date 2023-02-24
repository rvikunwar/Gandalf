import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({


    header: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginTop: 45,
    },

    details: {
        marginLeft: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


    name: {
        color: "#05264E",
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 22
    },

    position: {
        color: "#66789C",
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
    },

    contact: {
        alignItems: "center"
    },

    email: {
        color: "#66789C",
        fontSize: 15,
    },

    phone: {
        color: "#66789C",
        fontSize: 15,
    }

});
  
export default styles;