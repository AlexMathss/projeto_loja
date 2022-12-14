import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>We create your{'\n'}space better</Text>
                <Text style={styles.subTitle}>
                    Our team creates comfortables spaces for our{'\n'}
                    clients. We've been designing your everyday life{'\n'}
                    and work through great ideas since 1999.
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerImg}>
                <Image source={require('../../../assets/sala.png')}/>
            </View>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 658,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerTitle: {
        width: 360,
        height: 291.99,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        lineHeight: 35
    },
    btn: {
        width: 354,
        height: 44,
        borderWidth: 2,
        borderColor: '#D3A265',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    containerImg: {
        height: 249,
        width: '100%',
        marginTop: 32
    }

})