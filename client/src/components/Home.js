import React from "react";
import Axios from "axios";
import Navibar from "./Navibar";
import {Carousel} from "react-bootstrap";
import main1 from '../images/1.jpg';
import main2 from '../images/2.jpg';
import main3 from '../images/3.jpg';
import {data} from '../store/data'
import './home.css'
import {useStore} from "react-redux";

export default function Home() {
    const [newStateData, setNewStateData] = React.useState(null);
    const store = useStore();

    React.useEffect(() => {
        if (store.getState().data[1] !== undefined) {
            console.log(store.getState().data[1]);
            Axios.post('http://localhost:3001/userPlant', {
                ID_Gardener_FK: store.getState().data[1]['ID_Gardener'],
            }).then((response) => {
                setNewStateData(response.data.map(item => item));
                console.log(response.data[0]['ID_Plant']);
            })
        }
    }, [store, setNewStateData])

    console.log(newStateData)

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
        </div>
    );
}