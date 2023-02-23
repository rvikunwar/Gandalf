import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    skillView: {
        borderTopColor: "black",
        borderTopWidth: 0.2,
        marginTop: 10,
        paddingTop: 25,
        paddingHorizontal: 20
    },

    title: {
        fontFamily: 'PlusJakartaSans-Bold',
        fontWeight: "600",
        fontSize: 20,        
        color: "#05264E",
        paddingLeft: 5
    },

    view: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

});
  
export default styles;