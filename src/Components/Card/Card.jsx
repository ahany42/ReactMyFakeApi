import './Card.css';
import OutOfStockPlaceholder from '../../Images/NotAvailablePlaceholder.svg';
import InStockPlaceholder from '../../Images/AvaialblePlaceholder.svg';
const Card = ({data}) => {
  return (
<div className="card bg-light Card" style={{ width: '250px', margin: '50px' }}>
    <div className="card-header bg-dark"><h4 class="card-title text-light">
       {data.car}
        </h4>
        <div className="CardSubHeader">
            <h6 className="text-danger">{data.availability? "Availability" :"Out Of Stock"}</h6>  
             <i className="fa-regular fa-trash-can text-danger"></i> 
        </div>
  
   
    </div>
        <img src={data.availability? InStockPlaceholder: OutOfStockPlaceholder  } alt="Placeholder Image"/>
    <div class="card-body">{data.car_color} {data.car_model} {data.car_model_year}  
        <br/>
        {data.price}
    </div>
    <div class="card-footer">
            <a href="https://github.com/ahany42"><button class="bg-dark text-light">{data.availability? "Buy" : "Notify Me"}</button></a>
    </div>
</div>
  )
}

export default Card
