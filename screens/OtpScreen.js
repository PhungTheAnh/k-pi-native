import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import {Stack} from "@react-native-material/core";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import IconFeather from "react-native-vector-icons/Feather"
import {OtpInput} from "react-native-otp-entry";

const ForgetPwScreen = () => {
    const navigation = useNavigation()
     const [otp, onChangeOtp] = useState('');
    const SCREEN_HEIGHT = Dimensions.get("window").height;
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <KeyboardAwareScrollView
                style={{
                    height: "100%",
                    width: "100%",
                }}>
                <View style={[GlobalStyles.container, {height: SCREEN_HEIGHT}]}>
                    <View style={{flex: 1, marginTop: 48}}>
                        <Stack style={GlobalStyles.back}>
                            <IconFeather name="chevron-left" size={24} color="#1F1F1F" onPress={() => {
                                navigation.goBack()
                            }}/>
                            <Text style={GlobalStyles.title.login}>Xác nhận OTP</Text>
                            <Text></Text>
                        </Stack>
                        <Stack mt={42} mb={24} spacing={8}>
                            <Text style={[GlobalStyles.title.login, {textAlign: "left"}]}>Xác minh tài khoản đăng
                                ký</Text>
                            <Text style={GlobalStyles.title.bodyRegular}>Bạn hãy nhập mã vừa được gửi tới số điện thoại
                                092****246</Text>
                        </Stack>
                        <Stack spacing={16} mb={20}>
                            <Text style={GlobalStyles.title.bodyMedium}>Nhập OTP</Text>
                            <OtpInput
                                numberOfDigits={6}
                                focusColor={"rgba(170,170,170,0.20)"}
                                onTextChange={(text) => onChangeOtp(text)}
                                theme={{}}
                            />
                        </Stack>
                        <Stack mb={20}>
                            <Text>Bạn chưa nhận được mã OTP? <Text style={GlobalStyles.title["primary-kpi-semibold"]}
                                                                   onPress={() => {
                                                                       navigation.navigate("Register")
                                                                   }}>Gửi lại</Text></Text>
                        </Stack>
                        <TouchableOpacity disabled={!(otp.length !== 6)}>
                            <Text
                                style={otp.length === 6 ? GlobalStyles.button : GlobalStyles.buttonDisabled}
                                onPress={() => {
                                    navigation.navigate("NewPw")
                                }}>
                                Xác nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
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

export default ForgetPwScreen;