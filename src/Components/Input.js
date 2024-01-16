import { useState } from 'react';
import './Input.css'
import Chip from './Chip';


function Input({data}) {
   const {setarr,setchipItems,chipItems,arr_of_strings,arr}=data;
   
    const [visible,setvisible] = useState(false);
    const [inputvalue,setinputvalue] = useState('');
   
    function handleClick(){
        setvisible(true);
    }

    function handleClickItem(item){
     console.log(item);
     setchipItems([...chipItems,item])
     var temp=arr;
     
     setarr(arr.filter(existing=>existing!=item));
    }

    function handleSearch(e){
       
       setinputvalue(e.target.value)
       setarr(arr.filter(item=>item.toLowerCase().includes(e.target.value)))
       if(e.target.value===""){
        setarr(arr_of_strings)
       }
     
    }

  return (
    <div className="Input">
        
        <input type='text' onClick={handleClick} onChange={handleSearch} value={inputvalue} ></input>
     {visible && (
        <ul className='listContainer'>
            
          {arr.map((item, index) => (
           <li key={index} onClick={() => handleClickItem(item)} className='nameitem'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Input;