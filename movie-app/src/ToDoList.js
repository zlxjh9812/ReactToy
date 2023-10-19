import { useState, useEffect } from "react";

function ToDoList(){
    const[toDo,setToDo] =useState("");
    const [toDos,setToDos] = useState([]);
    const onchange=(event)=>{
        setToDo(event.target.value);
        
    }
    const onSubit = (event) =>{
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        
        setToDos(currentArray =>[toDo,...currentArray])
        setToDo("");
    };
    
    return(
        <div>
            <h1>My To Do {toDos.length}</h1>
            <form onSubmit={onSubit}>
            <input type="text" 
            placeholder="Write your Todo" 
            onChange={onchange}/>  
            <button>Add To Do</button>
            </form>
            <hr/>
            <h1>My ToDoList</h1>
            <ul>
            {toDos.map((item,index)=>
            <li key = {index}>{item}
            <button onClick={deleteBtn}>❌</button>
            </li>
               
            )}
            </ul>
         </div>
    );
}
export default ToDoList;