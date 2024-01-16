import './Chip.css'
import CrossImage from '../assets/cross.jpg'

function Chip({data}){

    const {chipItems,setchipItems,setarr,arr} = data

    function handleClick(itm){
       console.log(itm)
       setchipItems(chipItems.filter(item=>item!=itm))
       setarr([...arr,itm])
    }

return(
 <div className="ChipContainer">

   {chipItems && chipItems.map((itm,index)=>
     (<div key={index}  className="chipItem">
        {itm}
        <img src={CrossImage} className='Image'onClick={()=>handleClick(itm)}></img>
     </div>)
   )

    }    
  </div>
)
}

export default Chip;