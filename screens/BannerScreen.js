import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Stack} from "@react-native-material/core";
import GlobalStyles from "../GlobalStyles";

export default function BannerScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.container}>
                <Stack mb={100} spacing={2}>
                    <Image source={require("../assets/logo.png")} />
                    <Text style={{color: "white"}}>Tiên phong về công nghệ giáo dục</Text>
                </Stack>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#93C572",
        alignItems: "center",
        justifyContent: "center",
    },
});
