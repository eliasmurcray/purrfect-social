import React, { Component, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import './signup-form.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyBq4Y8qA38Zl64TnRngj5gvui1Hfy3u8os',
  authDomain: 'purrfect-social.firebaseapp.com',
  projectId: 'purrfect-social',
  storageBucket: 'purrfect-social.appspot.com',
  messagingSenderId: '69998001438',
  appId: '1:69998001438:web:fbc84e20a9daccd359dd0f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

interface SignupFormProps {
	onSuccess: () => void;
}

class SignupForm extends Component<SignupFormProps> {

	constructor(props: SignupFormProps | Readonly<SignupFormProps>) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		
	}

	render() {
		return <form className='signup-form' action='#' onSubmit={this.handleSubmit}>
			<input type='text' placeholder='Email or Phone Number'/>
			<input type='password' placeholder='Password' />
			<input type='submit' value='Sign Up' />
		</form>;
	}
}

export default SignupForm;