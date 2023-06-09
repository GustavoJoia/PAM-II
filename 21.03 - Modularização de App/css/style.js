import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
    },

    gradientBackground:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "50%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    box:{
        //marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: "85%",
        height: 400,
        borderTopLeftRadius: 5
    },

    input:{
        borderRadius: 5,
        width: '80%',
        marginLeft: 4,
        padding: 15,
        borderWidth: 0.5,
        borderBottomWidth: 3
    },

    viewIcon:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30
    },

    titulo:{
        fontSize: '2em',
        fontWeight: 'bold'
    },

    button:{
        padding: 20,
        marginTop: 60,
        alignItems: 'center',
        width: '80%',
        backgroundColor: "#0038A8",
        borderRadius: 10
    },

    btnText:{
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },

    imagem:{
        width: 200,
        height: 200,
        marginLeft: 290
    },

    footer:{
        width: "85%",
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    }, 

    link:{
        color: '#0038a8'
    },

    footerIcon:{
        marginLeft: 10,
        marginRight: 10
    }

})

export default estilo;