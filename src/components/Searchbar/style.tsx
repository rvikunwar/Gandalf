import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    inputBox: {
        width: "90%",
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2
    },

    iconStyle: {
        width: 20,
        height: 20
    },

    input: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 16,
        flex: 1,
    }
  });
  
  export default styles;