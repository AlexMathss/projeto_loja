import React from "react";
import { View,TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TouchableOpacity style={styles.menu}>
                <Image source={require('../../../assets/hamburger.png')}/>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 25,
    },
    logo: {
        width: 136.47,
        height: 24.06
    },
    menu: {
        width: 34.8,
        height: 24
    },
    title: {
        fontSize: 30
    }

})