import { StyleSheet } from "react-native";

export const globalColors = {
    text: '#94B8D7',
    primary: '#153F59'
}

export const globalStyles = StyleSheet.create({
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtLarge: {
        color: globalColors.text,
        fontSize: 40,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },

    overlay: {
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnTxt: {
        color: globalColors.text,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    },

    btn: {
        backgroundColor: globalColors.primary,
        paddingVertical: 16,
        borderRadius: 24,
        width: 300
    },

    btnContainer: {
        backgroundColor: '#000',
        borderRadius: 24,
        margin: 8
    }
})