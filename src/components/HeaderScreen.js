import React from 'react';
import {
    View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../helper/colors';
import { ArrowBack, Arrowleft, MenuIcon, V11LogoVertical } from '../helper/CommonImagesPath';
import FontsName from '../helper/FontsName';
import { strings } from '../helper/Localization';
import SvgImage from '../helper/SvgImage';
import { screenHeight, screenWidth } from '../helper/Util';


const HeaderScreen = ({
    onPressLeft,
    onPresRight,
    isRightIconShow,
    isLeftIconHide,
    LeftIcon,
    LeftIconStyle,
    Title,
    placeholder,
    TextStyle,
    typeHeaderText,
    balance,
}) => {

    const beforeLoginView = () => {

        return (
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{}}>
                    <SvgImage
                        source={V11LogoVertical}
                        style={{ height: 130, width: 130 }}

                    />
                </View>
                <View style={{}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                            colors={['#9972E0', '#533092']} style={[{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 3, borderRadius: 5,
                                borderColor: colors.White
                            }]}
                        >
                            <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 5, }} >

                                <Text
                                    style={{ fontFamily: FontsName.SemiBold, fontSize: 10, color: colors.White, }}
                                >
                                    {strings.login}
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <Text
                        style={{ fontFamily: FontsName.Regular, fontSize: 8, color: colors.White, marginTop: 5 }}
                    >
                        {strings.registerYourselfNow}
                    </Text>
                </View>
            </View>
        )
    }


    const typeHeaderTextView = () => {


        return (
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity
                    onPress={onPressLeft}
                    style={{ height: 20, width: 20, }}>
                    <SvgImage
                        source={ArrowBack}
                        style={{ height: 20, width: 20, color: colors.White, }}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontFamily: FontsName.SemiBold, fontSize: 18,
                    color: colors.White,
                }} >
                    {Title}
                </Text>
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                }} >
                    <View style={{
                        width: 35, height: 35, borderRadius: 25,
                        backgroundColor: colors.White
                    }} >

                    </View>
                    <Text style={{
                        fontFamily: FontsName.Light, fontSize: 8,
                        color: colors.White, marginTop: 3,
                    }} >
                        {strings.balPKR.replace("_P_", balance)}
                    </Text>
                </View>

            </View>)
    }

    return (
        <View style={styles.header}>

            {
                typeHeaderText ?
                    typeHeaderTextView()
                    :
                    beforeLoginView()
            }

        </View>
    )


}


const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: "center",
        backgroundColor: colors.Purple522F91,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingHorizontal: 20,
    },
    textStyle: {
        color: "white",
        fontSize: 22,
        fontWeight: "500",
    }
})
export default HeaderScreen
