import React, { useEffect, useContext, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenNames from '../helper/ScreenNames';
import HomeScreen from '../screens/Home/screen/Home'
import HelpAndSupportScreen from '../screens/HelpAndSupport.js'
import LoginScreen from '../screens/LoginScreen.js'
import SignupScreen from '../screens/SignupScreen.js'
import SplashScreen from '../screens/SplashScreen.js'
import ChooseCaptain from '../screens/ChooseCaptain/chooseCaptain'
import Contests from '../screens/Contests'
import { TabsNavigator } from '../navigation/TabsNavigator'
import ChooseBowlers from '../screens/ChooseBowlers/ChooseBowlers';
import ChooseWicketKeeper from '../screens/ChooseWicketKeeper/ChooseWicketKeeper';
import ChooseBatsman from '../screens/ChooseBatsman/ChooseBatsman';
import ChooseAllrounder from '../screens/ChooseAllrounder/ChooseAllrounder';
import MatchUpdateScreen from '../screens/MatchUpdateScreen/MatchUpdateScreen';
import TournamentScreen from '../screens/TournamentScreen/screen/TournamentScreen';


const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.SplashScreen}
    >

      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.HelpAndSupportScreen} component={HelpAndSupportScreen} />
      <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.SignupScreen} component={SignupScreen} />
      <Stack.Screen name={ScreenNames.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.ChooseCaptain} component={ChooseCaptain} />
      <Stack.Screen name={ScreenNames.Contests} component={Contests} />
      <Stack.Screen name={ScreenNames.ChooseWicketKeeper} component={ChooseWicketKeeper} />
      <Stack.Screen name={ScreenNames.ChooseBatsmans} component={ChooseBatsman} />
      <Stack.Screen name={ScreenNames.ChooseAllrounders} component={ChooseAllrounder} />
      <Stack.Screen name={ScreenNames.ChooseBowlers} component={ChooseBowlers} />
      <Stack.Screen name={ScreenNames.MatchUpdateScreen} component={MatchUpdateScreen} />
      <Stack.Screen name={ScreenNames.TournamentScreen} component={TournamentScreen} />



      {/* <Stack.Screen name={ScreenNames.TabsNavigator} component={TabsNavigator} /> */}



    </Stack.Navigator>
  );
}
export default AppNavigator
