import Card from '../Card/Card.jsx';
import { useEffect,useState} from 'react';
import './CardList.css';
const CardList = () => {
    const [cars,setCars] = useState([]);


   useEffect(()=>{
        fetch("https://myfakeapi.com/api/cars")
        .then((data)=> data.json())
        .then((fetchedData)=> {
             setCars(fetchedData.cars)
             const FiftyCard=fetchedData.cars.slice(0,50);
             setCars(FiftyCard);
        }).catch((error) => console.error('Error fetching data:', error));
   },[])     
   const carCards=cars.map((car)=>(
   <Card data={car}/>
   ))

   return(
        <div className="CardsList"> 
            {carCards}
        </div>
   )
  
}

export default CardList;
