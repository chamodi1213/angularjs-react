import React, { useState } from 'react';

const FormDetails = (props) => {
	const { details, approveDetails, rejectDetails, sendValues } = props;
	const { firstName, lastName, mobile } = details;

	const [street, setStreet] = useState('')
	const [city, setCity] = useState('')
	const [country, setCountry] = useState('')

	const handleOnclick = () => {
		sendValues({ values: { street: street, city: city, country: country } });
	}

	return (
		<div style={{ marginLeft: "30px" }}>
			<h2>React</h2>
			<h3>Personal Details</h3>
			<p>First name : {firstName}</p>
			<p>Last name : {lastName}</p>
			<p>Mobile no : {mobile}</p>
			<button type="button" onClick={approveDetails}>Approve</button>
			<button style={{ marginLeft: "20px" }}
				type="button" onClick={rejectDetails}>Reject</button>
			<br></br><br></br>
			<h3>Address Details</h3>
			<form>
				<label>Street : </label>
				<input type="text" value={street} onChange={(e) => setStreet(e.target.value)}></input>
				<br></br><br></br>
				<label>City : </label>
				<input type="text" value={city} onChange={(e) => setCity(e.target.value)}></input>
				<br></br><br></br>
				<label>Country : </label>
				<input type="text" value={country} onChange={(e) => setCountry(e.target.value)}></input>
			</form>
			<br></br><br></br>
			<button onClick={handleOnclick}>Send Details</button>

		</div>
	)

}

export default FormDetails;