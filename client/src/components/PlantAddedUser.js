import React from "react";
import watermelon from "../images/berries/Арбуз.jpg";
import strawberry from "../images/berries/strawberry.jpg"
import {Badge} from "react-bootstrap";

const PlantAddedUser = (item) => {
    return (
        <div key={item.id} className="plant__block">
            {item.Name_Plant === 'Арбуз' && <img src={watermelon} alt="трололо" className="plant__image"/>}
            {item.Name_Plant === 'Земляника' && <img src={strawberry} alt="skjdgfhj" className="plant__image"/>}
            <div className="plant__info">
                <Badge pill variant="primary">
                    {item.Name_Plant}
                </Badge>
                <Badge pill variant="secondary">
                    {item.Ripening_season_Plant}
                </Badge>
                <Badge pill variant="success">
                    {item.Purpose_Plant}
                </Badge>
                <Badge pill variant="danger">
                    {item.Discribe_Plant}
                </Badge>
            </div>
        </div>
    )
}

export default PlantAddedUser;