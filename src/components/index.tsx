import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class App extends Component {
	render() {
		return <div>Hello world</div>;
	}
}

const root = createRoot(document.body);
root.render(<App />);