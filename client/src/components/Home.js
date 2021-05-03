import React from "react";
import Axios from "axios";
import Navibar from "./Navibar";
import {Badge, Carousel, Container, Row} from "react-bootstrap";
import main1 from '../images/1.jpg';
import main2 from '../images/2.jpg';
import main3 from '../images/3.jpg';
import watermelon from '../images/berries/Арбуз.jpg';
import watermelon1 from '../images/berries/Арбуз Русский размер F1.jpeg';
import {data} from '../store/data'
import './home.css'
import {useStore} from "react-redux";
import PlantAddedUser from "./PlantAddedUser";

export default function Home() {
    const [newStateData, setNewStateData] = React.useState(null);
    const [grade, setGrade] = React.useState(null);
    const [namePlant, setNamePlant] = React.useState(null);
    const store = useStore();

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

    console.log(idNamePlant);

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
                        return PlantAddedUser(item)
                    }
                })}
            </div>
        </div>
    );
}