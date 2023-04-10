import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/Allexpenses';
import { GlobalStyles } from './styles/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator 
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.neonBlue },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.neonBlue },
        tabBarActiveTintColor: GlobalStyles.colors.parisM,
        headerRight: ({tintColor}) => (
          <IconButton icon="add" size={24} color={tintColor} onPress={() => {navigation.navigate('ManageExpense')}}/>
        ),
      })}
    >
      <BottomTabs.Screen 
        name="RecentExpenses" 
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          )
        }}  
      />
      <BottomTabs.Screen 
        name="AllExpenses" 
        component={AllExpenses} 
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          )
        }}  
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.neonBlue,
            headerTintColor: 'white',
          }
        }}>
          <Stack.Screen 
            name="ExpensesOverview" 
            component={ExpensesOverview} 
            options={{ headerShown: false }}  
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ presentation: 'modal'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}