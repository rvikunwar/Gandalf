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
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 22
    },

    position: {
        color: "#66789C",
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
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