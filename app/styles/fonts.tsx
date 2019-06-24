import { StyleSheet, View } from 'react-native';
import { colors } from './colors'

export const textStyle = StyleSheet.create({
    header: {
        color: colors.black,
        fontSize: 36,
    },
    title: {
        color: colors.black,
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraph: {
        color: colors.black,
        fontSize: 16,
    },
});