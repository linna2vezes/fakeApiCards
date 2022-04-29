import { useEffect , useState } from "react";
import axios from "axios";
import Card from '../Cards/Card';
import './Main.css';



function Main () {
    const [data, setData] = useState([]);
    const [filter, setFilter ] = useState("all");
    const [ id, setId] = useState("1");
    const [ descrip, setDescrip] = useState("aut");
    
      
    
    useEffect(() => {
    const request = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
     setData(response.data)
    }
     request();}, [data]);
      
    return (
        <div>

         <label htmlFor="todos" id="label">Choose:</label>
         <select name="cards" id="todos" form="cardsform" onChange ={event => setFilter(event.target.value)}>
         <option value="all">All</option>
         <option value="completed">Completed</option>
         <option value="incompleted">Incompleted</option>
         <option value="id">Id</option>
         <option value="description">Description</option>
         
         </select> 
         
        { filter === "all" ?  data.map((el) => <Card  key={el.id} id={el.id} title={el.title} />) : "" } 

        { filter === "completed" ? data.filter(el => el.completed).map (el => <Card  key={el.id} id={el.id} title={el.title}/>): ""}

        { filter === "incompleted" ? data.filter(el => !el.completed).map (el => <Card  key={el.id} id={el.id} title={el.title}/>): ""}
       
        { filter === "id" ?  <input  name="id" type="text" maxLength={3} onChange ={event => setId(event.target.value)} /> : "" }
        { filter === "id" ? data.filter(el => el.id === Number(id)).map (el => <Card  key={el.id} id={el.id} title={el.title} />): ""}

        { filter === "description" ?  <input  name="description" type="text" onChange ={event => setDescrip(event.target.value)} /> : ""}
        { filter === "description" ? data.filter(el => el.title.includes(descrip)).map (el => <Card  key={el.id} id={el.id} title={el.title} />): ""}
        
        
        
        

        </div>
     );    
    }
       

export default Main;


