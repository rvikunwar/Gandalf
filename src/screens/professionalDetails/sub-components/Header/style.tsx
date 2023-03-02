import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({


    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 25,
    },

    details: {
        marginLeft: 10,
        flex: 1
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    name: {
        color: "#05264E",
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        marginBottom: -7,
    },

    position: {
        color: "#66789C",
        fontSize: 16,
        marginBottom: -7,
        fontFamily: 'Poppins-Regular',
    },

    email: {
        color: "#66789C",
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },

    phone: {
        color: "#66789C",
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    }

});
  
export default styles;