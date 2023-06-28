import React from 'react';
import '../CSS/SidebarOption.css'

const SidebarOption = ({ Icon, title, number }) => {
    return (
        <div className='sidebarOption'>
            <figure>{Icon}</figure>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;
