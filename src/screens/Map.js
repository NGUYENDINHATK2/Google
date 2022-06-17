import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import g from '../style/Bostrap'

const Map = ({ navigation, route }) => {

    const { city } = route.params

    return (
        <View style={styles.container}>
            <Text style={[g.text_size32, g.text_boid]}>{city}</Text>

            <MapView
            style={styles.map}
                initialRegion={{
                    latitude: 10.777211330598043, //! kinh do vi do 1 thanh pho 10.777211330598043, 106.69564891772399
                    longitude: 106.69564891772399,//!
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                
            />
        </View>
    )
}

export default Map;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 10,
    },
    map:{
        width: '100%',
        height: '100%',
    },
})