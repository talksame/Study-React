import './App.css';
import Viewer from './conponent/Viewer';
import Controller from './conponent/Controller';
import Even from './conponent/Even';
import { useRef, useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  const handleChangeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  }

  const didMountRef =  useRef(false);
  
  useEffect(() => {
    if (!didMountRef.current){
      didMountRef.current = true;
      return;
    }else{
      console.log("컴포넌트 업데이트!");
    }
    //console.log("업데이트 : ", text, count);
  }, [count, text]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    }
    //console.log("컴포넌트 마운트");
  })

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value = {text} onChange={handleChangeText}></input>
      </section>
      <section>
        <Viewer count = {count}></Viewer>
        {count%2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}></Controller>
      </section>
    </div>
  );
}

export default App;
