import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.4)"
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
        elevation: 5,
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
    },
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
  });

  export default styles