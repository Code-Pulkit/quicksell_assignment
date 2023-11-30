import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const NoPriorityIcon = () => {
    const iconStyle = {
        color: "grey",
        border: "1px solid blue",
        borderRadius: "50%",
        padding: "2px",
        height: "20px",
        width: "20px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={iconStyle}>
            <FontAwesomeIcon icon={faEllipsisH} />
        </div>
    );
}

export default NoPriorityIcon;
