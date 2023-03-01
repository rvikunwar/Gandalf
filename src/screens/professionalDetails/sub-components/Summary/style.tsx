import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    summary: {
        paddingHorizontal: 20,
        marginTop: 20,
        borderTopColor: '#313131',
        borderTopWidth: 0.2,
        paddingTop: 20
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    title: {
        color: "#66789C",
        fontFamily: 'Poppins-Regular',
        fontWeight: "600",
        fontSize: 17, 
    },

    titleAns: {
        color: "#05264E",
        fontFamily: 'PlusJakartaSans-Bold',
        fontWeight: "600",
        fontSize: 16,  
        flexWrap: 'wrap',
        textAlign: 'right',
    }

});
  
export default styles;