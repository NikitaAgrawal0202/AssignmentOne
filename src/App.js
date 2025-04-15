import React from 'react';
import ReactDOM from 'react-dom/client';
import "../index.css";
import Header from './components/Header/Header';
import Body from './components/Body/Body';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
            {/* Header
            Body
            Footer */}
        </div>
    )
}

const AppData = ReactDOM.createRoot(document.getElementById("root"));
AppData.render(<AppLayout />)