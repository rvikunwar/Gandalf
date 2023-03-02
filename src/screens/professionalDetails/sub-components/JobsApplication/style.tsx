import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    job: {
        paddingHorizontal: 20,
        marginTop: 20,
        borderTopColor: '#D5D5D5',
        borderTopWidth: 0.2,
        paddingTop: 20,
    },

    card: {
        flexDirection: "row",
        
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    title: {
        fontFamily: 'Poppins-Medium',
        fontWeight: "600",
        fontSize: 20,        
        color: "#05264E",
        paddingLeft: 5,
        marginBottom: 8
    },

    noData: {
        marginTop: 40,
        color: 'gray',
        textAlign: 'center'
    },

    jobView: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginVertical: 10,

        
        backgroundColor: '#F1F3F6',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    
    left: {
        flexDirection: "row",
        alignItems: "center"
    },


    position: {
        color: "#66789C",
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },

    project: {
        color: "#05264E",
        fontSize: 16,
        marginBottom: -6,
        fontWeight: "500",
        fontFamily: 'Poppins-Medium',
    },

    status: {
        borderColor: " #F2F6FD",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center"
    },

    statusText: {
        color: "#000000",
        fontSize: 12,
        marginRight: 5,
        fontFamily: 'Poppins-Regular',
    }

});
  
export default styles;