import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        
    },
    texto:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20%'
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 50,
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        

    },
    form:{
        maxWidth: '75%',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',

        
        
    },
    ImageBackground:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    
    btninput:{
        
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        margin: 9,
        height: 40,
        width: 70,
        padding: 10,
        backgroundColor: '#ededed'
       
        
    },
    btninput1:{
        
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        margin: 9,
        height: 40,
        width: 245,
        padding: 10,
        backgroundColor: '#ededed'
       
        
    },
    number:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        margin: 9,
        height: 40,
        width: 160,
        padding: 10,
        backgroundColor: '#ededed'
        
    },

    formData:{
        flexDirection: 'row',
        textAlign: 'center',
        
    },
    

    formPersonal:{
        flexDirection: 'row',
        
    },
    

    formAdress:{
        flexDirection: 'row',
       
    },
    adress: {
       
    },

    btnbutton: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        marginTop: 15,
        width: '65%',
        height: 40,
        backgroundColor: '#0f3860',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

      },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
})