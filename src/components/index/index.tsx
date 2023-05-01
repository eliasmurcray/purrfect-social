import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import '../../global.scss';
import './index.scss';
import SignupForm from '../signup-form/signup-form';

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
      <SignupForm onSuccess={() => 0} />
      <div className='fake-phone'>
        <div className='cat-image-container'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#fff'><path d='M0 0h24v24H0V0z' fill='none' opacity='.87'/><path d='M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z'/></svg>
          <img src='cat-hero.jpg' alt='Cute Cat' width='300px' height='615px' />
        </div>
        <article>
          <div className='action-buttons'>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/></svg>12k</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M80 904V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L131 925q-14 14-32.5 6.344T80 904Zm60-73 75-75h605V236H140v595Zm0-595v595-595Z"/></svg>43</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M120 851V301q0-16 13.5-24.5T162 274l652 274q18 8 18 28t-18 28L162 878q-15 6-28.5-2.5T120 851Zm60-48 544-227-544-230v168l242 62-242 60v167Zm0-227V346v457-227Z"/></svg>22</button>
          </div>
          <div className='creator-container'>
            <img src='nala_cat.jpg' />
            <h3>Nala The Cat</h3>
            <button className='follow'>Follow</button>
          </div>
          <p>Saw these two cats in Amsterdam yesterday. Adorable little guys! Follow for more cat content!</p>
        </article>
      </div>
    </section>
    </div>;
	}
}

const root = createRoot(document.body);
root.render(<App />);