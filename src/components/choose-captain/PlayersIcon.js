import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgImage from '../../helper/SvgImage';
import colors from '../../helper/colors';
import {
    WicketKeeperIconBlack,
    BatsmanIconBlack,
    BowlerIconPurple,
    AllRounderIconBlack
} from '../../helper/CommonImagesPath';
import FontsName from '../../helper/FontsName';
import { screenWidth } from '../../helper/Util';

const PlayersIcon = () => {
    return (
        <View style={styles.IconContainer}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={styles.WicketKeeperIcon}>
                        <SvgImage
                            source={WicketKeeperIconBlack}
                            style={{ height: 30, width: 30, }}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12, fontFamily: FontsName.Medium, marginTop: 5, color: colors.Black212121
                    }}>
                        1/4
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={styles.WicketKeeperIcon}>
                        <SvgImage
                            source={BatsmanIconBlack}
                            style={{ height: 30, width: 30, }}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12, fontFamily: FontsName.Medium, marginTop: 5, color: colors.Black212121
                    }}>
                        1/6
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={styles.WicketKeeperIcon}>
                        <SvgImage
                            source={AllRounderIconBlack}
                            style={{ height: 30, width: 30, }}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12, fontFamily: FontsName.Medium, marginTop: 5, color: colors.Black212121
                    }}>
                        1/4
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={styles.WicketKeeperIcon}>
                        <SvgImage
                            source={BowlerIconPurple}
                            style={{ height: 30, width: 30, }}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12, fontFamily: FontsName.Medium, marginTop: 5, color: colors.Black212121
                    }}>
                        1/6
                    </Text>
                </View>


            </View>
        </View>


    )
}

export default PlayersIcon

const styles = StyleSheet.create({
    IconContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    TextContainer: {
        width: 340,
        marginTop: 65,
        height: 30,
        borderColor: "black",
        position: "absolute",
        borderRadius: 25,
        justifyContent: "center",
    },
    WicketKeeperIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.White,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    BatsmanIcon: {
        height: 60,
        width: 50,
        backgroundColor: "grey",
        marginHorizontal: 18,
        borderRadius: 110 / 2
    },
    AllRounderIcon: {
        height: 60,
        width: 50,
        backgroundColor: "grey",
        marginHorizontal: 18,
        borderRadius: 110 / 2
    },
    BowlerIcon: {
        height: 60,
        width: 50,
        backgroundColor: "grey",
        marginHorizontal: 16,
        borderRadius: 110 / 2
    }
})