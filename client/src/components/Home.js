import React from "react";
import Axios from "axios";
import Navibar from "./Navibar";
import {Badge, Carousel, Container, Row} from "react-bootstrap";
import main1 from '../images/1.jpg';
import main2 from '../images/2.jpg';
import main3 from '../images/3.jpg';
import {data} from '../store/data'
import './home.css'
import {useStore} from "react-redux";
import PlantAddedUser from "./PlantAddedUser";
import {usePosition} from "use-position";
import calcOfPrecipitation from "../utils/utils";
import howManyDaysRain from "../utils/utils";
import moment from "moment";


export default function Home() {
    const [newStateData, setNewStateData] = React.useState(null);
    const [grade, setGrade] = React.useState(null);
    const [namePlant, setNamePlant] = React.useState(null);
    const [apiGeocoder, setApiGeoCoder] = React.useState('');
    const [count, setCount] = React.useState(null);
    const [dateWater, setDateWater] = React.useState(null);
    const [dateWaterBD, setDateWaterBD] = React.useState(null);
    let rain;
    const store = useStore();
    const {
        latitude,
        longitude
    } = usePosition();

    // Подсчет Rain
    React.useEffect(() => {
        if (latitude !== undefined && longitude !== undefined) {
            rain =  calcOfPrecipitation(longitude, latitude).then(result => setCount(result))
        }
    }, [latitude, longitude, rain, setCount])

    React.useEffect(() => {
        if (count !== null) {
            setDateWater(howManyDaysRain(count))
        }
    }, [setDateWater, count])

    function howManyDaysRain(responseDT) {
        let date = 0;
        for (let i = 0; i < responseDT?.size; i++) {
            let dateYYYYMMDD = moment().subtract(i, 'days').format('YYYYMMDD');
            if (responseDT?.get(`${dateYYYYMMDD}`) >= 15) { // НАДО ПРОВЕРИТЬ
                date = dateYYYYMMDD;
            }
        }
        return date;
    }

    /*if (count < 1 && (longitude !== undefined && latitude !== undefined)) {
        setStart(new Date().getDate() - 4);
        setEnd(new Date().getDate());
        const timeNow = parseInt((new Date().getTime()/1000));
        const timeYesterday = parseInt((new Date("2021-05-08").getTime()/1000));
        fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${timeYesterday}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`)
            .then(response => response.json())
            .then(result => setApiGeoCoder(result))
            .catch(error => console.log("error", error));
        setCount(count+1);
    }*/


    // Получение из бд растения пользователя
    React.useEffect(() => {
        if (store.getState().data[1] !== undefined) {
            console.log(store.getState().data[1]);
            Axios.post('http://localhost:3001/userPlant', {
                ID_Gardener_FK: store.getState().data[1]['ID_Gardener'],
            }).then((response) => {
                setGrade(response.data.map(item => item['Discribe_Plant']));
                setNamePlant(response.data.map(item => item['Name_Plant']));
                setDateWaterBD(response.data.map(item => item['Water_Plant']));
            })
        }
    }, [store, setNewStateData, setGrade, setNamePlant, setDateWaterBD])


    const idNamePlant = [];
    let dataPlantAddedUser = [];
    if (grade !== null && namePlant !== null) {
        grade.filter(item => {
            for (let i = 0; i < data.length; i++) {
                if (item === data[i].Discribe_Plant ) {
                    idNamePlant.push(data[i].id);
                }
            }
        })
    }
    /*{data.map(item => {
        if (idNamePlant.includes(item.id) && dateWater !== null && dateWaterBD !== null) {
            return dataPlantAddedUser.push(item)
        }
    })}*/

    console.log('new', dataPlantAddedUser);

    return (
        <div>
            <Navibar/>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={main1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Полив растений</h3>
                        <p>Выдача рекомендации для полива</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={main2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Вырасти самый большой урожай</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={main3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Выбор семян</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="plant">
                <h1 className="plant__title">
                    <Badge variant="success">Мои растения</Badge>
                </h1>
                {data.map(item => {
                    if (idNamePlant.includes(item.id) && dateWater !== null && dateWaterBD !== null) {
                        return PlantAddedUser(item, latitude, longitude, apiGeocoder, dateWater, dateWaterBD, idNamePlant, dataPlantAddedUser)
                    }
                })}
            </div>
        </div>
    );
}