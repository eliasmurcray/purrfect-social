import React, { Component, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import './login-form.scss';

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

interface LoginFormProps {
	onSuccess: () => void;
}

class LoginForm extends Component<LoginFormProps> {

	constructor(props: LoginFormProps | Readonly<LoginFormProps>) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		
	}

	render() {
		return <form className='login-form' action='#' onSubmit={this.handleSubmit}>
			<div className='input-container'>
				<input type='email' placeholder='Email' required />
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30px" height="30px" viewBox="0 0 400 400" fill="#fff">
					<g transform="translate(-100, -60) scale(1.5 1.5)" fill="#fff">
						<ellipse cx="150" cy="180" rx="18" ry="20" />
						<ellipse cx="250" cy="180" rx="18" ry="20" />
						<path fill="#0000" stroke="#fff" stroke-width="18" stroke-linejoin="round" stroke-linecap="round" d="M  90 200 L 90 70 L 140 100 Q 200 70 260 100 L 310 70 L 310 200 C 290 310 110 310 90 200" />
						<path d="M200 200 C230 202 220 218 200 222 180 218 170 202 200 200" />
					</g>
				</svg>
				{/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z"/></svg> */}
			</div>
			<div className='input-container'>
				<input type='password' placeholder='Password' required />
				{/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z"/></svg> */}
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30px" height="30px" viewBox="0 0 400 400" fill="#fff">
					<g transform="translate(-100, -60) scale(1.5 1.5)" fill="#fff">
						<ellipse cx="150" cy="180" rx="18" ry="2" />
						<ellipse cx="250" cy="180" rx="18" ry="2" />
						<path fill="#0000" stroke="#fff" stroke-width="18" stroke-linejoin="round" stroke-linecap="round" d="M  90 200 L 90 70 L 140 100 Q 200 70 260 100 L 310 70 L 310 200 C 290 310 110 310 90 200" />
						<path d="M200 200 C230 202 220 218 200 222 180 218 170 202 200 200" />
					</g>
				</svg>
			</div>
			<div className='action-buttons'>
				<input type='submit' value='Log In' />
				<button>Sign Up</button>
			</div>
		</form>;
	}
}

export default LoginForm;