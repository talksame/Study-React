import './App.css';
import Header from './component/Header.js';
import Body from './component/Body.js';
import Body2 from './component/Body2.js'
import Footer from './component/Footer.js';

function App() {
  const Person ={
    name : "Ilium",
    age : 28,
    location : "서울시",
    food : ["파스타", "빵", "떡볶이"],
  }

function ChildComp(){
  return <div>child componet</div>
}

  return (
    <div className='App'>
      <Header />
      <Body {...Person}>
        <ChildComp/>
      </Body>
      <Body2></Body2>
      <Footer />
    </div>
  );
}

export default App;
