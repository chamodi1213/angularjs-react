import React from "react";
import FormDetails from "./FormDetails";
import Layout from "./Layout";


export default class AppComp extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log("AppComp Component mounted")
	}

    componentDidUpdate(){
        console.log("AppComp updated")
    }

    render(){	
		return (
			<div>
                <Layout 
                todos={this.props.todos}
                newItem={this.props.newItem}
                markComplete={this.props.markComplete}
                />
                <FormDetails 
                details={this.props.details} 
                approveDetails={this.props.approveDetails}
                rejectDetails={this.props.rejectDetails}
                sendValues={this.props.sendValues}
                />
            </div>
        )
    }
}