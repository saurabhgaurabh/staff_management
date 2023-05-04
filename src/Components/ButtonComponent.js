import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({
    btnText,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={onPress}>
            <Text style={{ fontSize: 15, color: 'blue' }}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    }
})