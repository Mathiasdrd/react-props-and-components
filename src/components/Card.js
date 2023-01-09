import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return(
        <div className="card--component">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`images/${props.coverImg}`} className="card--image" alt={`${props.title}`}/> 
            <div className="card--stats">
                <img src="images/star.png" className="star--icon" alt="rating star"/> 
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> / Person</p>
        </div>
    )
}