import Card from '../Card/Card.jsx';
import { useEffect,useState} from 'react';
import './CardList.css';
const CardList = () => {
    const [cars,setCars] = useState([]);
    const [filter,setFilter]=useState(cars);

   useEffect(()=>{
        fetch("https://myfakeapi.com/api/cars")
        .then((data)=> data.json())
        .then((fetchedData)=> {
             setCars(fetchedData.cars)
             const FiftyCard=fetchedData.cars.slice(0,50);
             setCars(FiftyCard);
             setFilter(FiftyCard);
        }).catch((error) => console.error('Error fetching data:', error));
   },[])     
   const carCards=filter.map((car)=>(
   <Card data={car}/>
   ))
   const handleChange=(e)=>{
    FilterResults(e.target.value);
   }
   function FilterResults(selectedFilter){
    if(selectedFilter==="Available"){
     setFilter(cars.filter(car=>car.availability));
    }
    else if(selectedFilter==="OutOfStock"){
    setFilter(cars.filter(car=>!car.availability));
    }
    else{
    setFilter(cars);
    }
   }
   return(
        <div className="DropDownContainer">
            <label>Filter By Availability</label>
        <select onChange={handleChange}>
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="OutOfStock">Out Of Stock</option>
        </select>
        <p>Results Count {filter.length}</p>
        <div className="CardsList"> 
            {carCards}
        </div>
        </div>
   )
  
}

export default CardList;
