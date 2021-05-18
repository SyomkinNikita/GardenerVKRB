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
import CalcOfPrecipitation from "../utils/utils";
import utils from "../utils/utils";

const API_KEY = '01e442bc-86fc-457c-8d68-133576e2b18b';
export default function Home() {
    const [newStateData, setNewStateData] = React.useState(null);
    const [grade, setGrade] = React.useState(null);
    const [namePlant, setNamePlant] = React.useState(null);
    const [apiGeocoder, setApiGeoCoder] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [start, setStart] = React.useState(null);
    const [end, setEnd] = React.useState(null);
    const store = useStore();
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
    } = usePosition();
    if (count < 1 && (longitude !== undefined && latitude !== undefined)) {
        let utils = CalcOfPrecipitation(longitude, latitude);
        setCount(count+1);
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

    React.useEffect(() => {
        if (store.getState().data[1] !== undefined) {
            console.log(store.getState().data[1]);
            Axios.post('http://localhost:3001/userPlant', {
                ID_Gardener_FK: store.getState().data[1]['ID_Gardener'],
            }).then((response) => {
                setGrade(response.data.map(item => item['Discribe_Plant']));
                setNamePlant(response.data.map(item => item['Name_Plant']))
            })
        }
    }, [store, setNewStateData, setGrade, setNamePlant])


    const idNamePlant = []
    if (grade !== null && namePlant !== null) {
        grade.filter(item => {
            for (let i = 0; i < data.length; i++) {
                if (item === data[i].Discribe_Plant ) {
                    idNamePlant.push(data[i].id);
                }
            }
        })
    }

    console.log(store.getState());
   /* if (apiGeocoder['hourly'] !== undefined) {
        console.log(apiGeocoder['hourly'][0].weather);
    }
*/
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
                    if (idNamePlant.includes(item.id)) {
                        return PlantAddedUser(item, latitude, longitude, apiGeocoder)
                    }
                })}
            </div>
        </div>
    );
}