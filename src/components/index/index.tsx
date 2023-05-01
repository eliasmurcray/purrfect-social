import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import '../../global.scss';
import './index.scss';
import SignupForm from '../signup-form/signup-form';

class App extends Component {
	render() {
		return <div>
      <header>
        <img src='logo.svg' height="36px" />
        <h2>Purrfect Social</h2>
      </header>
      <section className='hero'>
      <h1>The Purrfect App For Cat Lovers</h1>
      <div>Purrfect Social gives you personalized cat content every day!</div>
      <SignupForm onSuccess={() => 0} />
      <div className='cat-image-container'>
        <img src='cat-hero.jpg' alt='Cute Cat' width='300px' height='615px' />
      </div>
    </section>
    </div>;
	}
}

const root = createRoot(document.body);
root.render(<App />);