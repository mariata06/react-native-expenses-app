import { Pressable, View, Text, StyleSheet, textBase } from "react-native";
import { GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({id, description, amount, date}) {
    const navigation = useNavigation();

    function getFormattedDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function expensePressHandler() {
        navigation.navigate('ManageExpense', {expenseId: id});
    }

    return (
        <Pressable onPress={expensePressHandler} style={( {pressed} ) => pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View style={styles.descContainer}>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View> 
                <View style={styles.amountContainer} >
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.neonBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.aliceBlue,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.white,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 60
    },
    amount: {
        color: GlobalStyles.colors.neonBlue,
        fontWeight: 'bold',
        marginLeft: 10
    },
    descContainer: {
        width: 200,
    }, 
    pressed: {
        opacity: 0.75
    }
});


export default ExpenseItem;