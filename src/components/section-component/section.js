import React from 'react';
import './section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisH, faCircle } from '@fortawesome/free-solid-svg-icons'
import CardComponent from '../card-component/card';
import ProfileComponent from '../card-component/profile';
import NoPriorityIcon from '../../icons/no-priority';
import LowPriorityIcon from '../../icons/low-priority';
import MediumPriorityIcon from '../../icons/medium-priority';
import HighPriorityIcon from '../../icons/high-priority';
import UrgentPriorityIcon from '../../icons/urgent-priority';



const SectionComponent = (data) => {

    const renderHeader = (type, header, available, len) => {
        const priorityText = ['No priority', 'Low', 'Medium', 'High', 'Urgent']
        const priorityIcons = [<NoPriorityIcon/>, <LowPriorityIcon/>, <MediumPriorityIcon/>, <HighPriorityIcon/>, <UrgentPriorityIcon/>]
        if (type === 'user') {
            return (
                <div className='sectionHeaderStart'>
                    <ProfileComponent available={available}/>
                    <h1>{header}</h1>
                    <p>{len}</p>
                </div>
            )
        } else if(type === 'priority') {
            return (
                <div className='sectionHeaderStart'>
                    {priorityIcons[header]}
                    <h2>{priorityText[header]}</h2>
                    <p>{len}</p>
                </div>
            )
        } else if(type === 'status') {
            return (
                <div className='sectionHeaderStart'>
                    <FontAwesomeIcon icon={faCircle} />
                    <h2>{header}</h2>
                    <p>{len}</p>
                </div>
            )
        }
    }

    return (
        <div className="section">
            <div className='sectionHeader'>
                <div className='sectionHeaderStart'>
                    {renderHeader(data.type,data.name,data.available,data.tickets.length)}
                    
                </div>
                <div className='rightData'>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div>
            <div className='sectionBody'>
                {data.tickets.map((content) => (
                    <CardComponent key={content.id} id={content.id} title={content.title} priority={content.priority} tags={content.tag} available={content.available}/>
                ))}
            </div>
        </div>
    )
}

export default SectionComponent