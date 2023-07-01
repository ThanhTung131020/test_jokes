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
        marginHorizontal: 15
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
        marginVertical: 200

    }
})
export default style