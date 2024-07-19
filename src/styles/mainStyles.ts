import { StyleSheet } from "react-native";

export const globalColors = {
    text: '#94B8D7',
    primary: '#153F59',
    background: '#012E46'
}

export const globalStyles = StyleSheet.create({
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    txt: {
        color: globalColors.text,
        fontFamily: 'Roboto'
    },

    txtLarge: {
        fontSize: 40,
        fontWeight: '700',
    },

    txtMedium: {
        fontSize: 30,
        fontWeight: '700',
    },

    txtNormal: {
        fontSize: 24
    },

    overlay: {
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
    },

    btnTxt: {
        color: globalColors.text,
        fontFamily: 'Roboto',
        fontSize: 24,
        textAlign: 'center'
    },

    btnTxtPrimary: {
        fontWeight: '600',
    },

    btn: {
        paddingVertical: 16,
        borderRadius: 20,
    },

    btnPrimary: {
        backgroundColor: globalColors.primary
    },

    btnSecondary: {
        backgroundColor: globalColors.background
    },

    btnContainer: {
        backgroundColor: '#000',
        borderRadius: 20,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: globalColors.background,
        paddingHorizontal: 16,
        color: globalColors.text,
        fontFamily: 'Roboto'
    },

    input: {
        height: 52,
        backgroundColor: globalColors.text,
        color: globalColors.background,
        borderRadius: 20,
        paddingHorizontal: 10,
        fontSize: 20
    },
})