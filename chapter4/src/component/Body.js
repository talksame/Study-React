import '../css/Body.css';
import { useState } from 'react';

function Body(){
    const [Person, setPerson] = useState({
        name : "",
        gender : "",
        birth : "",
        age : "",
        bio : ""

    })
    const handleOnChange = (e) => {
        setPerson({
            ...Person,
            [e.target.name] : e.target.value
        })
        console.log(Person);
    }
    /*
    const [count, setCount] = useState(0);
    const [text, setText] = useState(0);
    const [date, setDate] = useState(0);
    const onIncrease = () => {
    console.log("Undate");
    setCount(count + 1);
    }
    const onDecrease = () =>{
    setCount(count- 1);
    }
    const handleOnClick = (e) => {
    setText(e.target.value);
    }

    const handleOnClick2 = (e) => {
        setDate(e.target.value);
        }

    */

    return(
        <div>
            <div>
                <input
                    name = "name"
                    value = {Person.name}
                    onChange={handleOnChange}
                    placeholder='이름'></input>
            </div>
            <div>
                <select name = "gender" value = {Person.gender} onChange={handleOnChange}>
                    <option key = {""}></option>
                    <option key = {"남자"}>남자</option>
                    <option key = {"여자"}>여자</option>
                </select>
            </div>
            <div>
            <input
                    name = "age"
                    type = "text"
                    value = {Person.age}
                    onChange={handleOnChange}>
                        
                </input>
                <input
                    name = "birth"
                    type = "date"
                    value = {Person.birth}
                    onChange={handleOnChange}>
                </input>
            </div>
            <div>
                <textarea name = "bio" value = {Person.bio} onChange={handleOnChange}></textarea>
            </div>

        </div>
    )
  }

  export default Body;