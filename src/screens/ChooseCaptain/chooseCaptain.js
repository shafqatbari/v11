import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import PreviewModal from '../../components/choose-captain/previewModal'
import Header from '../../components/choose-captain/header'
import StepsBar from '../../components/choose-captain/stepsBar'

const ChooseCaptain = () => {


    const header = 'Header'




    const PlayersData = () => {
        const playerData = [
            {
                id: 1,
                title: "shahid afridi",
                Role: "WK",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 2,
                title: "M.Rizwan",
                Role: "BAT",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 3,
                title: "shoaib akhtar",
                Role: "BOW",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 4,
                title: "wasim akram",
                Role: "ALL",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 5,
                title: "shaheen shah afridi",
                Role: "WK",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 6,
                title: "babr azam",
                Role: "BAT",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 7,
                title: "shahid afridi",
                Role: "BOW",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 8,
                title: "haris rauf",
                Role: "ALL",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
            {
                id: 9,
                title: "naseem shah",
                Role: "WK",
                shirtNo: "25",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                captain: "C",
                viceCaptain: "VC"
            },
        ]

        const [activeButton, setActiveButton] = useState('')

        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ marginTop: 60 }}>
                    <Text style={{
                        color: "white", textAlign: "center",
                        fontSize: 14, fontWeight: "bold"
                    }}
                    >
                        Choose your captain and vice captain
                    </Text>
                    <Text style={{
                        color: "white", textAlign: "center",
                        fontSize: 12,
                    }}
                    >
                        C gets 2x points, VC gets 1.5x points
                    </Text>
                </View>
                <View style={{ marginTop: 10, height: "100%", }}>
                    <FlatList
                        data={playerData}
                        extraData={playerData}
                        renderItem={({ item }) => {
                            // console.log("item", item.title);
                            return (
                                <View>
                                    <View style={{ alignItems: "center", }}>
                                        <View style={styles.container}>
                                            <View style={{}}>
                                                <Image style={styles.imageStyle} source={{ uri: item.img }} />
                                            </View>
                                            <View style={{ marginLeft: 5, marginTop: -2.5 }}>
                                                <Text style={{
                                                    color: "black", textAlign: "center",
                                                    marginTop: -70,
                                                }}
                                                >{item.title} {" "}{"("}{item.Role}{")"}</Text>
                                                <Text>{item.shirtNo}</Text>
                                            </View>
                                            <View style={{ position: "absolute" }}>
                                                <View style={{ flexDirection: "row", marginLeft: 250, marginTop: 13, }}>
                                                    <View>
                                                        <TouchableOpacity style={{
                                                            height: 30,
                                                            width: 35,
                                                            borderRadius: 65 / 2,
                                                            justifyContent: "center",
                                                            // backgroundColor: "#9B9B9B",
                                                            backgroundColor: activeButton !== "C" ? '#9A73E1' : '#9B9B9B',
                                                        }}
                                                            onPress={() => setActiveButton("C")}
                                                        >
                                                            <Text style={styles.captainTextStyle}>{item.captain}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ marginHorizontal: 8 }}>
                                                        <TouchableOpacity style={{
                                                            height: 30,
                                                            width: 35,
                                                            borderRadius: 65 / 2,
                                                            justifyContent: "center",
                                                            // backgroundColor: "#9B9B9B",
                                                            backgroundColor: activeButton !== "VC" ? '#9A73E1' : '#9B9B9B',
                                                        }}
                                                            onPress={() => setActiveButton("VC")}
                                                        >
                                                            <Text style={styles.captainTextStyle}>{item.viceCaptain}</Text>
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
                <Header header={header} />
            </>
            <>
                <StepsBar />
            </>
            <View style={styles.PlayersDataStyle}>
                {/* <PreviewModal /> */}
                {PlayersData()}
            </View>
        </View>
    )
}

export default ChooseCaptain

const styles = StyleSheet.create({
    PlayersDataStyle: {
        flex: 5,
        backgroundColor: "#522F91",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    container: {
        width: 340,
        flex: 1,
        height: 60,
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
    // captainButton: {
    //     height: 30,
    //     width: 35,
    //     borderRadius: 65 / 2,
    //     justifyContent: "center",
    //     // backgroundColor: "#9B9B9B",
    //     backgroundColor: activeButton === " " ? '#9B9B9B' : '#9A73E1',
    // },
    captainTextStyle: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
})