import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import GlobalStyles from "../GlobalStyles";

const HomeScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={GlobalStyles.container}>
                <Text>Tiên phong về công nghệ giáo dục</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: "100vh",
        backgroundColor: "white"
    }
})

export default HomeScreen;