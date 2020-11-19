//PAGEHADER CSS

//IMPORTING STYLESHEET
import { StyleSheet } from 'react-native';

//STYLES CONSTANT
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f83e8',
        padding: 40
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
});

//STYLES EXPORTING
export default styles;