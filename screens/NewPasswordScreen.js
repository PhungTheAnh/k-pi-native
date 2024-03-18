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
import {Snackbar, Stack} from "@react-native-material/core";
import {useNavigation} from "@react-navigation/native";
import IconFeather from "react-native-vector-icons/Feather";

const NewPasswordScreen = () => {
    const navigation = useNavigation()
    const [password, onChangePassword] = useState('');
    const [newPassword, onChangeNewPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const toggleShowPassword1 = () => {
        setShowPassword1(!showPassword1);
    };
    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={GlobalStyles.container}>
                <View style={{flex: 1, marginTop: 48}}>
                    <Text style={GlobalStyles.title.login}>Đặt mật khẩu mới</Text>
                    <Stack mb={16} spacing={24}>
                        <Stack spacing={6}>
                            <Text style={GlobalStyles.title.bodyMedium}>
                                Mật khẩu mới
                                <Text style={GlobalStyles.title.star}>*</Text>
                            </Text>
                            <Stack style={GlobalStyles.inputWrapper}>
                                <TextInput
                                    style={[GlobalStyles.inputPw, GlobalStyles.title.h6Regular]}
                                    onChangeText={onChangePassword}
                                    value={password}
                                    placeholder="Vui lòng nhập mật khẩu mới"
                                    keyboardType="default"
                                    secureTextEntry={showPassword1}
                                />
                                <IconFeather name={showPassword1 ? 'eye-off' : 'eye'}
                                             size={24}
                                             color="#9E9E9E"
                                             style={GlobalStyles.iconEye}
                                             onPress={toggleShowPassword1}
                                />
                            </Stack>
                        </Stack>
                        <Stack spacing={6}>
                            <Text style={GlobalStyles.title.bodyMedium}>
                                Nhập lại mật khẩu mới
                                <Text style={GlobalStyles.title.star}>*</Text>
                            </Text>
                            <Stack style={GlobalStyles.inputWrapper}>
                                <TextInput
                                    style={[GlobalStyles.inputPw, GlobalStyles.title.h6Regular]}
                                    onChangeText={onChangeNewPassword}
                                    value={newPassword}
                                    placeholder="Vui lòng nhập lại mật khẩu"
                                    keyboardType="default"
                                    secureTextEntry={showPassword2}
                                />
                                <IconFeather name={showPassword2 ? 'eye-off' : 'eye'}
                                             size={24}
                                             color="#9E9E9E"
                                             style={GlobalStyles.iconEye}
                                             onPress={toggleShowPassword2}
                                />
                            </Stack>
                        </Stack>
                        <Stack>
                            <TouchableOpacity disabled={!(newPassword !== "" && password !== "")}>
                                <Text
                                    onPress={() => {
                                        alert("Mật khẩu của bạn đã được thay đổi")
                                        navigation.navigate("Login")
                                    }}

                                    style={newPassword !== "" && password !== "" ? GlobalStyles.button : GlobalStyles.buttonDisabled}>
                                    Đặt lại mật khẩu
                                </Text>
                            </TouchableOpacity>
                        </Stack>
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

export default NewPasswordScreen;