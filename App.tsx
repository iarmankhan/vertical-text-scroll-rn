import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('window')

export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.scrollView}>
                {/*<View style={styles.container}>*/}
                {
                    Array(20).fill("Hello").map((txt, idx) => (
                        <View style={{paddingHorizontal: 20}} key={idx}>
                            <Text>{txt}</Text>
                        </View>
                    ))
                }
                {/*</View>*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // ,
        position: 'relative'
    },
    scrollView: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        transform: [{rotate: '90deg'}, {translateX: 0}, {translateY: width / 2 - 30}],
        // position: 'absolute',
        // top: 0,
    }
});
