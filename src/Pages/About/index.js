import React from 'react';
import { View,  StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../Header';
// IMPORTAR CSS DA PASTA PARA DEIXAR MAIS ORGANIZADO.

export default function About(){
    return(
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>About</Text>
            <Text style={[styles.title, {color: '#D3A265'}]}>Studio</Text>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.conteudo}>
                Interiart is an award-winning architecture and{'\n'}
                interior design practice based in NYC. We work{'\n'}
                internationally on projects of residential &{'\n'}
                commercial interior design that require a{'\n'}
                creative approach. Our talented and{'\n'}
                experienced designers leverage their{'\n'}
                knowledfe and expertise to create unique and{'\n'}
                comfortable interior for you.
            </Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        height: 450,
        backgroundColor: '#F4F4F4',
        paddingLeft: 25,
        justifyContent: 'space-around'
    },
   titleContainer: {
    height: 66,
    width: 94,
   },
   title: {
    fontSize: 32,
    fontWeight: 'bold'
   },
   containerConteudo: {
    height: 266,
    justifyContent: 'space-between',
   },
   conteudo: {
    fontSize: 16,
    lineHeight: 30
   },
   btnText: {
    fontSize: 14,
    textTransform: 'uppercase'
   },
   btn: {
    borderBottomWidth: 2,
    borderColor: '#D3A265',
    width: 78
   }

})