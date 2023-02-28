import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    job: {
        paddingHorizontal: 20,
        marginTop: 20,
        borderTopColor: '#313131',
        borderTopWidth: 0.2,
        paddingTop: 20
    },

    title: {
        fontFamily: 'PlusJakartaSans-Bold',
        fontWeight: "600",
        fontSize: 20,        
        color: "#05264E",
        paddingLeft: 5
    },

    noData: {
        marginTop: 40,
        color: 'gray',
        textAlign: 'center'
    },

    jobView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10
    },
    
    left: {
        flexDirection: "row",
        alignItems: "center"
    },

    content: {
        marginLeft: 10
    },

    position: {
        color: "#000000",
        fontSize: 15,
        fontFamily: 'PlusJakartaSans-Regular',
    },

    project: {
        color: "#66789C",
        fontSize: 17,
        fontFamily: 'PlusJakartaSans-Regular',
    },

    status: {
        borderColor: " #F2F6FD",
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center"
    },

    statusText: {
        color: "#000000",
        fontSize: 14,
        marginTop: -5,
        marginRight: 5,
        fontFamily: 'PlusJakartaSans-Regular',
    }

});
  
export default styles;