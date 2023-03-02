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
        fontFamily: 'Poppins-Medium',
        fontSize: 22
    },

    position: {
        color: "#66789C",
        fontSize: 15,
        marginBottom: -5,
        fontFamily: 'Poppins-Regular',
    },

    contact: {
        alignItems: "center"
    },

    email: {
        color: "#66789C",
        fontSize: 16,
        marginBottom: -5,
        fontFamily: 'Poppins-Regular',
    },

    phone: {
        color: "#66789C",
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    }

});
  
export default styles;