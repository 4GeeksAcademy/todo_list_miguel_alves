import React, {useState} from "react";
import { TiDeleteOutline } from "react-icons/ti";


const Home = () => {
const [item, setItem] = useState("")
const [toDos, setTodos] = useState([])


	const handleEnter = (e) =>{
		if(e.key === "Enter"){
		setTodos([...toDos, item])
		setItem("")
		}
	}

	const hansdleDelete = (i) => {
		setTodos(toDos.filter((_, index) => index !== i))
	}


	return (
	 <div className="container">
		<h1>Todos List</h1>
			<div className="lista-contenedor">
			<ul>
				<li><input type="text" placeholder="Agregar nueva tarea" onChange={(e)=>setItem(e.target.value)} value={item} onKeyDown={(e)=>handleEnter(e)}/></li>
				{toDos && toDos.map((item, index) =>(
					<li key={index}>{item}<TiDeleteOutline onClick={() => hansdleDelete(index)} /></li>
				))}
				<li>{toDos.length} items faltantes</li>
		        
			</ul>
			</div>
		
	 </div>
	)

	
};

export default Home;
