import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Component/Header/Header'

const App = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

const AppData = ReactDOM.createRoot(document.getElementById("root"));
AppData.render(<App />)