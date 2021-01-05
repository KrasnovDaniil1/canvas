import React , {Component} from 'react';
import './App.scss';
import Toolbar from '../Toolbar/Toolbar.js'
import SettingBar from '../SettingBar/SettingBar.js'
import Canvas from '../Canvas/Canvas.js';

export default class App extends React.Component {
    
constructor(props) {
    super(props)

}
    render() {
        return (
            <div className="app">
                <Toolbar />
                <SettingBar />
                <Canvas />
            </div>
        )
    }

}
