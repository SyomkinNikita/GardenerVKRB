import React from "react";
import Navibar from "./Navibar";
import {Dropdown, Table} from "react-bootstrap";
import Axios from "axios";
import {useStore} from "react-redux";
import {data} from '../store/data'
import moment from "moment";

const PlantAdd = () => {
    const [berries, setBerries] = React.useState('');
    const [vegetables, setVegetables] = React.useState('');
    const [fruits, setFruits] = React.useState('');
    const [trees, setTrees] = React.useState('');
    const [stateType, setStateType] = React.useState('');
    const store = useStore();
    console.log(store.getState().data[1]['ID_Gardener']);


    const plantAddClick = id => {
        console.log(id);
        const newData = data.find(item => item['id'] === id);
        const dateNow = moment().format('DD.MM.YYYY');
        console.log(newData['type']);
        Axios.post('http://localhost:3001/plantAdd', {
            Name_Plant: newData['Name_Plant'],
            Ripening_season_Plant: newData['Ripening_season_Plant'],
            Purpose_Plant: newData['Purpose_Plant'],
            Discribe_Plant: newData['Discribe_Plant'],
            Status_Plant: newData['Status_Plant'],
            Water_Plant: dateNow,
            ID_Gardener_FK: store.getState().data[1]['ID_Gardener'],
        }).then((response) => {
            console.log(response);
        })
    }

    const statusPlantUpdate = (id, status) => {
        console.log(data.filter(item => item['id'] === id).map(item => item['Status_Plant'] = status))
        console.log(data);
    }


    React.useEffect(() => {
        if (berries === 'berries') {
            setVegetables('');
            setFruits('');
            setTrees('');
            setStateType('berries');
        }
        if (vegetables === 'vegetables') {
            setBerries('');
            setFruits('');
            setTrees('');
            setStateType('vegetables');
        }
        if (fruits === 'fruits') {
            setBerries('');
            setVegetables('');
            setTrees('');
            setStateType('fruits');
        }
        if (trees === 'trees') {
            setBerries('');
            setVegetables('');
            setFruits('');
            setStateType('trees');
        }
    }, [berries, fruits, vegetables, trees]);

    return (
        <div className="plant__add">
            <Navibar/>
            <h1>PlantAdd</h1>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {berries !== '' ? `${berries}` : vegetables !== '' ? `${vegetables}` : fruits !== '' ? `${fruits}` : `${trees}` || 'Выберите растение'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => setBerries('berries')}>Ягоды</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => setFruits('fruits')}>Фрукты</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={() => setVegetables('vegetables')}>Овощи</Dropdown.Item>
                    <Dropdown.Item href="#/action-4" onClick={() => setTrees('trees')}>Деревья</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Выберите саженец
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Арбузы</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Дыни</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Троло</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">ВВ</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Имя растения</th>
                    <th>Сезон созревания</th>
                    <th>Тип</th>
                    <th>Сорт</th>
                    <th>Состояние растения</th>
                    <th>Добавление</th>
                </tr>
                </thead>
                <tbody>
                {berries === '' && vegetables === '' && fruits === '' && trees === '' &&
                data.map((item, index) => (
                    <tr key={index}>
                        <td>{item['id']}</td>
                        <td>{item['Name_Plant']}</td>
                        <td>{item['Ripening_season_Plant']}</td>
                        <td>{item['Purpose_Plant']}</td>
                        <td>{item['Discribe_Plant']}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Семена не посажены
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Саженец в земле')}>Саженец в земле</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Растёт')}>Растёт</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Созрело')}>Созрело</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Цветёт')}>Цветёт</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td onClick={(event) => plantAddClick(item['id'])}>Click</td>
                    </tr>
                ))
                }
                {berries === 'berries' &&
                data.filter(item => item["type"] === 'berries').map((item, index) => (
                    <tr key={index}>
                        <td>{item['id']}</td>
                        <td>{item['Name_Plant']}</td>
                        <td>{item['Ripening_season_Plant']}</td>
                        <td>{item['Purpose_Plant']}</td>
                        <td>{item['Discribe_Plant']}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Семена не посажены
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Саженец в земле')}>Саженец в земле</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Растёт')}>Растёт</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Созрело')}>Созрело</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Цветёт')}>Цветёт</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td onClick={(event) => plantAddClick(item['id'])}>Click</td>
                    </tr>
                ))}
                {vegetables === 'vegetables' &&
                data.filter(item => item["type"] === 'vegetables').map((item, index) => (
                    <tr key={index}>
                        <td>{item['id']}</td>
                        <td>{item['Name_Plant']}</td>
                        <td>{item['Ripening_season_Plant']}</td>
                        <td>{item['Purpose_Plant']}</td>
                        <td>{item['Discribe_Plant']}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Семена не посажены
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Саженец в земле')}>Саженец в земле</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Растёт')}>Растёт</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Созрело')}>Созрело</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Цветёт')}>Цветёт</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td onClick={(event) => plantAddClick(item['id'])}>Click</td>
                    </tr>
                ))}
                {fruits === 'fruits' &&
                data.filter(item => item["type"] === 'fruits').map((item, index) => (
                    <tr key={index}>
                        <td>{item['id']}</td>
                        <td>{item['Name_Plant']}</td>
                        <td>{item['Ripening_season_Plant']}</td>
                        <td>{item['Purpose_Plant']}</td>
                        <td>{item['Discribe_Plant']}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Семена не посажены
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Саженец в земле')}>Саженец в земле</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Растёт')}>Растёт</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Созрело')}>Созрело</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Цветёт')}>Цветёт</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td onClick={() => plantAddClick(item['id'])}>Click</td>
                    </tr>
                ))}
                {trees === 'trees' &&
                data.filter(item => item["type"] === 'trees').map((item, index) => (
                    <tr key={index}>
                        <td>{item['id']}</td>
                        <td>{item['Name_Plant']}</td>
                        <td>{item['Ripening_season_Plant']}</td>
                        <td>{item['Purpose_Plant']}</td>
                        <td>{item['Discribe_Plant']}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Семена не посажены
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Саженец в земле')}>Саженец в земле</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Растёт')}>Растёт</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Созрело')}>Созрело</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => statusPlantUpdate(item['id'], 'Цветёт')}>Цветёт</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td onClick={(event) => plantAddClick(item['id'])}>Click</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
};

export default PlantAdd;