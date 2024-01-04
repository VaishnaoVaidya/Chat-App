import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//context
const AuthContext = createContext()

//Provider
const AuthProvider = () => {
    // global state
    const [state, setState] = useState({
        user: null,
        token: "",
    }) ;

    //default axios setting 
    axios.defaults.baseURL = "https://.........................../api/v1"

    // initial local storagedata
    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem("@auth")
            let loginData = JSON.parse(data)
            setState ({...state, user: date?.user , token : data?.token}) 

        }
        loadLocalStorageData()
    }, [])

    return (
        <AuthContext.Provider value={[state , setState]}>
           {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider }