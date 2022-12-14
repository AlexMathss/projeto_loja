import React from 'react';
import { View,  StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Footer(){
    return(
        <View style={styles.container}>
           <View style={styles.containerLogo}>
                <Image source={require('../../../assets/logo.png')}/>
                <View style={styles.midia}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/twitter.png')} style={styles.midiaImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/linkedin.png')} style={styles.midiaImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/facebook.png')} style={styles.midiaImg}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.containerContato}>
                <Text style={styles.title}>Contacts</Text>
                <View style={styles.cards}>
                    <Text style={styles.cardTitle}>Adress</Text>
                    <Text style={styles.cardSub}>3517 W. Gray St. Utica, Pennsylvania 57867</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.cardTitle}>Email</Text>
                    <Text style={styles.cardSub}>michelle.revera@idstudio.com</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.cardTitle}>Phones</Text>
                    <Text style={styles.cardSub}>(808) 555-0111 or (303) 555-0105</Text>
                </View>
           </View>
           <Text style={styles.copy}>
                &copy; 2021 id Studio, All Rights Reserved.
           </Text>
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        height: 551,
        justifyContent: 'space-around',
        backgroundColor: '#F4F4F4',
        paddingLeft: 31,

    },
    containerLogo: {
        width: 350,
        height: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    midia: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    midiaImg: {
        width: 28,
        height: 28
    },
    containerContato: {
        width: 270,
        height: 229,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    cards: {
        width: 270,
        height: 48,
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 16,
        color: '#878787',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    cardSub: {
        fontSize: 14,
        fontWeight: '500'
    },
    copy: {
        fontSize: 16,
        fontWeight: '500'
    }
})