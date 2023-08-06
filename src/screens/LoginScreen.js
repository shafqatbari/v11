
import React, { useEffect, useRef, useState } from 'react';
import {
    View, SafeAreaView, Text, ImageBackground, StyleSheet, ScrollView, AppState, TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../helper/colors';
import FontsName from '../helper/FontsName';
import { strings } from '../helper/Localization';
import TextInputView from '../components/TextInputView'
import { EmailIcon } from '../helper/CommonImagesPath';
import ButtonTouchable from '../components/ButtonTouchable';
import ScreenNames from '../helper/ScreenNames';
import { showToast, validateUserEmail } from '../helper/Util';
import { loginRequest } from '../store/ducks/app/actions';
import CustomActivityIndicator from '../components/CustomActivityIndicator';

const LoginScreen = ({
    navigation,

}) => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    var loginData = useSelector(state => state.app.login)

    console.log('>> loginData ', loginData);
    useEffect(() => {
        if (loginData.status === 'success') {
            console.log('>> loginData ', loginData);
            setIsLoading(false)

            // dispatch(exerciseVideosPateintIdle())

        }
        else if (loginData.status === 'failure') {

            setIsLoading(false)
            showToast(loginData.message)
            // dispatch(exerciseVideosPateintIdle())
        }
    }, [loginData.status])



    const btnActionLogin = async () => {

        navigation.navigate(ScreenNames.HomeScreen)

        if (userEmail.trim() === '') {
            showToast('Please enter your Email!')

        }
        else if (!validateUserEmail(userEmail.trim())) {
            showToast('Please enter valid Email!')
        }
        else if (userPassword === '') {
            showToastFunction('Please enter your Password!')
        }
        else if (userPassword.length < 8) {
            showToastFunction('Please enter valid Password!')
        }
        else {
            setIsLoading(true)
            dispatch(loginRequest({
                "email": userEmail.trim(),
                "password": userPassword
            }))
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.GrayD5D6D8 }} >
            <View style={{ flex: 1, backgroundColor: colors.GrayD5D6D8, justifyContent: 'center', paddingHorizontal: 30 }} >
                <Text style={{
                    fontFamily: FontsName.SemiBold, fontSize: 24,
                    color: colors.Purple522F91, textAlign: 'center',
                    marginBottom: 40,

                }} >
                    {strings.login.toLocaleUpperCase()}
                </Text>
                <View  >
                    <TextInputView
                        placeholder={strings.email}
                        onChangeText={(text) => setUserEmail(text)}
                        value={userEmail}
                        rightIcon={EmailIcon}


                    />
                </View>
                <View style={{ marginTop: 10 }}  >
                    <TextInputView
                        placeholder={strings.password}
                        onChangeText={(text) => setUserPassword(text)}
                        value={userPassword}
                        isShowPasswordIcon={true}


                    />
                </View>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }} >
                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity

                            style={{ paddingHorizontal: 5, paddingVertical: 10 }}
                        >
                            <Text style={{
                                fontFamily: FontsName.SemiBold, fontSize: 12,
                                color: colors.Black212121, textAlign: 'center',
                            }} >
                                {strings.forgotPassword}
                            </Text>
                        </TouchableOpacity>
                        <View style={{
                            width: 2, backgroundColor: colors.Black212121,
                            marginHorizontal: 5, marginVertical: 10,

                        }} >

                        </View>
                        <TouchableOpacity
                            style={{ paddingStart: 5, paddingVertical: 10 }}
                        >
                            <Text style={{
                                fontFamily: FontsName.SemiBold, fontSize: 12,
                                color: colors.Black212121, textAlign: 'center',
                            }} >
                                {strings.privacy}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 60 }} >
                    <ButtonTouchable
                        Title={strings.login}
                        onPress={btnActionLogin}
                    />
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >

                    <Text style={{
                        fontFamily: FontsName.SemiBold, fontSize: 12,
                        color: colors.Black212121, textAlign: 'center',
                    }} >
                        {strings.DontHaveanAccount}
                    </Text>

                    <TouchableOpacity
                        style={{ paddingHorizontal: 5, paddingVertical: 10 }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.SignupScreen)
                        }}
                    >
                        <Text style={{
                            fontFamily: FontsName.SemiBold, fontSize: 13,
                            color: colors.Black212121, textAlign: 'center',
                        }} >
                            {strings.sign_Up}
                        </Text>
                    </TouchableOpacity>
                </View>

                <CustomActivityIndicator
                    isLoading={isLoading}
                />
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {

        flex: 1,
        // height: '100%',
        // width: '100%'

    },
});

export default LoginScreen

