import React from 'react';
import { View,  StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// IMPORTAR CSS DA PASTA PARA DEIXAR MAIS ORGANIZADO.

export default function Portifolio(){
    return(
        <View style={styles.container}>
           <View style={styles.cardTitle}>
                <Text style={styles.title}>Our</Text>
                <Text style={[styles.title, {color: '#D3A265'}]}>Portifolio</Text>
           </View>
           <View style={styles.menu}>
                <TouchableOpacity><Text style={[styles.menuText, {color: '#D3A265'}]}>All</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.menuText}>Comercial</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.menuText}>Residential</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.menuText}>Office</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.menuText}>Other</Text></TouchableOpacity>
            </View>
           <View style={styles.cardContainer}>
                <Image source={require('../../../assets/sala1.png')}/>
                <Image source={require('../../../assets/sala2.png')}/>
                <Image source={require('../../../assets/sala3.png')}/>
           </View>
           <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>View More</Text>
           </TouchableOpacity>
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        height: 1169,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 15,
        paddingTop: 15
    },
    cardTitle: {
        width: 197,
        height: 33,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    cardContainer: {
        height: 846,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menu: {
        width: 354,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    menuText: {
        fontSize: 13,
        textTransform: 'uppercase',
    },
    btn: {
        width: 78,
        height: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#D3A265',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})