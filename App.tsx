import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('window')

export default function App() {
    const data = Array(20).fill("Hello")
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {
                    data.map((txt, idx) => {
                        return (
                            <View
                                key={idx}
                                style={{
                                    width: 120,
                                    height: 40,
                                    backgroundColor: idx % 2 === 0 ?  'blue' : 'yellow',
                                    transform: [{rotate: '90deg'}, {translateX: 25}, {translateY: 40}],
                                    alignItems: "center",
                                    justifyContent:'center',
                                    marginBottom: 80
                                }}
                            >
                                <Text style={{color: idx % 2 === 0 ? 'white' : 'black'}}>{idx % 2 === 0 ? "Hello There" : "Hello"}</Text>
                            </View>
                        )
                    })
                }

            </ScrollView>
            {/*<FlatList*/}
            {/*    style={{*/}

            {/*    }}*/}
            {/*    data={data}*/}
            {/*    keyExtractor={(item, index) => `${item}${index}`}*/}
            {/*    renderItem={({item, index}) => {*/}
            {/*        return (*/}
            {/*            <View style={{*/}
            {/*                // position: 'relative',*/}
            {/*                // transform: [{rotate: '90deg'}],*/}
            {/*                width: 100,*/}
            {/*                height: 60,*/}
            {/*                backgroundColor:  index % 2 === 0 ? 'red' : 'yellow'*/}
            {/*            }}>*/}
            {/*                <Text>{item}</Text>*/}
            {/*            </View>*/}
            {/*        )*/}
            {/*    }}*/}
            {/*/>*/}
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
