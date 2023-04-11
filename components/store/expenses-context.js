import { createContext } from "react";

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

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;        
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DATA_EXPENSES);

    function addExpense({expensesData}) {
        dispatch({ type: 'ADD', payload: expensesData});
    }

    function deleteExpense({expensesData}) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense({expensesData}) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expensesData} });
    }

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;