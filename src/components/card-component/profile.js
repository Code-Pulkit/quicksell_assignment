import React from 'react';
import './card.css';

const ProfileComponent = (data) => {
    
    return (
        <div className="user-photo-container">
            <img className="user-photo" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Photo"/>
            <div className={"status-indicator" + (data.available ? '' : ' offline')}></div>
        </div>
    )
}

export default ProfileComponent