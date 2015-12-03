import React from 'react';
import ReactDOM from 'react-dom';
import SlugifyForm from './component';

require('../css/main.scss');

window.React = React
window.ReactDOM = ReactDOM

main();

function main() {
    ReactDOM.render(<SlugifyForm />, document.getElementById('app'));
}
