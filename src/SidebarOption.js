import React from 'react';
import "./SidebarOption.css";

function SidebarOption({Icon , title} /* props */) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOptionIcon"/>} {/* if you passed an icon as a prop then render out the <Icon/> */}
           {Icon ? (
             <h3>{title}</h3>
           ): (
            <h3 className="sidebarOptionChannel">
               <span className="sidebarOptionHash"># </span> {title}
            </h3>
           )}
            {/* if you passed no icon then render the title as a channel using a hastasg instead of a icon  */}
        </div>
    );
}

export default SidebarOption;