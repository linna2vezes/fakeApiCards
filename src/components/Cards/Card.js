import './Card.css';


function Card (props) {
const {id, title} =props

    return (
   <div className="card">
   <p>{id}</p>
   <p>{title}</p>
    </div>
  );
  }
  
  export default Card;
  
