import { StyleSheet } from "react-native";

export const globalColors = {
    text: '#94B8D7'
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
      },
})