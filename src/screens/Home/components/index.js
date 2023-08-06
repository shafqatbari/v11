import React, { useState } from 'react';
import {
    View, SafeAreaView, Text, ActivityIndicator, Platform, StatusBar,
    RefreshControl, TouchableOpacity, ScrollView, Image, FlatList,
    BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
import colors from '../../../helper/colors';
import { screenHeight, screenWidth } from '../../../helper/Util';

import Header from '../../../components/choose-captain/header'
import StepsBar from '../../../components/choose-captain/stepsBar';
import HeaderScreen from '../../../components/HeaderScreen';
import FontsName from '../../../helper/FontsName';
import { strings } from '../../../helper/Localization';
import SvgImage from '../../../helper/SvgImage';
import ScreenNames from '../../../helper/ScreenNames';
const HomecreenComponent = ({
    navigation,

    isLoading,
    setIsLoading,
    allTournamentsData,
    setAllTournamentsData,
    upcomingMatchesData,
    setUpcomingMatchesData,

}) => {



    const upcomingMatchesRenderItem = (item) => {

        return (
            <TouchableOpacity
                style={{ width: screenWidth * 0.35, height: screenHeight * 0.25, marginEnd: 20 }}
                onPress={() => {
                    navigation.navigate(ScreenNames.TournamentScreen, { type: 'team' })
                }}

            >
                <SvgImage
                    source={{ uri: item.team1Logo }}
                    style={{ width: screenWidth * 0.35, height: screenHeight * 0.25, borderRadius: 40, backgroundColor: colors.GrayF9F9F9 }} />
                <View style={{ position: 'absolute', bottom: -20, justifyContent: 'center', alignItems: 'center', width: screenWidth * 0.35, }} >
                    <View style={{ borderRadius: 30, borderWidth: 2, borderColor: 'green', backgroundColor: colors.White }} >
                        <Text style={{
                            fontFamily: FontsName.SemiBold, fontSize: 10,
                            color: colors.Black212121, marginVertical: 7,
                            marginHorizontal: 10,
                        }} >
                            {item.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )


    }
    const allTournamentsRenderItem = (item) => {

        return (
            <TouchableOpacity
                style={{ width: screenWidth * 0.35, height: screenHeight * 0.25, marginEnd: 20 }}
                onPress={() => {
                    navigation.navigate(ScreenNames.TournamentScreen, { type: 'matches' })
                }}
            >
                <SvgImage
                    source={{ uri: item.team1Logo }}
                    style={{ width: screenWidth * 0.35, height: screenHeight * 0.25, borderRadius: 40, backgroundColor: colors.GrayF9F9F9 }} />
                <View style={{ position: 'absolute', bottom: -20, justifyContent: 'center', alignItems: 'center', width: screenWidth * 0.35, }} >
                    <View style={{ borderRadius: 30, borderWidth: 2, borderColor: 'green', backgroundColor: colors.White }} >
                        <Text style={{
                            fontFamily: FontsName.SemiBold, fontSize: 10,
                            color: colors.Black212121, marginVertical: 7,
                            marginHorizontal: 10,
                        }} >
                            {item.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )


    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.White }} >
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                colors={['#9972E0', '#533092']} style={[{
                    height: 50,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }]}
            >
                <View style={{ flex: 1, width: screenWidth, }} >
                    <HeaderScreen
                    />

                    <View style={{ flex: 1, width: screenWidth, marginHorizontal: 20 }} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ScreenNames.TournamentScreen, { type: 'tournament' })}
                        >
                            <Text style={{
                                fontFamily: FontsName.Bold, fontSize: 14,
                                color: colors.White, marginVertical: 5,
                            }} >
                                {strings.upcomingTournaments}
                            </Text>
                        </TouchableOpacity>
                        <FlatList
                            style={{ marginTop: 10 }}
                            horizontal={true}
                            data={allTournamentsData}
                            renderItem={({ item }) => allTournamentsRenderItem(item)}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ScreenNames.TournamentScreen, { type: 'matches' })}
                        >
                            <Text style={{
                                fontFamily: FontsName.Bold, fontSize: 14,
                                color: colors.White, marginVertical: 5,
                            }} >
                                {strings.upcomingMatches}
                            </Text>
                        </TouchableOpacity>
                        <FlatList
                            style={{ marginTop: 10 }}
                            horizontal={true}
                            data={upcomingMatchesData}
                            renderItem={({ item }) => upcomingMatchesRenderItem(item)}
                        />


                    </View>
                </View>

            </LinearGradient>

            <CustomActivityIndicator
                isLoading={isLoading}
            />

        </SafeAreaView >
    );
};


export default HomecreenComponent;
