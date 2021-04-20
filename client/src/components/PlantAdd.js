import React from "react";
import Navibar from "./Navibar";
import {Dropdown, Table} from "react-bootstrap";
import Axios from "axios";
import {useStore} from "react-redux";

const data = [
    {
        "id": 1,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ароматные ягоды с ананасовым вкусом",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 2,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Русский размер F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 3,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Русский размер F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 4,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Оранжевый медок",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 5,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Оранжевый медок F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 6,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Эльф Уафи F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 7,
        "type": "berries",
        "Name_Plant": "Малина",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Медовая",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 8,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Лесная",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 9,
        "type": "berries",
        "Name_Plant": "Клюква",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Бен Лир",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 10,
        "type": "berries",
        "Name_Plant": "Клюква",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Бен Лир",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 11,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Икар",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 12,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Золотая полянка",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 13,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Лимончино",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 14,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ремонтантная C-141 F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 15,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Май-Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ремонтантная C-141 F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 16,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Май-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Московский деликатес F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 17,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Июнь-Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Заря F1 Элит мини",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 18,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Июнь-Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Заря F1 Элит мини",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 19,
        "type": "berries",
        "Name_Plant": "Малина",
        "Ripening_season_Plant": "Июнь-Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Жёлтая ягодка",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 20,
        "type": "berries",
        "Name_Plant": "Голубика",
        "Ripening_season_Plant": "Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Голубая россыпь",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 21,
        "type": "berries",
        "Name_Plant": "Черника",
        "Ripening_season_Plant": "Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Черника обыкновенная Тёмная ночь",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 22,
        "type": "berries",
        "Name_Plant": "Черника",
        "Ripening_season_Plant": "Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Черника обыкновенная Тёмная ночь",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 23,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Июнь-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Земляника Вкуснятина F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 24,
        "type": "berries",
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Июнь-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Земляника Вкуснятина F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 25,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Шуга Бейби",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 26,
        "type": "berries",
        "Name_Plant": "Голубика",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Голубика высокорослая Лесное сокровище",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 27,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Арбуз Голден Леди F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 28,
        "type": "berries",
        "Name_Plant": "Малина",
        "Ripening_season_Plant": "Июнь-Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Малина красная Рубин",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 29,
        "type": "berries",
        "Name_Plant": "Черника",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Черника Заздравная",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 30,
        "type": "berries",
        "Name_Plant": "Ежевика",
        "Ripening_season_Plant": "Июнь-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ежевика Агавам",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 31,
        "type": "berries",
        "Name_Plant": "Брусника",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Брусника Рубин",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 32,
        "type": "berries",
        "Name_Plant": "Клубника",
        "Ripening_season_Plant": "Июнь-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Клубника Флориан F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 33,
        "type": "berries",
        "Name_Plant": "Черника",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Лесная жемчужина",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 34,
        "type": "berries",
        "Name_Plant": "Малина",
        "Ripening_season_Plant": "Июнь-Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Сладкая ягодка",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 35,
        "type": "berries",
        "Name_Plant": "Ежевика",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ежевика Чародейка",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 36,
        "type": "berries",
        "Name_Plant": "Арбуз",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Арбуз Оранжевый медок F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 37,
        "type": "berries",
        "Name_Plant": "Клюква",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Клюква крупноплодная Королева сада",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 38,
        "type": "berries",
        "Name_Plant": "Черника",
        "Ripening_season_Plant": "Июль",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Лесная целительница",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 39,
        "type": "berries",
        "Name_Plant": "Клубника",
        "Ripening_season_Plant": "Июнь-Октябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Всемирный деликатес, Смесь F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 40,
        "type": "vegetables",
        "Name_Plant": "Огурец",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Огурец Корюшка F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 41,
        "type": "vegetables",
        "Name_Plant": "Томат",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Томат Джек Пот F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 42,
        "type": "vegetables",
        "Name_Plant": "Морковь",
        "Ripening_season_Plant": "Июль-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Морковь Пурпл Дракон",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 43,
        "type": "vegetables",
        "Name_Plant": "Капуста",
        "Ripening_season_Plant": "Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Капуста белокочанная Королева засолки F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 44,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Санчо Панса",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 45,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ультраранний F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 46,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Десерт Голиафа",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 47,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Мраморный Восторг",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 48,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Виолетта ди Фиренце",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 49,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Генеральский",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 50,
        "type": "vegetables",
        "Name_Plant": "Баклажан",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Алёшка F1",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 51,
        "type": "vegetables",
        "Name_Plant": "Бобы",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Вировские сахарные",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 52,
        "type": "vegetables",
        "Name_Plant": "Бобы",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Чёрные алмазы",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 53,
        "type": "vegetables",
        "Name_Plant": "Бобы",
        "Ripening_season_Plant": "Июль-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Царский урожай",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 54,
        "type": "vegetables",
        "Name_Plant": "Бобы",
        "Ripening_season_Plant": "Август-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Дачник",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 55,
        "type": "vegetables",
        "Name_Plant": "Чечевица",
        "Ripening_season_Plant": "Июль-Сентябрь",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Коричневая",
        "Status_Plant": "Семена не посажены",
    },
]

const PlantAdd = () => {
    const [berries, setBerries] = React.useState('');
    const [vegetables, setVegetables] = React.useState('');
    const [fruits, setFruits] = React.useState('');
    const [trees, setTrees] = React.useState('');
    const [stateType, setStateType] = React.useState('');
    const store = useStore();
    // console.log(store.getState().data[1]['ID_Gardener']);


    const plantAddClick = id => {
        console.log(id);
        const newData = data.find(item => item['id'] === id);
        console.log(newData['type']);
        Axios.post('http://localhost:3001/plantAdd', {
            Name_Plant: newData['Name_Plant'],
            Ripening_season_Plant: newData['Ripening_season_Plant'],
            Purpose_Plant: newData['Purpose_Plant'],
            Discribe_Plant: newData['Discribe_Plant'],
            Status_Plant: newData['Status_Plant'],
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
                        <td onClick={(event) => plantAddClick(item['id'])}>Click</td>
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