import React from 'react';
import { View,  StyleSheet, Text, Image } from 'react-native';
// IMPORTAR CSS DA PASTA PARA DEIXAR MAIS ORGANIZADO.

export default function Services(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.serviceContainer}>
                    <Image source={require('../../../assets/icon1.png')} style={{width: 82.09, height: 81.75}}/>
                    <Text style={styles.title}>Interior Design</Text>
                    <Text style={styles.subTitle}>Interior design services affer a{'\n'}variety of solutions for our clients{'\n'}homes and office.</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.serviceContainer}>
                    <Image source={require('../../../assets/icon2.png')} style={{width: 101, height: 67}}/>
                    <Text style={styles.title}>Decorate Services</Text>
                    <Text style={styles.subTitle}>Our professional decorators will be{'\n'}happy to help you change your{'\n'}house's inner look.</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.serviceContainer}>
                    <Image source={require('../../../assets/icon3.png')} style={{width: 80, height: 77}}/>
                    <Text style={styles.title}>Space Planning</Text>
                    <Text style={styles.subTitle}>We create better interior{'\n'}experiences through our space{'\n'}planning services.</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.serviceContainer}>
                    <Image source={require('../../../assets/icon4.png')} style={{width: 68.85, height: 68.83}}/>
                    <Text style={styles.title}>Project Management</Text>
                    <Text style={styles.subTitle}>We provide proper project{'\n'}management as it's one of the main{'\n'}success factors in interior design.</Text>
                </View>
            </View>
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        height: 1527,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: 348,
        height: 1423.58,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    serviceContainer: {
        width: 270,
        height: 257.75,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 30,
        color: '#8D8D8D'
    },
    line: {
        width: 348,
        height: 1,
        backgroundColor: '#DCD1BB'
    }

})