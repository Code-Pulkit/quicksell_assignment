import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal} from '@fortawesome/free-solid-svg-icons'


const MediumPriorityIcon = () => {
    const iconStyle = {
        color: "yellow",
        border: "1px solid blue",
        borderRadius: "50%",
        padding: "2px",
        height: "20px"
      };
      return(
        <div style={iconStyle}>
            <FontAwesomeIcon icon={faSignal} />
        </div>
      )
    
}

export default MediumPriorityIcon