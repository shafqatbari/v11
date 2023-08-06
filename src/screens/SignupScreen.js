
import React, { useEffect, useRef, useState } from 'react';
import {
    View, SafeAreaView, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonTouchable from '../components/ButtonTouchable';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import TextInputView from '../components/TextInputView';
import colors from '../helper/colors';
import { EmailIcon } from '../helper/CommonImagesPath';
import FontsName from '../helper/FontsName';
import { strings } from '../helper/Localization';
import ScreenNames from '../helper/ScreenNames';
import { showToast, validateUserEmail } from '../helper/Util';
import { signUpIdle, signUpRequest } from '../store/ducks/app/actions';

const SignupScreen = ({
    navigation,

}) => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    var signUpData = useSelector(state => state.app.signUp)


    useEffect(() => {
        if (signUpData.status === 'success') {
            console.log('>> signUpData ', signUpData);
            setIsLoading(false)

            // dispatch(exerciseVideosPateintIdle())

        }
        else if (signUpData.status === 'failure') {

            setIsLoading(false)
            showToast(signUpData.message)
            dispatch(signUpIdle())
        }
    }, [signUpData.status])

    const btnActionSignUp = async () => {
        if (userEmail.trim() === '') {
            showToast('Please enter your Email!')
        }
        else if (userName.trim() === '') {
            showToast('Please enter your User Name!')

        }
        else if (!validateUserEmail(userEmail.trim())) {
            showToast('Please enter valid Email!')
        }
        else if (userName.trim() === '') {
            showToast('Please enter your Password!')
        }
        else if (userPassword.length < 8) {
            showToast('Please enter valid Password!')
        }
        else if (userPasswordConfirm === '') {
            showToast('Please enter your Confirm Password!')
        }
        else if (userPassword.trim() !== userPasswordConfirm.trim()) {
            showToast("Password did't Match!")
        }
        else {
            setIsLoading(true)
            dispatch(signUpRequest(
                {
                    "name": userName,
                    "email": userEmail,
                    "password": userPassword,
                    "phoneNumber": "",
                    "address": "",
                    "userProfileImage": ""
                }
            ))
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
            <View style={{ flex: 1, backgroundColor: colors.GrayD5D6D8, justifyContent: 'center', paddingHorizontal: 30 }} >
                <Text style={{
                    fontFamily: FontsName.SemiBold, fontSize: 24,
                    color: colors.Purple522F91, textAlign: 'center',
                    marginBottom: 40,

                }} >
                    {strings.signUp.toLocaleUpperCase()}
                </Text>
                <View  >
                    <TextInputView
                        placeholder={strings.typeUserName}
                        onChangeText={(text) => setUserName(text)}
                        value={userName}


                    />
                </View>
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
                <View style={{ marginTop: 10 }}  >
                    <TextInputView
                        placeholder={strings.confirmPassword}
                        onChangeText={(text) => setUserPasswordConfirm(text)}
                        value={userPasswordConfirm}
                        isShowPasswordIcon={true}
                    />
                </View>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }} >
                    <View style={{ flexDirection: 'row' }} >



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
                        Title={strings.signUp}
                        onPress={btnActionSignUp}
                    />
                </View >


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

export default SignupScreen

