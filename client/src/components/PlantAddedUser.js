import React from "react";
import watermelon from "../images/berries/Waterlemon.jpg";
import strawberry from "../images/berries/strawberry.jpg";
import raspberries from "../images/berries/Raspberries.jpg";
import cranberry from "../images/berries/Cranberry.jpg";
import blueberry from "../images/berries/Blueberry.jpg";
import bilberry from "../images/berries/Bilberry.jpg";
import blackberry from "../images/berries/Blackberry.jpg";
import lingonberry from "../images/berries/Lingonberry.png";
import Strawberry from "../images/berries/StrawberryКлубника.jpg";
import cucumber from "../images/vegetables/Сucumber.jpg";
import tomato from "../images/vegetables/Tomato.jpg";
import carrot from "../images/vegetables/Сarrot.jpg";
import cabbage from "../images/vegetables/Cabbage.jpg";
import eggplant from "../images/vegetables/Eggplant.jpg";
import beans from  "../images/vegetables/Beans.jpg";
import lentils from "../images/vegetables/Lentils.jpg";
import peas from "../images/vegetables/Peas.jpeg";
import melon from "../images/vegetables/Melon.jpg";
import zucchini from "../images/vegetables/Zucchini.jpg";
import potatoes from "../images/vegetables/Potatoes.jpg";
import corns from "../images/vegetables/Сorn.jpg";
import onions from "../images/vegetables/Onion.jpg";
import sweetPepper from "../images/vegetables/SweetPepper.jpg";
import radish from "../images/vegetables/Radish.jpg";
import beet from "../images/vegetables/Beet.jpg";
import {Badge} from "react-bootstrap";
import axios from "axios";

const PlantAddedUser = (item, latitude, longitude, apiGeocoder) => {
    console.log(latitude, longitude, apiGeocoder);
    /*if (item.id > 80) {
        fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=01e442bc-86fc-457c-8d68-133576e2b18b&geocode=${longitude},${latitude}`)
            .then(response => response.json())
            .then(result => setApiGeoCoder(result))
            .catch(error => console.log("error", error));
    }

    if (apiGeocoder !== '') {
        console.log(apiGeocoder);
    }*/
    return (
        <div key={item.id} className="plant__block">
            {item.Name_Plant === 'Арбуз' && <img src={watermelon} alt="трололо" className="plant__image"/>}
            {item.Name_Plant === 'Земляника' && <img src={strawberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Малина' && <img src={raspberries} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Клюква' && <img src={cranberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Голубика' && <img src={blueberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Черника' && <img src={bilberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Ежевика' && <img src={blackberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Брусника' && <img src={lingonberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Клубника' && <img src={Strawberry} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Огурец' && <img src={cucumber} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Томат' && <img src={tomato} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Морковь' && <img src={carrot} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Капуста' && <img src={cabbage} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Баклажан' && <img src={eggplant} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Бобы' && <img src={beans} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Чечевица' && <img src={lentils} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Горох' && <img src={peas} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Дыня' && <img src={melon} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Кабачок' && <img src={zucchini} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Картофель' && <img src={potatoes} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Кукуруза' && <img src={corns} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Лук' && <img src={onions} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Перец сладкий' && <img src={sweetPepper} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Редис' && <img src={radish} alt="skjdgfhj" className="plant__image"/>}
            {item.Name_Plant === 'Свекла' && <img src={beet} alt="skjdgfhj" className="plant__image"/>}

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