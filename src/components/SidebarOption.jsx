import React from 'react';
import '../CSS/SidebarOption.css'

const SidebarOption = ({ Icon, title, number, selected }) => {
    return (
        <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
            <figure>{Icon}</figure>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;
