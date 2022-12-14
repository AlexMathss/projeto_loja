import React from 'react';
import { View,  StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
// IMPORTAR CSS DA PASTA PARA DEIXAR MAIS ORGANIZADO.

export default function Comments(){
    return(
        <View style={styles.container}>
            <View style={styles.contentComments}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>What</Text>
                    <Text style={[styles.title, {color: '#D3A265'}]}>People Say</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.perfil}>
                        <Image source={require('../../../assets/perfil.png')} style={styles.perfilImg}/>
                        <View style={styles.cardProfile}>
                            <Text style={styles.name}>Annete{'\n'}Black</Text>
                            <Text style={styles.profissao}>Merchandising Associate</Text>
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
                    </View>
                    <Text style={styles.conteudo}>
                        Canvallis non proin ac bibendum. At{'\n'}
                        pharetra sed ultrices semper. Lectus et{'\n'}
                        ornare ultrices urna in. Id non fringilla{'\n'}
                        dignissim ac risus amet eget egestas{'\n'}
                        vestibulum. Aliquet etiam eget nulla nulla{'\n'}
                        odio vel.
                    </Text>
                </View>
                <View style={styles.carrocel}>
                    <View style={[styles.point, {backgroundColor: '#D3A265'}]}/>
                    <View style={styles.point}/>
                    <View style={styles.point}/>
                    <View style={styles.point}/>
                </View>
            </View>
            <View style={styles.contentQuestion}>
                <View style={styles.titleQuestion}>
                    <Text style={styles.title}>Do you have</Text>
                    <Text style={[styles.title, {color: '#D3A265'}]}>any quastion?</Text>
                </View>
                <TouchableOpacity style={styles.questionBtn}>
                    <Text style={styles.textBtn}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        height: 856,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentComments: {
        height: 618,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F4F4F4'
    },
    containerTitle: {
        width: 210,
        height: 41,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    card: {
        width: 354,
        height: 378,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10
    },
    perfil: {
        width: 305,
        height: 129,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    perfilImg: {
        width: 129,
        height: 129
    },
    cardProfile: {
        width: 161,
        height: 101,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 16,
        fontWeight: '500'
    },
    profissao: {
        fontSize: 14,
        fontWeight: '500',
        color: '#948B8B'
    },
    midia: {
        width: 90,
        height: 18,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    midiaImg: {
        width: 18,
        height: 18
    },
    conteudo: {
        fontSize: 16,
        lineHeight: 30
    },
    carrocel: {
        width: 118,
        height: 13.88,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    point: {
        width: 13.88,
        height: 13.88,
        backgroundColor: '#DFDFDF',
        borderRadius: 50
    },
    contentQuestion: {
        width: '100%',
        height: 239,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    questionBtn: {
        width: 354,
        height: 44,
        borderWidth: 2,
        borderColor: '#D3A265',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

})