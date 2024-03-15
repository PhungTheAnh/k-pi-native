import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import {Stack} from "@react-native-material/core";
import CheckBox from "react-native-check-box";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
    const navigation = useNavigation()
    const [text, onChangeText] = useState('');
    const [password, onChangePassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const SCREEN_HEIGHT = Dimensions.get("window").height;
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <KeyboardAwareScrollView
                style={{flex: 1}}>
                <View style={[GlobalStyles.container, {height: SCREEN_HEIGHT}]}>
                    <View style={{flex: 1, marginTop: 48}}>
                        <Text style={GlobalStyles.title.login}>Đăng nhập</Text>
                        <Stack mb={16} spacing={24}>
                            <Stack spacing={6}>
                                <Text style={GlobalStyles.title.bodyMedium}>
                                    Tên đăng nhập
                                    <Text style={GlobalStyles.title.star}>*</Text>
                                </Text>
                                <TextInput
                                    style={[GlobalStyles.input, GlobalStyles.title.h6Regular]}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="nguyenvana"
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
                            <Text style={[GlobalStyles.title["primary-kpi-semibold"], GlobalStyles.title.inRight]}
                                  onPress={() => {
                                      navigation.navigate("ForgetPw")
                                  }}>Quên
                                mật
                                khẩu?</Text>
                        </Stack>
                        <TouchableOpacity disabled={!(text !== "" && password !== "" && isSelected)}>
                            <Text
                                style={text !== "" && password !== "" && isSelected ? GlobalStyles.button : GlobalStyles.buttonDisabled}>
                                Đăng nhập
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                style={styles.checkbox}
                                onClick={() => {
                                    setSelection(!isSelected)
                                }}
                                isChecked={isSelected}
                            />
                            <Text style={styles.label}>Nhớ lựa chọn của tôi</Text>
                        </View>
                        <Text>Bạn chưa có tài khoản? <Text style={GlobalStyles.title["primary-kpi-semibold"]}
                                                           onPress={() => {
                                                               navigation.navigate("Register")
                                                           }}>Đăng ký</Text></Text>
                    </View>
                    <Text>
                        Bằng việc “đăng nhập”, tôi đồng ý rằng tôi đã đọc và chấp nhận với <Text
                        style={GlobalStyles.title["primary-kpi-semibold"]} onPress={() => {
                        navigation.navigate("Policy")
                    }}>Điều khoản sử dụng</Text>.
                    </Text>
                </View>
            </KeyboardAwareScrollView>
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
});

export default LoginScreen;