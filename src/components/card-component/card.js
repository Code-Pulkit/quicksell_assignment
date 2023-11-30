import React from 'react';
import './card.css';
import ProfileComponent from './profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagComponent from './tag';
import NoPriorityIcon from '../../icons/no-priority';
import LowPriorityIcon from '../../icons/low-priority';
import MediumPriorityIcon from '../../icons/medium-priority';
import HighPriorityIcon from '../../icons/high-priority';
import UrgentPriorityIcon from '../../icons/urgent-priority';

const CardComponent = ({ id, available, title, priority, tags, featureRequested }) => {
    const priorityIcons = [
        <NoPriorityIcon />,
        <LowPriorityIcon />,
        <MediumPriorityIcon />,
        <HighPriorityIcon />,
        <UrgentPriorityIcon />
    ];

    return (
        <div className="card">
            <div className="card-title">
                <span>{id}</span>
                <ProfileComponent available={available} />
            </div>
            <div className="checkbox-container">
                <input type="checkbox" id={`checkbox-${id}`} defaultChecked={featureRequested} />
                <label htmlFor={`checkbox-${id}`}>{title}</label>
            </div>
            <div className="card-footer">
                {priorityIcons[priority]}
                {tags.map((tag, index) => (
                    <TagComponent key={index} name={tag} />
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
