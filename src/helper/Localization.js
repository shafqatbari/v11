import LocalizedStrings from "react-native-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

export let enLocalString = {
  login: 'Login',
  email: 'Email',
  password: 'Password',
  forgotPassword: 'Forgot password?',
  privacy: 'Privacy',
  DontHaveanAccount: "Don't have an account ?",
  sign_Up: 'Sign-up',
  confirmPassword: 'Confirm Password',
  signUp: "Sign Up",
  typeUserName: 'Type User Name',
  registerYourselfNow: 'Register Yourself Now!',
  upcomingTournaments: 'Upcoming Tournaments',
  upcomingMatches: 'Upcoming Matches',
  tournamentUpdates: 'Tournament Updates',
  balPKR: 'Bal: _P_ PKR',
  firstName: "First Name",
  lastName: "Last Name",
  gender: "Gender",
  emailId: "Email ID",
  address: "Address",
  matchesPlayed: "Matches Played",
  win: "Win",
  currentBalance: "Current Balance",
  paymentMethods: "Payment Methods",

}

export let esLocalString = {
  login: 'Login',
  email: 'Email',
  password: 'Password',
  forgotPassword: 'Forgot password?',
  privacy: 'Privacy',
  DontHaveanAccount: "Don't have an account ?",
  sign_Up: 'Sign-up',
  confirmPassword: 'Confirm Password',
  signUp: "Sign Up",
  typeUserName: 'Type User Name',
  registerYourselfNow: 'Register Yourself Now!',
  upcomingTournaments: 'Upcoming Tournaments',
  upcomingMatches: 'Upcoming Matches',
  tournamentUpdates: 'Tournament Updates',
  balPKR: 'Bal: _P_ PKR',
  firstName: "First Name",
  lastName: "Last Name",
  gender: "Gender",
  emailId: "Email ID",
  address: "Address",
  matchesPlayed: "Matches Played",
  win: "Win",
  currentBalance: "Current Balance",
  paymentMethods: "Payment Methods",



}

export const enStrings = async () => {
  const value = await AsyncStorage.getItem("@language");
  var lang =
    value === undefined || value === null || value === "" ? "en" : value;
  strings = new LocalizedStrings({
    en: enLocalString,
    es: esLocalString,
  });
  strings.setLanguage(lang);
  // strings.setLanguage(lang);

  // console.log('>>> value  strings', strings.badgeProgress);
};
export var strings = new LocalizedStrings({
  en: enLocalString,
  es: esLocalString,
});
