import "./stepCounter.css"
import {useState} from "react";
import PropTypes, {element} from 'prop-types';

export function StepCounter(){

    const [data, setData] = useState([]);
    const [date, setDate] = useState();
    const [distance, setDistance] = useState();
    const [value, setValue] = useState('');

    const result = data.map((element, index) => {
        return (
        <li className={"li-element"} key={index}>
            {element.date}
            {element.distance}
            <button onClick={() => remove(index)}>X</button>
        </li>
        )
    });

    function remove(index) {
        setData([...data.slice(0, index), ...data.slice(index + 1)]);
    }

    function addToTable(){
        let index = data.indexOf(data.find(e => e.date == date));
        if (index != -1){
            setDate([...data, data[index] = {...data[index], distance: data[index].distance + distance}])
        }else {
            console.log(index);
            setData([...data, {date: date, distance: distance}]);
        }
    }


    const handlerSubmit = (evt) =>{
        evt.preventDefault();
    }


    return(
        <form onSubmit={handlerSubmit}>
            <input type={"date"} value={date} onChange={event => setDate(event.target.value)} />
            <input type={"number"} value={distance} onChange={event => setDistance(Number(event.target.value))} />
            <button onClick={addToTable}>+</button>
            <ul>{result}</ul>


            {/*<div className="data">
                <label className="data-label">Дата (ДД.ММ.ГГ)</label>
                <label className="data-label">Пройдено км</label>
                <label className="data-label">Действие</label>
                <br/>
                <ul>{result}</ul>
            </div>*/}
        </form>
    )
}