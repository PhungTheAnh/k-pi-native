import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import GlobalStyles from "../GlobalStyles";
import {Stack} from "@react-native-material/core";

const LoginScreen = () => {
    const [text, onChangeText] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.title.login}>Đăng nhập</Text>
                <Stack spacing={24}>
                    <Stack spacing={6}>
                        <Text style={GlobalStyles.title.bodyMedium}>
                            Tên đăng nhập
                            <Text style={GlobalStyles.title.star}>*</Text>
                        </Text>
                        <TextInput
                            style={GlobalStyles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Nguyễn văn A"
                            keyboardType="default"
                        />
                    </Stack>
                    <Stack spacing={6}>
                        <Text style={GlobalStyles.titleBodyMedium}>
                            Mật khẩu
                            <Text style={GlobalStyles.titleStar}>*</Text>
                        </Text>
                        <TextInput
                            style={GlobalStyles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Vui lòng nhập mật khẩu"
                            keyboardType="visible-password"
                        />
                    </Stack>
                    <Text style={GlobalStyles.title["primary-kpi-semibold"]}>Quên mật khẩu?</Text>
                </Stack>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default LoginScreen;