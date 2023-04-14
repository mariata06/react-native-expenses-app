import { View, StyleSheet } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { GlobalStyles } from '../styles/styles';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext); 
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add expense',
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        navigation.goBack();
        expensesCtx.deleteExpense(editedExpenseId);
    }

    function cancelHandler() {
        navigation.goBack(); 
    }

    function confirmHandler() {
        if (isEditing) {
            expensesCtx.updateExpense(
                //for checking updating expense
                editedExpenseId,
                {
                    description: 'New test expense',
                    amount: 50,
                    date: new Date('2023-04-12'), 
                }
            );
        } else {
            expensesCtx.addExpense(
                //for checking adding new expense
                {
                    description: 'Another new expense',
                    amount: 100,
                    date: new Date('2023-04-12'), 
                }
            );
        }
        navigation.goBack();
    }

    return  (
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" color={GlobalStyles.colors.fireBrick} size={36} onPress={deleteExpenseHandler}/>
                </View>    
            )}
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.lightSlateBlue
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.slateGrey,
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})

export default ManageExpense;