import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../styles/styles";

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 9,
        backgroundColor: GlobalStyles.colors.perano,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.neonBlue
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.neonBlue
    }
});

export default ExpensesSummary;