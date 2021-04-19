import React from "react";
import Navibar from "./Navibar";
import {Dropdown, Table} from "react-bootstrap";

const data = [
    {
        "id": 1,
        "Name_Plant": "Земляника",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Ароматные ягоды с ананасовым вкусом",
        "Status_Plant": "Семена не посажены",
    },
    {
        "id": 2,
        "Name_Plant": "Томат",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Чудо сорт для самых ленивых садоводов",
        "Status_Plant": "Семена не посажены"
    },
    {
        "id": 3,
        "Name_Plant": "Ананас",
        "Ripening_season_Plant": "Июнь-Август",
        "Purpose_Plant": "Сад и огород",
        "Discribe_Plant": "Чудо сорт для самых ленивых садоводов",
        "Status_Plant": "Семена не посажены"
    }
]

const PlantAdd = () => {
    const [berries, setBerries] = React.useState('');
    const [vegetables, setVegetables] = React.useState('');
    const [fruits, setFruits] = React.useState('');
    const [trees, setTrees] = React.useState('');

    React.useEffect(() => {
        if (berries === 'berries') {
            setVegetables('');
            setFruits('');
            setTrees('');
        }
        if (vegetables === 'vegetables') {
            setBerries('');
            setFruits('');
            setTrees('');
        }
        if (fruits === 'fruits') {
            setBerries('');
            setVegetables('');
            setTrees('');
        }
        if (trees === 'trees') {
            setBerries('');
            setVegetables('');
            setFruits('');
        }
    }, [berries, fruits, vegetables, trees]);
    console.log(data.map(item => item['Name_Plant']))
    return (
        <div className="plant__add">
            <Navibar/>
            <h1>PlantAdd</h1>
            <div className="trolo" style={{display: "flex", justifyContent: 'space-around'}}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {berries !== '' ? `${berries}` : vegetables !== '' ? `${vegetables}` : fruits !== '' ? `${fruits}` : `${trees}`}
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
                    <Dropdown.Item href="#/action-1">Ягоды</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Фрукты</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Овощи</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Деревья</Dropdown.Item>
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
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item['id']}</td>
                        <td>{item['Name_Plant']}</td>
                        <td>{item['Ripening_season_Plant']}</td>
                        <td>{item['Purpose_Plant']}</td>
                        <td>{item['Discribe_Plant']}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
};

export default PlantAdd;