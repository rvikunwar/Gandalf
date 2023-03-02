import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    card: {
        flexDirection: "row",
        backgroundColor: '#F1F3F6',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '90%',
        marginVertical: 10,
        marginHorizontal: '5%',
        alignItems: 'center',
    },
    
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    header: {
        flexDirection: "row", 
        flexWrap: "wrap",
        justifyContent: 'space-between',
        width: '100%',
    },

    main: {
        flex: 1,
    },

    footer: {
        paddingHorizontal: 10,
    },

    email: {
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        fontSize: 16,
        marginTop: -11
    },
    timestamp: {
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        fontSize: 14,
        marginTop: -5
    },

    desc: {
        paddingHorizontal: 10,
    },

    name: {
        fontFamily: 'Poppins-Medium',
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 2
    },

    position: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 15,
        marginTop: -5
    }
  });
  
  export default styles;