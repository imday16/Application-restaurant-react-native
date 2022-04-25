import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
})

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
                </Text>
        </View>
    )
}

export default ResultDetail 