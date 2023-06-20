import { useRef, useState } from "react";

function Body2(){
    const [text, setText ] = useState(0);
    const textRef = useRef();
    const handleOnChage = (e) =>{
        setText(e.target.value);
    }

    const handleOnClick = () =>{
        if (text.length < 5){
            //비밀번호 만들 때 쓰는 구나.
            textRef.current.focus();
        }
        else{
            alert("Hello React");
            setText("");
        }
    }

    return (
        <div>
            <input ref={textRef} value = {text} onChange={handleOnChage}></input>
            <div>
                <button onClick={handleOnClick}></button>
            </div>
        </div>
    )

    /*
    const [number, setNumber] = useState(0);
    function Viewer(){
        console.log("Viewer Update");
        return (
            <div>
                Viewer
            </div>
        );
    };

    const onIncrease = () =>{
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number -1);
    }

    return(
        <div>
            <div>
                <h2>{number}</h2>
                <Viewer  number = {number}></Viewer>
            </div>
            <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
    */

}

export default Body2