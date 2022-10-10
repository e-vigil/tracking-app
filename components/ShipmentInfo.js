import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const ShipmentInfo = () => {
    return (
        <View style={styles.margin}>

            <View style={styles.section}>
                <Text style={styles.attribute_text}>Company</Text>
                <Text style={styles.value_text}>Relojeria Seiko</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.attribute_text}>Customer</Text>
                <Text style={styles.value_text}>Johnny Clevi - 05776164-9</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.attribute_text}>Delivery at</Text>
                <Text style={styles.value_text}>Col. morazan, 4to pje. #74, San Fco. Gotera, Mo</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    margin: {
        marginTop: 20,
        marginBottom: 20,
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    },
    attribute_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
    },
    value_text: {
        color: '#172B4D',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default ShipmentInfo
