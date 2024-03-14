import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import {Stack} from "@react-native-material/core";
import {useNavigation} from "@react-navigation/native";
const RegisterScreen = () => {
    const navigation = useNavigation()
    const [text, onChangeText] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={GlobalStyles.container}>
                <View style={{flex: 1, marginTop: 48}}>
                    <Text style={GlobalStyles.title.login}>Đăng ký </Text>
                    <Stack mb={16} spacing={24}>
                        <Stack spacing={6}>
                            <Text style={GlobalStyles.title.bodyMedium}>
                                Số điện thoại
                                <Text style={GlobalStyles.title.star}>*</Text>
                            </Text>
                            <TextInput
                                style={[GlobalStyles.input, GlobalStyles.title.h6Regular]}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="xxxx-xxx-xxx"
                                keyboardType="default"
                            />
                        </Stack>
                        <Stack spacing={6}>
                            <Text style={GlobalStyles.title.bodyMedium}>
                                Mật khẩu
                                <Text style={GlobalStyles.title.star}>*</Text>
                            </Text>
                            <TextInput
                                style={[GlobalStyles.input, GlobalStyles.title.h6Regular]}
                                onChangeText={onChangePassword}
                                value={password}
                                placeholder="Vui lòng nhập mật khẩu"
                                keyboardType="default"
                                secureTextEntry={true}
                            />
                        </Stack>
                        <Stack>

                        </Stack>
                        <Text style={[GlobalStyles.title["primary-kpi-semibold"], GlobalStyles.title.inRight]}>Quên mật
                            khẩu?</Text>
                    </Stack>
                    <TouchableOpacity disabled={!(text !== "" && password !== "")}>
                        <Text
                            style={text !== "" && password !== "" ? GlobalStyles.button : GlobalStyles.buttonDisabled}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>
                    <Stack mt={30}>
                        <Text>Bạn đã có tài khoản? <Text style={GlobalStyles.title["primary-kpi-semibold"]}
                                                         onPress={() => {
                                                             navigation.navigate("Login")
                                                         }}>Đăng nhập</Text></Text>
                    </Stack>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 16,
        marginBottom: 30,
        alignItems: "center"
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 0,
    },
    button: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#93C572",
        borderWidth: 1,
        borderColor: "#69AA0B",
        paddingVertical: 11,
        paddingHorizontal: 16,
        borderRadius: 8
    },

    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});

export default RegisterScreen;