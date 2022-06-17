import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import g from '../style/Bostrap'



const Home=({navigation})=>{
    console.log('Home')
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.touchableOpacity}
                onPress={()=>navigation.navigate('Map',{
                    city:'Hà nội'
                })}
            >
                <Text style={[g.text_size20,g.text_boid,g.text_light]}>Open Map</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.touchableOpacity,g.mt_30]}
                onPress={()=>navigation.navigate('Camara')}
            >
                <Text style={[g.text_size20,g.text_boid,g.text_light]}>Open Camara</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({
    
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity:{
        backgroundColor: '#f4511e',
        padding: 10,
        borderRadius: 10,
    },

})