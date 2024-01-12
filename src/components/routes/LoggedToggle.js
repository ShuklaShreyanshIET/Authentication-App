import React from 'react'
import LoggedRoutes from './LoggedRoutes';
import NotLoggedRoutes from './NotLoggedRoutes';
import { useSelector } from 'react-redux';
import SwipeableLogged from '../navigation/SwipeableLogged';
import SwipeableNotLogged from '../navigation/SwipeableNotLogged';
import '../../scss/modules/_nav.scss';



const LoggedToggle = () => {

    const toggleLogged = useSelector(state => state.isLogged)

    const NotLoggedApp = () => {

        return (
            <div className="main">
                <div className="content-nav">
                    <SwipeableNotLogged />
                </div>
                <div className="content">
                    <NotLoggedRoutes />
                </div>
            </div>
            )
    }
    
    const LoggedApp = () => {
        
        return (
        <div className="main">
                <div className="content-nav">
                    <SwipeableLogged/>
                </div>
            <div className="content">
                <LoggedRoutes/>
            </div>
        </div>
        )
    }

    return (
        <div>
            {toggleLogged ? <LoggedApp /> : <NotLoggedApp />}
        </div>
    )
}

export default LoggedToggle
