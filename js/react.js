function HolaMundo() {
    return React.createElement('h1', null, 'Hola Mundo con React');
    }

    ReactDOM.render(React.createElement(HolaMundo, null),document.getElementById('root'));