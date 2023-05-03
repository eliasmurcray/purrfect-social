import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import '../../global.scss';
import './index.scss';
import LoginForm from '../login-form/login-form';

class App extends Component {
	render() {
		return <div>
      <header>
        <img src='logo.svg' height='36px' />
        <h2>Purrfect Social</h2>
      </header>
      <section className='hero'>
      <h1>The Purrfect App For Cat Lovers</h1>
      <div>Purrfect Social gives you personalized cat content every day!</div>
      <LoginForm onSuccess={() => 0} />
      <div className='fake-phone'>
        <div className='cat-image-container'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#fff'><path d='M0 0h24v24H0V0z' fill='none' opacity='.87'/><path d='M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z'/></svg>
          <img src='cat-hero.jpg' alt='Cute Cat' width='300px' height='615px' />
          <div className='action-buttons'>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>12k</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M80 904V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L131 925q-14 14-32.5 6.344T80 904Zm60-73 75-75h605V236H140v595Zm0-595v595-595Z"/></svg>43</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M120 851V301q0-16 13.5-24.5T162 274l652 274q18 8 18 28t-18 28L162 878q-15 6-28.5-2.5T120 851Zm60-48 544-227-544-230v168l242 62-242 60v167Zm0-227V346v457-227Z"/></svg>22</button>
          </div>
        </div>
        <article>
          <div className='creator-container'>
            <img src='nala_cat.jpg' />
            <h3>Nala The Cat</h3>
            <button className='follow'>Follow</button>
          </div>
          <p>Saw these two cats in Amsterdam yesterday. Adorable little chonks! Follow for more cat content! #cute</p>
        </article>
      </div>
    </section>
    </div>;
	}
}

const root = createRoot(document.body);
root.render(<App />);