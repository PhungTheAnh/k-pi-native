import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {Stack} from "@react-native-material/core";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
                <Text>Tiên phong về công nghệ giáo dục</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: "100vh",
        backgroundColor: "white"
    }
})

export default HomeScreen;