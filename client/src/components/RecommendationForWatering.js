import React from "react";
import Navibar from "./Navibar";

const RecommendationForWatering = () => {

    fetch('https://geocode-maps.yandex.ru/1.x/?format=json&apikey=01e442bc-86fc-457c-8d68-133576e2b18b&geocode=37.597576,55.771899')
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));

    return (
        <div className='recommendation'>
            <Navibar/>
            Рекомендации
        </div>
    )
}

export default RecommendationForWatering;