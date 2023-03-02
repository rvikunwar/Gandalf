import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },

    goBack: {
        width: 40,
        height: '100%'
    },

    left: {
        flexDirection: "row",
        alignItems: "center"
    },

    title: {
        fontSize: 24,
        fontFamily: "Poppins-Regular",
        fontWeight: "500",
        color: "#05264E",
        marginLeft: 8,
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        borderRadius: 8,
        elevation: 1,
    }
  });
  
  export default styles;