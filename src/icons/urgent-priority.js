import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const UrgentPriorityIcon = () => {
    const iconStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "red",
        border: "1px solid blue",
        borderRadius: "50%",
        padding: "2px",
        height: "20px",
        width: "20px"
    };

    const iconInnerStyle = {
        height: '100%',
        width: '100%'
    };

    return (
        <div style={iconStyle}>
            <FontAwesomeIcon icon={faExclamation} style={iconInnerStyle} />
        </div>
    );
}

export default UrgentPriorityIcon;
