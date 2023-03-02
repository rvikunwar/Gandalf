import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    summary: {
        paddingHorizontal: 20,
        marginTop: 20,
        paddingTop: 20,
        borderTopColor: '#D5D5D5',
        borderTopWidth: 0.2,
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
        fontFamily: 'Poppins-Medium',
        fontWeight: "600",
        fontSize: 16,  
        flexWrap: 'wrap',
        textAlign: 'right',
    }

});
  
export default styles;