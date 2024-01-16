import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import Chip from './Components/Chip';
import { useState } from 'react';
function App() {
  var arr_of_strings=[
    'Nick',
    'George',
    'Malaika',
    
  ]
  const [chipItems,setchipItems] = useState([]);
  const [arr,setarr] = useState(arr_of_strings);
  const dataToBePassed={
    arr,
    setchipItems,
    chipItems,    
    setarr,
    arr_of_strings
  }

  return (
    <div className="App">
     <Chip data={dataToBePassed}></Chip>
     <Input data={dataToBePassed} ></Input>
    </div>
  );
}

export default App;
