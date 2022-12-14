import React from 'react';
import { View,  StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
// IMPORTAR CSS DA PASTA PARA DEIXAR MAIS ORGANIZADO.

export default function Princing(){
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Our</Text>
                <Text style={[styles.title, {color: '#D3A265'}]}>Pricing</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Basic</Text>
                    <View style={styles.cardPricing}>
                        <Text style={styles.pricing}>$25</Text>
                        <Text style={styles.periodo}>per month</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.beneficios}>
                        <Text style={styles.textBen}>Interior Design</Text>
                        <Text style={styles.textBen}>Project Discussion</Text>
                        <Text style={styles.textBen}>Space Plannig</Text>
                        <Text style={styles.textBen}>Online Consultation</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.card, {backgroundColor: '#D3A265'}]}>
                    <Text style={[styles.cardTitle, {color: 'white'}]}>Standart</Text>
                    <View style={styles.cardPricing}>
                        <Text style={[styles.pricing, {color: 'white'}]}>$50</Text>
                        <Text style={[styles.periodo, {color: 'white'}]}>per month</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.beneficios}>
                        <Text style={[styles.textBen, {color: 'white'}]}>Color Analysis</Text>
                        <Text style={[styles.textBen, {color: 'white'}]}>Space Planning</Text>
                        <Text style={[styles.textBen, {color: 'white'}]}>Home Remodeling</Text>
                        <Text style={[styles.textBen, {color: 'white'}]}>3D Interior Model</Text>
                    </View>
                    <TouchableOpacity style={[styles.btn, {borderTopWidth: 2, borderTopColor: '#FDFBF8'}]}>
                        <Text style={styles.btnText}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Premium</Text>
                    <View style={styles.cardPricing}>
                        <Text style={styles.pricing}>$80</Text>
                        <Text style={styles.periodo}>per month</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.beneficios}>
                        <Text style={styles.textBen}>Concept Development</Text>
                        <Text style={styles.textBen}>Decoration Services</Text>
                        <Text style={styles.textBen}>Interior Architecture</Text>
                        <Text style={styles.textBen}>Flooring Installation</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        height: 1214,
        alignItems: 'center', 
        justifyContent: 'space-around'
    },
    containerTitle: {
        width: 186,
        height: 51,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    cardContainer: {
        width: 270,
        height: 1031,
        justifyContent: 'space-between',

    },
    card: {
        height: 322,
        width: 270,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 27,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3A265'
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardPricing: {
        width: 125,
        height: 27,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    pricing: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    periodo: {
        fontSize: 16,
        color: '#BBBBBB',
        fontWeight: '500'
    },
    line: {
        width: 186,
        height: 1,
        backgroundColor: '#DCD1BB'
    },
    beneficios: {
        width: 147,
        height: 91,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textBen: {
        fontSize: 14,
        fontWeight: '500'
    },
    btn: {
        backgroundColor: '#D3A265',
        width: 270,
        height: 41.36,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    btnText: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }


})