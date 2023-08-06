import React, { useState } from 'react';
import {
    View, SafeAreaView, Text, ActivityIndicator, Platform, StatusBar,
    RefreshControl, TouchableOpacity, ScrollView, Image, FlatList,
    BackHandler,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
import colors from '../../../helper/colors';
import { screenHeight, screenWidth } from '../../../helper/Util';

import Header from '../../../components/choose-captain/header'
import StepsBar from '../../../components/stepsBar';
import HeaderScreen from '../../../components/HeaderScreen';
import FontsName from '../../../helper/FontsName';
import { strings } from '../../../helper/Localization';
import SvgImage from '../../../helper/SvgImage';
import PlayersIcon from '../../../components/choose-captain/PlayersIcon';
import {
    ArrowDown, Plus, Circle, TVicon,
    CirclePlusGreen, ArrowLeftDynamic,
    MedalIcon, TicketIcon, TrophyIcon

} from '../../../helper/CommonImagesPath';

import * as Progress from 'react-native-progress';



const TournamentScreenComponent = ({
    navigation,

    isLoading,
    setIsLoading,
    matchesData,
    TournamentData,
    playersMatchesData,
    setPlayersMatchesData,
    activeButton,
    setActiveButton,
    tabSelectionTop,
    setTabSelectionTop,
    tabsNames,

}) => {



    const tournamentDataRenderItem = (item) => {
        // console.log('>>>> item', item);
        return (
            <View style={{
                backgroundColor: colors.Purple82469C, borderRadius: 30,
                marginHorizontal: 10, paddingHorizontal: 20,
                marginTop: 15, flexDirection: 'row',
                justifyContent: 'space-between',
            }}>

                <View style={{ marginVertical: 20 }}>
                    <Image style={styles.imageStyle} source={{ uri: item.img }} />
                    <Text style={{ textAlign: "center", fontSize: 10, color: colors.White, marginTop: 5, fontFamily: FontsName.Medium }}>England</Text>
                </View>

                <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ backgroundColor: colors.Purple522F91, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
                        <Text style={{ fontSize: 10, color: colors.White, marginVertical: 5, marginHorizontal: 20, fontFamily: FontsName.SemiBold }}>{item.team1} vs {item.team2}</Text>
                    </View>
                    <View style={{ backgroundColor: colors.Purple522F91, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Text style={{ fontSize: 10, color: colors.White, marginVertical: 5, marginHorizontal: 20, fontFamily: FontsName.SemiBold }}>{item.ReamainingTime}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Image style={styles.imageStyle} source={{ uri: item.img }} />
                    <Text style={{ textAlign: "center", fontSize: 10, color: colors.White, marginTop: 5, fontFamily: FontsName.Medium }}>Australia</Text>
                </View>


            </View>
        )


    }

    const TounamentsRenderView = () => {



        return (
            <View style={{ flex: 1 }} >
                <Text style={{
                    fontFamily: FontsName.Bold, fontSize: 14,
                    color: colors.Black212121,
                    marginHorizontal: 20, marginTop: 25, marginBottom: 10
                }} >
                    {strings.upcomingTournaments}
                </Text>
                <FlatList
                    data={TournamentData}
                    renderItem={({ item }) => tournamentDataRenderItem(item)}
                />
            </View>

        )
    }

    const matchesDataRenderItem = (item) => {
        // console.log('>>>> item', item);
        return (
            <View style={{
                backgroundColor: colors.Purple82469C, borderRadius: 30,
                marginHorizontal: 10, paddingHorizontal: 20,
                marginTop: 15,
                justifyContent: 'space-between',
            }}>
                <View style={{
                    backgroundColor: colors.Purple522F91, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingVertical: 5,
                    marginHorizontal: 10, paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row',
                }}>
                    <Text style={{ fontSize: 10, color: colors.White, fontFamily: FontsName.SemiBold }}>{item.team1} vs {item.team2}</Text>
                    <Text style={{ fontSize: 10, color: colors.White, fontFamily: FontsName.SemiBold }}>{item.ReamainingTime}</Text>

                </View>


                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <View style={{}}>
                        <Image style={styles.imageStyle} source={{ uri: item.img }} />
                        <Text style={{ textAlign: "center", fontSize: 10, color: colors.White, marginTop: 5, fontFamily: FontsName.Medium }}>{item.team1}</Text>

                    </View>
                    <View>
                        <View style={{}}>
                            <Image style={styles.imageStyle} source={{ uri: item.img }} />
                            <Text style={{ textAlign: "center", fontSize: 10, color: colors.White, marginTop: 5, fontFamily: FontsName.Medium }}>{item.team2}</Text>
                        </View>
                    </View>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{
                        backgroundColor: colors.Purple522F91, borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingVertical: 5,
                        marginHorizontal: 10, paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 10, color: colors.White, fontFamily: FontsName.SemiBold }}>MEGA {item.prize}</Text>
                        <View style={{ width: 40 }} >

                        </View>
                        <SvgImage
                            source={TVicon}
                            style={{ height: 20, width: 20 }}
                        />
                    </View>
                </View>



            </View>
        )


    }
    const MathcesRenderView = () => {



        return (
            <View style={{ flex: 1 }} >
                <Text style={{
                    fontFamily: FontsName.Bold, fontSize: 14,
                    color: colors.Black212121,
                    marginHorizontal: 20, marginTop: 25, marginBottom: 10
                }} >
                    {strings.upcomingMatches}
                </Text>
                <FlatList
                    data={matchesData}
                    renderItem={({ item }) => matchesDataRenderItem(item)}
                />
            </View>

        )
    }

    const PlayersSelectionView = () => {

        return (
            <View style={{ flex: 1, }}>

                <PlayersIcon />

                <View style={{
                    backgroundColor: colors.Purple522F91, paddingHorizontal: 10,
                    borderTopLeftRadius: 40, borderTopRightRadius: 40, flex: 1,
                }} >

                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20, marginBottom: 5 }}>
                        <View style={{ width: 20 }} >

                        </View>

                        <Text style={{ fontSize: 12, color: colors.White, fontFamily: FontsName.Medium }}>
                            Selected by
                        </Text>
                        <Text style={{ fontSize: 12, color: colors.White, fontFamily: FontsName.Medium }}>
                            Points
                        </Text>
                        <View style={{ flexDirection: 'row', }} >
                            <Text style={{ fontSize: 12, color: colors.White, fontFamily: FontsName.Medium }}>
                                Credits
                            </Text>
                            <SvgImage
                                source={ArrowDown}
                                style={{ height: 25, width: 20, color: colors.Red, marginTop: -5 }}
                            />
                        </View>
                    </View>

                    <FlatList
                        data={playersMatchesData}
                        extraData={playersMatchesData}
                        renderItem={({ item, index }) => {
                            console.log("item", item.title);
                            return (
                                <View style={{
                                    flexDirection: 'row', backgroundColor: colors.White,
                                    borderRadius: 20,
                                    marginBottom: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={styles.imageStyle} source={{ uri: item.img }} />

                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 14, color: colors.Black212121, fontFamily: FontsName.SemiBold,
                                                    marginStart: 5
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 10, color: colors.Black212121, fontFamily: FontsName.Regular,
                                                    marginStart: 5
                                                }}
                                            >
                                                {item.playerRatio}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{
                                            fontSize: 14, color: colors.Black212121, fontFamily: FontsName.SemiBold
                                        }}
                                        >
                                            58
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>


                                        <Text style={{
                                            fontSize: 14, color: colors.Black212121, fontFamily: FontsName.SemiBold
                                        }}
                                        >
                                            9.0
                                        </Text>
                                        <TouchableOpacity
                                            style={{
                                                paddingHorizontal: 20,
                                                paddingVertical: 10,

                                            }}>
                                            <SvgImage
                                                source={CirclePlusGreen}
                                                style={{ height: 25, width: 25, }}
                                            />

                                        </TouchableOpacity>

                                    </View>
                                </View>


                            )
                        }}
                    />

                </View>
            </View >
        )
    }
    const CaptainSelectionView = () => {

        return (
            <View style={{ flex: 1, marginTop: 20 }}>

                <View style={{
                    backgroundColor: colors.Purple522F91, paddingHorizontal: 10,
                    borderTopLeftRadius: 40, borderTopRightRadius: 40, flex: 1,
                }} >

                    <View style={{ margin: 20 }}>


                        <Text style={{ fontSize: 14, color: colors.White, fontFamily: FontsName.Bold, textAlign: 'center' }}>
                            Choose your Captain and Vice Captain
                        </Text>
                        <Text style={{ fontSize: 12, color: colors.White, fontFamily: FontsName.Regular, textAlign: 'center' }}>
                            C gets 2x points, VC gets 1.5x points
                        </Text>

                    </View>

                    <FlatList
                        data={playersMatchesData}
                        extraData={playersMatchesData}
                        renderItem={({ item, index }) => {
                            console.log("item", item.title);
                            return (
                                <View style={{
                                    flexDirection: 'row', backgroundColor: colors.White,
                                    borderRadius: 20,
                                    marginBottom: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={styles.imageStyle} source={{ uri: item.img }} />

                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 14, color: colors.Black212121, fontFamily: FontsName.SemiBold,
                                                    marginStart: 5
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 10, color: colors.Black212121, fontFamily: FontsName.Regular,
                                                    marginStart: 5
                                                }}
                                            >
                                                {'58'}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>



                                        <TouchableOpacity style={{
                                            paddingHorizontal: 2

                                        }}
                                            onPress={() => setActiveButton("C")}
                                        >
                                            <View style={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 40,
                                                justifyContent: "center",
                                                alignItems: 'center',
                                                // backgroundColor: "#9B9B9B",
                                                backgroundColor: activeButton !== "C" ? '#9A73E1' : '#9B9B9B',
                                            }} >
                                                <Text style={{
                                                    fontSize: 18, color: colors.White, fontFamily: FontsName.Bold,

                                                }}>{item.captain}</Text>
                                            </View>
                                        </TouchableOpacity>


                                        <TouchableOpacity style={{
                                            marginStart: 5,
                                            paddingHorizontal: 2
                                        }}
                                            onPress={() => setActiveButton("VC")}
                                        >
                                            <View style={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 40,
                                                justifyContent: "center",
                                                alignItems: 'center',
                                                // backgroundColor: "#9B9B9B",
                                                backgroundColor: activeButton !== "VC" ? '#9A73E1' : '#9B9B9B',
                                            }}>
                                                <Text style={{
                                                    fontSize: 18, color: colors.White, fontFamily: FontsName.Bold,

                                                }}>{item.viceCaptain}</Text>
                                            </View>
                                        </TouchableOpacity>


                                    </View>
                                </View>


                            )
                        }}
                    />

                </View>
            </View >
        )
    }

    const ContestsView = () => {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: colors.GrayD5D6D8, marginHorizontal: 5 }}>
                    <View style={{ marginStart: 30 }}>
                        <Text style={{ fontSize: 14, color: colors.Black212121, fontFamily: FontsName.SemiBold }}>
                            Mega Contests
                        </Text>
                        <Text style={{ fontSize: 15, color: "black" }}>
                            Get ready for mega winnings!
                        </Text>
                    </View>

                    <View style={styles.contest_outer}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 5 }} >
                            <View>
                                <View
                                    style={{

                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12, color: colors.GrayD5D6D8, fontFamily: FontsName.SemiBold

                                        }}
                                    >
                                        Prize Pool
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 12, color: colors.GrayD5D6D8, fontFamily: FontsName.SemiBold

                                        }}
                                    >
                                        Entry
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text
                                        style={{
                                            fontSize: 24, color: colors.GrayF9F9F9, fontFamily: FontsName.SemiBold
                                        }}
                                    >
                                        PKR. 3000
                                    </Text>
                                    <View style={{ backgroundColor: colors.Purple522F91, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                                        <Text style={{
                                            fontSize: 18, color: colors.GrayF9F9F9, fontFamily: FontsName.SemiBold
                                        }}>
                                            PKR. 49
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginBottom: 10, marginTop: 30 }}>
                                <Progress.Bar progress={0.6} width={screenWidth * 0.8}
                                    unfilledColor={colors.White}
                                    color={colors.pinkAF599C}
                                    borderWidth={0}
                                    height={10}
                                    borderRadius={10}

                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{
                                    fontSize: 12, color: colors.GrayF9F9F9, fontFamily: FontsName.Medium

                                }}>
                                    Spots Left: 98
                                </Text>
                                <Text style={{
                                    fontSize: 12, color: colors.GrayD5D6D8, fontFamily: FontsName.Medium

                                }}>
                                    Total Spots: 250
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            backgroundColor: colors.White, paddingHorizontal: 20,
                            alignItems: 'center',
                            paddingVertical: 10,
                        }}>
                            <View style={{ flexDirection: 'row' }}>

                                <SvgImage
                                    source={MedalIcon}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 14, color: colors.Black212121, fontFamily: FontsName.Medium

                                    }}
                                >
                                    PKR 2000
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <SvgImage
                                    source={TrophyIcon}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 14, color: colors.Black212121, fontFamily: FontsName.Medium

                                    }}
                                >
                                    50%
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <SvgImage
                                    source={TicketIcon}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 14, color: colors.Black212121, fontFamily: FontsName.Medium,
                                        marginStart: 10,

                                    }}
                                >
                                    Upto 11 entries
                                </Text>
                            </View>
                        </View>

                    </View>


                    <View style={{ marginStart: 30, marginTop: 20 }}>
                        <Text style={{ fontSize: 14, color: colors.Black212121, fontFamily: FontsName.SemiBold }}>
                            Only For Beginners
                        </Text>
                        <Text style={{ fontSize: 15, color: "black" }}>
                            Play your first contest now!
                        </Text>
                    </View>

                    <View style={styles.contest_outer}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 5 }} >
                            <View>
                                <View
                                    style={{

                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12, color: colors.GrayD5D6D8, fontFamily: FontsName.SemiBold

                                        }}
                                    >
                                        Prize Pool
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 12, color: colors.GrayD5D6D8, fontFamily: FontsName.SemiBold

                                        }}
                                    >
                                        Entry
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text
                                        style={{
                                            fontSize: 24, color: colors.GrayF9F9F9, fontFamily: FontsName.SemiBold
                                        }}
                                    >
                                        PKR. 3000
                                    </Text>
                                    <View style={{ backgroundColor: colors.Purple522F91, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                                        <Text style={{
                                            fontSize: 18, color: colors.GrayF9F9F9, fontFamily: FontsName.SemiBold
                                        }}>
                                            PKR. 49
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginBottom: 10, marginTop: 30 }}>
                                <Progress.Bar progress={0.6} width={screenWidth * 0.8}
                                    unfilledColor={colors.White}
                                    color={colors.pinkAF599C}
                                    borderWidth={0}
                                    height={10}
                                    borderRadius={10}

                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{
                                    fontSize: 12, color: colors.GrayF9F9F9, fontFamily: FontsName.Medium

                                }}>
                                    Spots Left: 98
                                </Text>
                                <Text style={{
                                    fontSize: 12, color: colors.GrayD5D6D8, fontFamily: FontsName.Medium

                                }}>
                                    Total Spots: 250
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            backgroundColor: colors.White, paddingHorizontal: 20,
                            alignItems: 'center',
                            paddingVertical: 10,
                        }}>
                            <View style={{ flexDirection: 'row' }}>

                                <SvgImage
                                    source={MedalIcon}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 14, color: colors.Black212121, fontFamily: FontsName.Medium

                                    }}
                                >
                                    PKR 2000
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <SvgImage
                                    source={TrophyIcon}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 14, color: colors.Black212121, fontFamily: FontsName.Medium

                                    }}
                                >
                                    50%
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <SvgImage
                                    source={TicketIcon}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 14, color: colors.Black212121, fontFamily: FontsName.Medium,
                                        marginStart: 10,

                                    }}
                                >
                                    Upto 11 entries
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </>
        );
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.GrayD5D6D8 }} >

            <View style={{ flex: 1, backgroundColor: colors.GrayD5D6D8 }} >

                <HeaderScreen
                    typeHeaderText={true}
                    Title={strings.tournamentUpdates}
                    balance={1350}
                    onPressLeft={() => {
                        navigation.goBack()
                    }}
                />
                <StepsBar
                    slectedTab={tabSelectionTop}
                    onPressTab={(text) => {
                        setTabSelectionTop(text)
                    }}
                />
                {tabSelectionTop === tabsNames.one ? TounamentsRenderView() : null}
                {tabSelectionTop === tabsNames.two ? MathcesRenderView() : null}
                {tabSelectionTop === tabsNames.three ? PlayersSelectionView() : null}
                {tabSelectionTop === tabsNames.four ? ContestsView() : null}





            </View>



            <CustomActivityIndicator
                isLoading={isLoading}
            />

        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    UpcomingTournamentStyle: {
        flex: 1,
        marginTop: 10,
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
    },


    progress: {

        flexDirection: "column",
        borderColor: "white",
        height: 80,
        width: 340,
        borderRadius: 40,
        borderWidth: 1,
        marginLeft: 22,
        backgroundColor: "#F9F9F9",
    },
    circle: {
        // color: '#9972E0',
        backgroundColor: "#9972E0",
        height: 30,
        width: 30,
        borderRadius: 40,
        justifyContent: "center",
    },
    circle_left: {
        backgroundColor: "#9B9B9B",
        height: 30,
        width: 30,
        borderRadius: 40,
        justifyContent: "center",
    },
    contest_outer: {

        borderRadius: 40,

        backgroundColor: colors.Purple9972E0,

        paddingTop: 10,
        marginHorizontal: 10,
        marginTop: 10,
        overflow: 'hidden'
    },
    contest_inner_bottom: {

        flex: 1,
        flexDirection: "column",
        borderColor: "white",
        height: 50,
        width: 338,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderWidth: 1,

        backgroundColor: "#F9F9F9",
    },
    icons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    entry: {

    },

    total_bar: {
        flex: 1,
        backgroundColor: "white",
        height: 10,
        width: 289,
        borderRadius: 5,
        borderWidth: 1,

    },
    bar_text: {
        flex: 1,
        flexDirection: "row",
        marginTop: "27%",
        marginLeft: "10%",
        justifyContent: "space-between",
    },
    bg_contest_outer: {
        // top: 320,
        flex: 1,
        flexDirection: "column",
        borderColor: "transparent",
        height: 161,
        width: 340,
        borderRadius: 40,
        borderWidth: 1,
        marginLeft: 22,
        backgroundColor: "#533092",
    },
})

export default TournamentScreenComponent;
