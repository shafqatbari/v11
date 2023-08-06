
import React, { useEffect, useRef, useState } from 'react';
import {
    View, SafeAreaView, Text, ImageBackground, StyleSheet, ScrollView, AppState
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../helper/colors';
import { SplashBack, V11Logo } from '../helper/CommonImagesPath';
import ScreenNames from '../helper/ScreenNames';
import SvgImage from '../helper/SvgImage';
import { screenHeight, screenWidth } from '../helper/Util';

const SplashScreen = ({
    navigation,

}) => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('')
    var loginData = useSelector(state => state.app.login)

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(ScreenNames.LoginScreen)
        }, 1000);
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
                <SvgImage
                    source={SplashBack}
                    style={{ height: screenHeight - 20, width: screenWidth, position: 'absolute' }}

                />
                <SvgImage
                    source={V11Logo}
                    style={{ height: 260, width: 220, color: colors.White, marginBottom: 50 }}

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

export default SplashScreen

