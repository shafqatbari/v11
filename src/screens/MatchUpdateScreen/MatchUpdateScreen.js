import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/choose-captain/header'
import StepsBar from '../../components/choose-captain/stepsBar'
import SvgImage from '../../helper/SvgImage';
import colors from '../../helper/colors';
import PlayersIcon from '../../components/choose-captain/PlayersIcon';
import { ArrowDown, Plus, Circle } from '../../helper/CommonImagesPath';

const MatchUpdateScreen = () => {
    const header = 'Match Updates'
    const header1 = ''

    const PlayersData = () => {
        const matchesData = [
            {
                id: 1,
                team1: "England",
                team2: "Australia",
                ReamainingTime: "4hr 10m 20s",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                prize: "$3000"
            },
            {
                id: 2,
                team1: "England",
                team2: "Australia",
                ReamainingTime: "4hr 10m 20s",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                prize: "$3000"
            },
            {
                id: 3,
                team1: "England",
                team2: "Australia",
                ReamainingTime: "4hr 10m 20s",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                prize: "$3000"
            },
            {
                id: 4,
                team1: "England",
                team2: "Australia",
                ReamainingTime: "4hr 10m 20s",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                prize: "$3000"
            },
            {
                id: 5,
                team1: "England",
                team2: "Australia",
                ReamainingTime: "4hr 10m 20s",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                prize: "$3000"
            },
            {
                id: 6,
                team1: "England",
                team2: "Australia",
                ReamainingTime: "4hr 10m 20s",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                prize: "$3000"
            }
        ]


        return (
            <View style={{ flex: 1, backgroundColor: "#D5D6D7", alignItems: "center", marginTop: 5 }}>
                <FlatList
                    data={matchesData}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 125, width: 340, backgroundColor: "#82469C", borderRadius: 30, marginBottom: 10 }}>
                                <View style={{ alignItems: "center", }}>
                                    <View style={{ position: "absolute", marginTop: 30, }}>
                                        <View style={{ position: "absolute", marginLeft: -145 }}>
                                            <Image style={styles.imageStyle} source={{ uri: item.img }} />
                                            <Text style={{ textAlign: "center", fontSize: 10, color: "white" }}>England</Text>
                                        </View>
                                    </View>
                                    <View style={{ position: "absolute", marginTop: 30, }}>
                                        <View style={{ position: "absolute", marginLeft: 80 }}>
                                            <Image style={styles.imageStyle} source={{ uri: item.img }} />
                                            <Text style={{ textAlign: "center", fontSize: 10, color: "white" }}>Australia</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <View style={{ position: "absolute", backgroundColor: "#522F91", height: 25, width: 279, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
                                        <Text style={{ marginTop: 5, marginLeft: 15, position: "absolute", fontSize: 10, color: "white" }}>{item.team1} vs {item.team2}</Text>
                                        <Text style={{ marginTop: -130, marginLeft: 210, position: "absolute", fontSize: 10, color: "white" }}>{item.ReamainingTime}</Text>
                                    </View>
                                    <View style={{ position: "absolute", backgroundColor: "#522F91", marginTop: 100, height: 25, width: 162, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                        <Text style={{ textAlign: "left", fontSize: 10, color: "white", position: "absolute", marginLeft: 15, marginTop: 5 }}>MEGA  {item.prize}</Text>
                                        <Text style={{ textAlign: "center", position: "absolute", fontSize: 10, color: "white", marginTop: 5, marginLeft: 125, }}>icon</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }



    return (
        <View style={{ flex: 1, backgroundColor: "#D5D6D7" }}>
            <>
                <Header header1={header} header2={header1} />
            </>
            <>
                <StepsBar />
            </>
            <View style={{ height: 20, width: "100%", }}>
                <Text style={{ position: "absolute", marginTop: 0, marginLeft: 50, fontSize: 14, fontWeight: "bold" }}>Upcoming Matches  </Text>
            </View>
            <View style={styles.UpcomingMatchStyle}>
                {PlayersData()}
            </View>
        </View>
    )
}

export default MatchUpdateScreen

const styles = StyleSheet.create({
    UpcomingMatchStyle: {
        marginTop: 0,
        flex: 5,
        backgroundColor: "#D5D6D7",
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
        height: 65,
        borderRadius: 130 / 2,
    },
    captainTextStyle: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
})