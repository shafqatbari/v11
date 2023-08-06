import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../helper/colors'
import FontsName from '../helper/FontsName'

const StepsBar = ({
    slectedTab = 1,
    onPressTab,

}) => {
    const [tabsNames, setTabsNames] = useState({
        one: 1,
        two: 2,
        three: 3,
        four: 4
    })
    return (
        <View style={styles.container}>
            <View style={{
                height: 1, width: '80%', borderRadius: 1, borderWidth: 1, borderColor: colors.gray707070,
                borderStyle: 'dashed', zIndex: 0, position: 'absolute', top: "40%",
                marginStart: "20%"
            }}>
                <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
            </View>
            <TouchableOpacity
                onPress={() => { onPressTab(tabsNames.one) }}
                style={{ justifyContent: 'center', alignItems: 'center', }}
                activeOpacity={1}
            >
                <View style={[styles.circle, { backgroundColor: slectedTab >= tabsNames.one ? colors.Purple9972E0 : colors.GrayD5D6D8, }]}>
                    <Text style={{
                        fontSize: 14, color: slectedTab >= tabsNames.one ? colors.White : colors.Black212121,
                        fontFamily: FontsName.SemiBold,
                        textAlign: 'center',
                    }}>{tabsNames.one}</Text>
                </View>
                <Text style={{
                    fontSize: 8, color: colors.Black212121,
                    fontFamily: FontsName.Regular,
                    textAlign: 'center', marginTop: 7
                }}>Select{'\n'}Tournament </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { onPressTab(tabsNames.two) }}
                style={{ justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
            >
                <View style={[styles.circle, { backgroundColor: slectedTab >= tabsNames.two ? colors.Purple9972E0 : colors.GrayD5D6D8, }]}>
                    <Text style={{
                        fontSize: 14, color: slectedTab >= tabsNames.two ? colors.White : colors.Black212121,
                        fontFamily: FontsName.SemiBold,
                        textAlign: 'center',
                    }}>{tabsNames.two}</Text>
                </View>
                <Text style={{
                    fontSize: 8, color: colors.Black212121,
                    fontFamily: FontsName.Regular,
                    textAlign: 'center', marginTop: 7
                }}>Select{'\n'}Match </Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onPressTab(tabsNames.three) }}

                style={{ justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
            >
                <View style={[styles.circle, { backgroundColor: slectedTab >= tabsNames.three ? colors.Purple9972E0 : colors.GrayD5D6D8, }]}>
                    <Text style={{
                        fontSize: 14, color: slectedTab >= tabsNames.three ? colors.White : colors.Black212121,
                        fontFamily: FontsName.SemiBold,
                        textAlign: 'center',
                    }}>{tabsNames.three}</Text>
                </View>
                <Text style={{
                    fontSize: 8, color: colors.Black212121,
                    fontFamily: FontsName.Regular,
                    textAlign: 'center', marginTop: 7
                }}>Select{'\n'}Team </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onPressTab(tabsNames.four) }}


                style={{ justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
            >
                <View style={[styles.circle, { backgroundColor: slectedTab >= tabsNames.four ? colors.Purple9972E0 : colors.GrayD5D6D8, }]}>
                    <Text style={{
                        fontSize: 14, color: slectedTab >= tabsNames.four ? colors.White : colors.Black212121,
                        fontFamily: FontsName.SemiBold,
                        textAlign: 'center',
                    }}>{tabsNames.four}</Text>
                </View>
                <Text style={{
                    fontSize: 8, color: colors.Black212121,
                    fontFamily: FontsName.Regular,
                    textAlign: 'center', marginTop: 7
                }}>Enter{'\n'}Contest </Text>

            </TouchableOpacity>



        </View>

    )
}

export default StepsBar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 30,
        backgroundColor: colors.White,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    circle: {
        // color: '#9972E0',

        height: 30,
        width: 30,
        borderRadius: 40,
        justifyContent: 'center',
    },
    circle_left: {
        backgroundColor: '#9B9B9B',
        height: 30,
        width: 30,
        borderRadius: 40,
        justifyContent: 'center',
    },
})