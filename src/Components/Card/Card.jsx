import './Card.css';
import OutOfStockPlaceholder from '../../Images/NotAvailablePlaceholder.svg';

const Card = () => {
  return (
<div className="card bg-light Card" style={{ width: '250px', margin: '50px' }}>
    <div className="card-header bg-dark"><h4 class="card-title text-light">
        Nissan
        </h4>
        <div className="CardSubHeader">
            <h6 className="text-danger">Out Of Stock</h6>  
            <div className="Icons">
                <i className="fa-solid fa-pen text-light"></i> 
                <i className="fa-regular fa-trash-can text-danger"></i>
            </div>
        </div>
  
   
    </div>
        <img src={OutOfStockPlaceholder} alt="Placeholder Image"/>
    <div class="card-body">Blue Sunny 2018
        <br/>
        $2814
    </div>
    <div class="card-footer">
            <a href="https://github.com/ahany42"><button class="bg-dark text-light">Buy</button></a>
    </div>
</div>
  )
}

export default Card
