import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq4Y8qA38Zl64TnRngj5gvui1Hfy3u8os",
  authDomain: "purrfect-social.firebaseapp.com",
  projectId: "purrfect-social",
  storageBucket: "purrfect-social.appspot.com",
  messagingSenderId: "69998001438",
  appId: "1:69998001438:web:fbc84e20a9daccd359dd0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

class App extends Component {
	render() {
		return <div style={{ color: "red" }}>Hello world</div>;
	}
}

const root = createRoot(document.body);
root.render(<App />);