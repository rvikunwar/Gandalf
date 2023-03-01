import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex:2
    },

    hired: {
        backgroundColor: "#44CD09"
    },

    notHired: {
        backgroundColor: "#CD7D09"
    },

    pending: {
        backgroundColor: "#09AFCD"
    },

    completed: {
        backgroundColor: "#4495EB"
    },

    accepted: {
        backgroundColor: "#0B9347"
    },

    rejected:{
        backgroundColor: "#C14C09"
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        zIndex: -1
    },

    close: {
        position: "absolute",
        top: 10,
        right: 10,
    },

    button: {
        borderRadius: 10,
        padding: 7,
        paddingHorizontal: 15,
        marginBottom: 10,
        elevation: 2,
        marginHorizontal: 5,
        justifyContent: "center"
    },

    loader:{ marginTop: -10 },
    
    buttonOpen: {
        backgroundColor: '#F194FF',
    },

    textStyle: {
        color: 'white',
        fontFamily: 'PlusJakartaSans-Bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 15,
    },

    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
  });

  export default styles