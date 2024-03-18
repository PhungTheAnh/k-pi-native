import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from "react-native";
import GlobalStyles from "../GlobalStyles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import IconFeather from "react-native-vector-icons/Feather";
import {Stack} from "@react-native-material/core";
import IconAnt from  "react-native-vector-icons/AntDesign"
const NewsScreen = () => {
    const navigation = useNavigation()
    const SCREEN_HEIGHT = Dimensions.get("window").height;
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <KeyboardAwareScrollView
                style={{
                    height: "100%",
                    width: "100%",
                }}>
                <View style={[GlobalStyles.containerMain, {height: SCREEN_HEIGHT}]}>
                    <Stack mt={16} mb={16} style={GlobalStyles.back}>
                        <IconFeather name="chevron-left" size={24} color="#1F1F1F" onPress={() => {
                            navigation.goBack()
                        }}/>
                        <Text style={GlobalStyles.title.login}>Tin tức</Text>
                        <IconAnt name={"search1"} size={28} color={"#1F1F1F"}/>

                    </Stack>
                    <Text>Tiên phong về công nghệ giáo dục</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: "100vh",
        backgroundColor: "white"
    }
})

export default NewsScreen;