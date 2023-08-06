import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/choose-captain/header'
import StepsBar from '../../components/choose-captain/stepsBar'
import SvgImage from '../../helper/SvgImage';
import colors from '../../helper/colors';
import PlayersIcon from '../../components/choose-captain/PlayersIcon';
import { ArrowDown, Plus, Circle } from '../../helper/CommonImagesPath';

const ChooseWicketKeeper = () => {
    const header = 'Create Your Team'
    const header1 = 'Wicket Keeper'

    const PlayersData = () => {
        const playerData = [
            {
                id: 1,
                title: "shahid afridi",
                Role: "WK",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 2,
                title: "M.Rizwan",
                Role: "BAT",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 3,
                title: "shoaib akhtar",
                Role: "BOW",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 4,
                title: "wasim akram",
                Role: "ALL",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 5,
                title: "shaheen ",
                Role: "WK",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 6,
                title: "babr azam",
                Role: "BAT",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 7,
                title: "shahid afridi",
                Role: "BOW",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 8,
                title: "haris rauf",
                Role: "ALL",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 9,
                title: "naseem shah",
                Role: "WK",
                playerRatio: "Sell by 98%",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
        ]

        const [activeButton, setActiveButton] = useState('')

        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ marginTop: 70, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", position: "absolute", }}>
                        <Text style={{ color: "white", marginHorizontal: 25 }}>
                            Selected by
                        </Text>
                        <Text style={{ color: "white", marginHorizontal: 20 }}>
                            Points
                        </Text>
                        <Text style={{ color: "white", marginHorizontal: -2 }}>
                            Credits
                        </Text>
                        <SvgImage
                            source={ArrowDown}
                            style={{ height: 25, width: 20, color: colors.Red, position: "absolute", marginHorizontal: 270, marginTop: -3 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15, height: "100%", }}>
                    <FlatList
                        data={playerData}
                        extraData={playerData}
                        renderItem={({ item, index }) => {
                            console.log("item", item.title);
                            return (
                                <View>
                                    <View style={{ alignItems: "center", }}>
                                        <View style={styles.container}>
                                            <View style={{ position: "absolute", marginTop: 5 }}>
                                                <Image style={styles.imageStyle} source={{ uri: item.img }} />
                                            </View>
                                            <View style={{ marginLeft: 5, marginTop: -2.5, position: "absolute" }}>
                                                <Text
                                                    style={{
                                                        color: "black", position: "absolute",
                                                        marginTop: -70, fontSize: 18, marginLeft: 80, fontWeight: "400"
                                                    }}
                                                >{item.title}  </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12, position: "absolute",
                                                        marginTop: 38, marginLeft: 80
                                                    }}
                                                >{item.playerRatio}  </Text>
                                            </View>
                                            <View style={{ position: "absolute" }}>
                                                <View style={{ flexDirection: "row", marginLeft: 268, marginTop: 20 }}>
                                                    <View style={{ position: "absolute", marginTop: 2.5, marginLeft: -58 }}>
                                                        <Text>58</Text>
                                                    </View>
                                                    <View style={{ position: "absolute", marginTop: 2.5, marginLeft: 5 }}>
                                                        <Text>9.0</Text>
                                                    </View>
                                                    <View style={{ marginHorizontal: 40, marginTop: 2.5, position: "absolute" }}>
                                                        <TouchableOpacity
                                                            style={{
                                                                position: "absolute",
                                                                height: 30,
                                                                width: 35,
                                                                marginLeft: 10,
                                                                borderRadius: 65 / 2,
                                                                justifyContent: "center",
                                                            }}>
                                                            <SvgImage
                                                                source={Circle}
                                                                style={{ height: 25, width: 25, color: colors.LightGreen, position: "absolute", }}
                                                            />
                                                            <SvgImage
                                                                source={Plus}
                                                                style={{ height: 12, width: 12, color: colors.LightGreen, position: "absolute", marginLeft: 6.5, marginTop: 6.5 }}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View >
        )
    }



    return (
        <View style={{ flex: 1 }}>
            <>
                <Header header1={header} header2={header1} />
            </>
            <>
                <StepsBar />
            </>
            <View>
                <PlayersIcon />
            </View>
            <View style={styles.PlayersDataStyle}>
                {PlayersData()}
            </View>
        </View>
    )
}

export default ChooseWicketKeeper

const styles = StyleSheet.create({
    PlayersDataStyle: {
        flex: 5,
        marginTop: 110,
        backgroundColor: "#522F91",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    container: {
        width: 360,
        flex: 1,
        height: 70,
        borderWidth: 1,
        // borderColor: "black",
        borderRadius: 10,
        marginVertical: 8,
        backgroundColor: "#F9F9F9",
        flexDirection: "row"
    },
    imageStyle: {
        width: 65,
        height: 50,
        borderRadius: 10,
        margin: 4,
        marginLeft: 15
    },
    captainTextStyle: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
})