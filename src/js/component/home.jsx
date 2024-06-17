
import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([])

	return (
		
		<div className="container mt-5">
			<h1 className="text-center text-success">Lista de la compra</h1>
			<ul className="row p-0">
				
				
				<li className="border-0 p-0 ">
					<input 
					onChange={(e)=>setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if(e.key === "Enter") {
							setTodos(todos.concat(inputValue));
							setInputValue("");
						 }
					}}
					name="text"
					placeholder="Me falta..." 
					className="input "
					type="text"/>
				</li>
				
				{/* <input placeholder="Enter your text..." class="input" name="text" type="text"> */}

				{todos.map((item,index) => (
					<li>
						{item}{" "}
						<i className="icono mt-1 fa fa-solid fa-delete-left"
						onClick={()=> 
							setTodos(
								todos.filter(
									(todos,currentIndex)=>
										index != currentIndex
								)
							)
						}
						></i>
					</li>
				))}
				
				<div className="p-0 text-white">{todos.length} elemento</div>
				
			</ul>
			
			
			
		</div>
		
	);
};


export default Home;


