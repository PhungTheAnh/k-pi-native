import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    containerMain: {
        flex: 1,
        backgroundColor: "white",
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F0F0F0",
        backgroundColor: "rgba(170, 170, 170, 0.20)",
        paddingVertical: 10,
        paddingHorizontal: 14,
        color: "#8C8C8C",
    },
    inputPw: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F0F0F0",
        backgroundColor: "rgba(170, 170, 170, 0.20)",
        paddingVertical: 10,
        paddingLeft: 14,
        paddingRight: 50,
        color: "#8C8C8C",
    },
    inputWrapper:{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconEye: {
        position: "absolute",
        right: 4,
        padding: 10
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
    buttonDisabled: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#8C8C8C",
        paddingVertical: 11,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    back: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        inRight:{
          textAlign: "right",
        },
        login: {
            // fontFamily: "Inter",
            textAlign: "center",
            color: "#1F1F1F",
            fontSize: 20,
            fontWeight: "500",
            lineHeight: 28,
            marginBottom: 40
        },
        h6Regular:{
            fontSize: 16,
            fontWeight: "400",
            lineHeight:  24
        },
        bodyMedium: {
            color: "#434343",
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 22,
        },
        bodyRegular: {
            color: "#434343",
            fontSize: 14,
            fontWeight: "400",
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

