import React, { useEffect, useState, useRef } from 'react';
import { showToast } from '../../../helper/Util';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournamentsIdle, getAllTournamentsRequest, getUpcomingMatchesIdle, getUpcomingMatchesRequest } from '../../../store/ducks/app/actions';

const HomeServiceComponent = ({ children, navigation, }) => {


    const dispatch = useDispatch();
    const [reLoad, setReLoad] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [allTournamentsData, setAllTournamentsData] = useState([]);
    const [upcomingMatchesData, setUpcomingMatchesData] = useState([]);
    var getAllTournamentsData = useSelector(state => state.app.getAllTournaments)
    var getUpcomingMatchesData = useSelector(state => state.app.getUpcomingMatches)


    useEffect(() => {
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

    useEffect(() => {
        if (getUpcomingMatchesData.status === 'success') {
            // console.log('>> getUpcomingMatchesData ', getUpcomingMatchesData);
            setUpcomingMatchesData(getUpcomingMatchesData.data)
            setIsLoading(false)

            dispatch(getUpcomingMatchesIdle())

        }
        else if (getUpcomingMatchesData.status === 'failure') {

            setIsLoading(false)
            showToast(getUpcomingMatchesData.message)
            dispatch(getUpcomingMatchesIdle())
        }
    }, [getUpcomingMatchesData.status])

    const getDataAPI = () => {
        setIsLoading(true)
        dispatch(getAllTournamentsRequest())
        dispatch(getUpcomingMatchesRequest())

    }


    return children({
        navigation,


        isLoading,
        setIsLoading,
        allTournamentsData,
        setAllTournamentsData,
        upcomingMatchesData,
        setUpcomingMatchesData,




    });

}

export default HomeServiceComponent;
