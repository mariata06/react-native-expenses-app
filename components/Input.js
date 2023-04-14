import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../styles/styles";

function Input({label, textInputConfig}) {

    let inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.aliceBlue,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.perano,
        padding: 6,
        borderRadius: 6, 
        fontSize: 18,
        color: GlobalStyles.colors.neonBlue
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    }
})

export default Input;

