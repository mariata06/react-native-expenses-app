import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DATA_EXPENSES = [
    {
        id: 'exp1',
        description: 'books',
        amount: 50,
        date: new Date('2022-12-31',)
    },
    {
        id: 'exp2',
        description: 'gaz',
        amount: 100,
        date: new Date('2023-01-10',)
    },
    {
        id: 'exp3',
        description: 'food',
        amount: 120,
        date: new Date('2023-02-15',)
    },
    {
        id: 'exp4',
        description: 'med services',
        amount: 200,
        date: new Date('2023-03-20',)
    },
    {
        id: 'exp5',
        description: 'transport',
        amount: 130,
        date: new Date('2023-04-25',)
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={DATA_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DATA_EXPENSES}/>
        </View>
    )
}

export default ExpensesOutput;