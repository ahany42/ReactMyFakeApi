import Card from '../Card/Card.jsx';
import { useEffect,useState} from 'react';
import './CardList.css';
const CardList = () => {
    const [Car,setCars] = useState({
        id:"",
        car_model:"",
        color:""
   });


   useEffect(()=>{
        fetch("https://myfakeapi.com/api/cars")
        .then((data)=> data.json())
        .then((fetchedData)=> {
             setCars(fetchedData.cars[0])
        })
   },[])     


   return(
        <>
             {/* <div>id: {Car.id}</div>
             <div>car :{Car.car_model}</div>
             <div>car :{Car.car}</div> */
             <Card data={Car}/>}
        </>
   )
  
}

export default CardList;
