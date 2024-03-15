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
import { Stack} from "@react-native-material/core";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import IconFeather from "react-native-vector-icons/Feather"
const ForgetPwScreen = () => {
    const navigation = useNavigation()
    const [text, onChangeText] = useState('');
    const SCREEN_HEIGHT = Dimensions.get("window").height;
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <KeyboardAwareScrollView
                style={{flex: 1}}>
                <View style={[GlobalStyles.container, {height: SCREEN_HEIGHT}]}>
                    <View style={{flex: 1, marginTop: 48}}>
                        <Stack style={styles.back}>
                            <IconFeather name="chevron-left" size={24} color="#1F1F1F" onPress={()=>{
                                navigation.goBack()
                            }}/>
                            <Text style={GlobalStyles.title.login}>Quên mật khẩu</Text>
                            <Text></Text>
                        </Stack>
                        <Stack mt={20} mb={24} spacing={24}>
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
                                    keyboardType="numeric"
                                />
                            </Stack>
                        </Stack>
                        <TouchableOpacity disabled={!(text !== "")}>
                            <Text
                                style={text !== "" ? GlobalStyles.button : GlobalStyles.buttonDisabled}
                                onPress={() => {
                                    navigation.navigate("Otp")
                                }}>
                                Tiếp tục
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
    back:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default ForgetPwScreen;