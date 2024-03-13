import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    container: {
        flex: 1,
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "white",
        paddingHorizontal: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: "#F0F0F0",
        backgroundColor: "rgba(170, 170, 170, 0.20)",
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    title: {
        login: {
            fontFamily: "Inter-Medium",
            textAlign: "center",
            color: "#1F1F1F",
            fontSize: 20,
            fontWeight: "500",
            lineHeight: 28,
            marginBottom: 40
        },
        bodyMedium: {
            color: "#434343",
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 22,
        },
        star: {
            color: "#F5222D"
        },
        "primary-kpi": {
            color: "#93C572",
            fontSize: 14,
            lineHeight: 22,

        },
        "primary-kpi-semibold": {
            color: "#93C572",
            fontSize: 14,
            lineHeight: 22,
            fontWeight: "600"
        }
    },
});

