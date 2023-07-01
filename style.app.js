import { StyleSheet } from 'react-native'
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        backgroundColor: '#1bc26c'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    detail: {

        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        textAlign: 'center'
    },
    textDetail: {
        fontSize: 18,
        fontWeight: '300'
    },
    funny: {
        marginRight: 30,
        backgroundColor: '#328fed',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notfunny: {
        backgroundColor: '#1bc26c',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFunny: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,



    },
    footer: {

        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderTopWidth: 0.3,
        borderBottomColor: '#B8B8B8',


    },
    longText: {

        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '300',
        paddingTop: 10
    },
    copy: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: '400',

    },
    viewHeader: {
        marginTop: 20,
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',

    },

})
export default style