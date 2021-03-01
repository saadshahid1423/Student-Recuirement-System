import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginOption from '../../screens/loginoption/login';
import LoginStudent from '../../screens/loginstudent/loginstudent';
import SignStudent from '../../screens/loginstudent/signup';
import StudentPanel from '../../screens/loginstudent/studentpanel/studentpanel';
import DetailsCompany from '../../screens/loginstudent/studentpanel/completedetails';
import LoginCompany from '../../screens/logincompany/logincompany';
import SignupCompany from '../../screens/logincompany/signupcompany';
import CompanyPanel from '../../screens/logincompany/companypanel/companypanel';
import DetailsStudent from '../../screens/logincompany/companypanel/companydetails';
import LoginAdmin from '../../screens/loginadmin/loginadmin';
import AdminPanel from '../../screens/loginadmin/adminpanel/adminpanel';
import CompanyData from '../../screens/loginadmin/adminpanel/companydata';
import StudentData from '../../screens/loginadmin/adminpanel/studentdata';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Loginoption" component={LoginOption} />
          <Stack.Screen name="Loginstudent" component={LoginStudent} />
          <Stack.Screen name="Signupstudent" component={SignStudent} />
          <Stack.Screen name="LoginCompany" component={LoginCompany} />
          <Stack.Screen name="SignupCompany" component={SignupCompany} />
          <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
          <Stack.Screen name="StudentPanel" component={StudentPanel} />
          <Stack.Screen name="DetailsCompany" component={DetailsCompany} />
          <Stack.Screen name="CompanyPanel" component={CompanyPanel} />
          <Stack.Screen name="DetailsStudent" component={DetailsStudent} />
          <Stack.Screen name="AdminPanel" component={AdminPanel} />
          <Stack.Screen name="CompanyData" component={CompanyData} />
          <Stack.Screen name="StudentData" component={StudentData} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigation;