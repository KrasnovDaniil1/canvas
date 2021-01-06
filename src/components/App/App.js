import React from 'react';
import Toolbar from '../Toolbar/Toolbar.js'
import SettingBar from '../SettingBar/SettingBar.js'
import Canvas from '../Canvas/Canvas.js';
import './App.scss';

const App = () => {
    
    return (
        <div className="app">
            <Toolbar />
            <SettingBar />
            <Canvas />
        </div>
    )
}

export default App;