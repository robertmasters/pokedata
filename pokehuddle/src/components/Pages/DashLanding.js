import React from 'react'
import './DashLanding.css'

export default function DashLanding() {
    return (
        <div className = "component-container">
            <h1>Welcome!</h1>
            <div className = "dash-landing-container">
                <div className = "favorite-notification-container">
                    <div>
                        <img className ="favoritestextimg" src = {require('../../images/favoritestext.png').default} alt = 'favorites' />
                    </div>
                    <div>
                        <img className ="notificationstextimg" src = {require('../../images/notificationstext.png').default} alt = 'notifications' />
                    </div>
                </div>
                
                <div className = "news-container">
                    <img className ="newstextimg" src = {require('../../images/newstext.png').default} alt = 'news' />
                </div>
            </div>
        </div>
    )
}
