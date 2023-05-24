import React from "react";

export const Transcationlist = () => {
    return(
        <>
        <h3>History</h3>
        <ul id="list" className="list">
            <li className="minus" >
               cash <span>-$400.00</span> <button className="delete-btn">x </button>
            </li>
        </ul>
        </>
    )
}