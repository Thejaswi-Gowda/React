import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';

let heading = React.createElement('h1', {}, "This is heading");

const Heading = () => (
    <>
        <div className="header-container">
            <Header/>
        </div>
        <div className='body-container'>
            <Body/>
        </div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading/ >);