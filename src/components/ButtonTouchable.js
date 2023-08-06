import React from 'react';
import {
    View, SafeAreaView, Text, TextInput, TouchableOpacity
} from 'react-native';
import colors from '../helper/colors';
import FontsName from '../helper/FontsName';
import SvgImage from '../helper/SvgImage';
import { screenHeight, screenWidth } from '../helper/Util';
import LinearGradient from 'react-native-linear-gradient';


const ButtonTouchable = ({
    onPress,
    Title,
    placeholder,
    StyleOpacity,
    secondButton,
    backGroundGreen,
    SecondIcon,
    FirstIcon,
}) => {


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', }} >

            <TouchableOpacity
                onPress={onPress}
                style={[{
                    // backgroundColor: secondButton ? colors.White : colors.Purple9972E0,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // borderWidth: secondButton ? 1 : 0,
                    // borderColor: secondButton ? colors.SlateGray77 : colors.Blue2838


                }, StyleOpacity
                ]} >
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#9972E0', '#533092']} style={[{
                        height: 50,
                        width: screenWidth - 40,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }, StyleOpacity]}
                >

                    <View style={{ flexDirection: 'row' }} >
                        {
                            FirstIcon ?
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginEnd: 3 }} >
                                    <SvgImage
                                        source={FirstIcon}
                                        style={{ width: 20, height: 12, color: colors.White }}
                                    />
                                </View>
                                :
                                null
                        }
                        <Text
                            style={{ fontFamily: FontsName.SemiBold, fontSize: 18, color: secondButton ? colors.Black212121 : colors.White, }}
                        >
                            {Title}
                        </Text>
                        {
                            SecondIcon ?
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginStart: 3 }} >
                                    <SvgImage
                                        source={SecondIcon}
                                        style={{ width: 20, height: 12, color: colors.White }}
                                    />
                                </View>
                                :
                                null
                        }
                    </View>
                </LinearGradient>

            </TouchableOpacity>
        </View>
    )


}


export default ButtonTouchable
