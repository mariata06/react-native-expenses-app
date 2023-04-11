import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from "../styles/styles";

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DATA_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DATA_EXPENSES}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.lightSlateBlue,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0
    }
});

export default ExpensesOutput;