import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { useParams } from 'react-router-native'

import ShipmentInfo from '../components/ShipmentInfo'
import History from '../components/History'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Back from '../components/Back'

const Tracking = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const { code } = useParams()

    useEffect(() => {

        const apiURL = 'https://jsonplaceholder.typicode.com/users'

        fetch(`${apiURL}/${code}`)
            .then(res => res.json())
            .then(res => {

                console.log(res)
                setLoading(true)

                setData(res)

                setTimeout(() => {
                    setLoading(false)
                }, 1000)

            })
            .catch(err => console.error(err))

    }, [])

    return (
        loading ? <Loading /> : <View style={styles.container}>
            <Back />
            <Text style={styles.header_text}>Tracking</Text>
            <Text style={styles.tracking_text}>{code}</Text>

            {
                Object
                    .keys(data).length > 0
                    ?
                    <View>
                        <ShipmentInfo />
                        <History />
                    </View>
                    :
                    <Error />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header_text: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    tracking_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    }
})

export default Tracking
