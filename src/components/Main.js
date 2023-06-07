import React from "react";
import pin from "../images/pin-icon.png"

function Main(props) {
    return(
        <div className="main-body">
            <img src={props.item.imageUrl} alt="" className="image"/>
            <div className="info">
            <img src={pin} alt="" className="pin"/>
            <a href={props.item.googleMapsUrl} className="link">View on Google Maps</a>
            <h1 className="section-title">{props.item.title}</h1>
            <h6 className="section=dates"><b>{props.item.startDate} - {props.item.endDate}</b></h6>
            <p className="section-des">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Main