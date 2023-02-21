import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    card: {
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: '100%',
        marginVertical: 10,
    },
    
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    header: {
        flexDirection: "row", 
        flexWrap: "wrap"
    },

    footer: {
        paddingHorizontal: 10,
    },

    email: {
        fontFamily: "PlusJakartaSans-Medium",
        fontWeight: "400",
        fontSize: 15,
    },
    timestamp: {
        fontFamily: "PlusJakartaSans-Medium",
        fontWeight: "400",
        fontSize: 15,
    },

    desc: {
        paddingHorizontal: 10,
    },

    name: {
        fontFamily: 'PlusJakartaSans-SemiBold',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 20
    },

    position: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16
    }
  });
  
  export default styles;