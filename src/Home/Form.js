import { useState } from 'react';

const Form = () => {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
    <div style ={{"background-color":'#188EF5'}} >
	<div className="container">
	<div className="columns is-centered">
    <div className="column is-6" style={{ "text-align":'center', "background-color":'#fff',
"min-height":'570px',"border-radius":'5px',"box-shadow":'0 8px 0 rgba(0, 0, 0, 0.2)',"margin-top":'60px'}}>
    <div className="columns is-centered">
    <div className="column is-10" style= {{"text-align":'left',"margin-top":'20px'}}>
	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form className="form-horizontal">
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input form-control"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input form-control"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input form-control"
		value={password} type="password" />

<label className="label">Confirm Password</label>
		<input style={{"margin-bottom":'30px'}} onChange={handlePassword} className="input form-control"
		value={password} type="password" />

		<button onClick={handleSubmit} className="button is-primary" type="submit">
		Submit
		</button>
	</form>
    </div>
    </div>
    </div>
    </div>
    </div>
	</div>
);
}

export default Form;
