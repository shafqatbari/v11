import React, { useEffect, useState, useRef } from 'react';
import { showToast } from '../../../helper/Util';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournamentsIdle, getAllTournamentsRequest, getUpcomingMatchesIdle, getUpcomingMatchesRequest } from '../../../store/ducks/app/actions';

const TournamentScreenServiceComponent = ({ children, navigation, route }) => {

    console.log('>>> route ', route.params?.type);

    const dispatch = useDispatch();
    const [reLoad, setReLoad] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    // const [fromTab, setFromTab] = useState(route.params?.type);
    const [allTournamentsData, setAllTournamentsData] = useState([]);
    var getAllTournamentsData = useSelector(state => state.app.getAllTournaments)
    var getUpcomingMatchesData = useSelector(state => state.app.getUpcomingMatches)
    const [activeButton, setActiveButton] = useState('')

    const [tabSelectionTop, setTabSelectionTop] = useState(1)
    const [tabsNames, setTabsNames] = useState({
        one: 1,
        two: 2,
        three: 3,
        four: 4
    })


    const [TournamentData, setTournamentData] = useState([
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
    )
    const [matchesData, setMatchesData] = useState([
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
    ])
    const [playersMatchesData, setPlayersMatchesData] = useState(
        [
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
    )


    useEffect(() => {
        let typeRecevied = route.params?.type
        if (typeRecevied === 'tournament') {
            setTabSelectionTop(tabsNames.one)
        }
        else if (typeRecevied === 'matches') {
            setTabSelectionTop(tabsNames.two)
        }
        else if (typeRecevied === 'team') {
            setTabSelectionTop(tabsNames.three)
        }
        else {

        }
        getDataAPI()
    }, []);


    useEffect(() => {
        if (getAllTournamentsData.status === 'success') {
            // console.log('>> getAllTournamentsData ', getAllTournamentsData);
            // setAllTournamentsData(getAllTournamentsData.data)
            setAllTournamentsData([{ name: 'PSL' }])
            setIsLoading(false)

            dispatch(getAllTournamentsIdle())

        }
        else if (getAllTournamentsData.status === 'failure') {

            setIsLoading(false)
            showToast(getAllTournamentsData.message)
            dispatch(getAllTournamentsIdle())
        }
    }, [getAllTournamentsData.status])


    const getDataAPI = () => {


    }


    return children({
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




    });

}

export default TournamentScreenServiceComponent;
