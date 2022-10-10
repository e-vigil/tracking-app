import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import CheckIcon from './CheckIcon'

const HistoryItem = () => {
    return (
        <View style={styles.item}>
            <CheckIcon />
            <View style={styles.margin_left}>
                <Text style={styles.date_text}>06/10/2022 - 10:35 am</Text>
                <Text style={styles.status_text}>Collected</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    margin_left: {
        marginLeft: 20,
    },
    date_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
    },
    status_text: {
        color: '#172B4D',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default HistoryItem
