import React from "react";

export const Sidebar = () => {

    const List = ( {label} ) =>{
        return (
        <div className="flex w-full h-14 p-3 align-center">
            <h2>{label}</h2>
        </div>
        );
    }
    
    return (
        <div className="flex-initial w-64 min-h-screen bg-[#363740]">
            <List label="Overview" />
            <List label="Tickets" />
            <List label="Ideas" />
            <List label="Contacts" />
            <List label="Agents" />
            <List label="Articles" />
            <List label="Settings" />
            <List label="Subscription" />
        </div>
    )
}

export default Sidebar;