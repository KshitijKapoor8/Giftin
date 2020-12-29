import React from 'react';

export default function page() {
    
    return(
        <div>{window.localStorage.getItem("userToken")}</div>
    )
}