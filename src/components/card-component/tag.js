import React from 'react';
import './card.css';

const TagComponent = (data) => {
    
    return (
        <div className="tag-container">
            <div className="tag-circle"></div>
            <span className='tag-text'>{data.name}</span>
        </div>
    )
}

export default TagComponent