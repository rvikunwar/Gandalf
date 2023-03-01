import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    loader: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 10
    },
  });
  
  export default styles;