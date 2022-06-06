import React from "react";
import FormDetails from "./FormDetails";

export default class Layout extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log("Layout Component mounted")
	}
	componentDidUpdate(){
        console.log("Layout updated")
    }

	render(){	
		return (
			<div style={{backgroundColor: "#8fb6fb"}}>
			<div style={{marginLeft: "30px"}}>
				<h1>React TO-DO</h1>
				<div>&nbsp;</div>
				<ul>{this.props.todos.map((todo,key)=>{
					return <li key={key} onClick={ (event) => {
						console.log("todo passed from react component: ", todo)
									this.props.markComplete(todo)
									}
								} className={["list-item", todo.done === true? "done-true":"done-false"].join(" ")}>{todo.text}
							</li>})
				}</ul>
				<button id="click" onClick={ () => {
						this.props.newItem("Alter triggered from React but Fired from AngularJS")
					}
					}>Click to make Angular Alert!!</button>
					<div>&nbsp;</div>
			</div>
			</div>
		);
	}
}