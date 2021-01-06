import React from 'react';
import toolState from '../../store/toolState';
import '../SettingBar/SettingBar.scss';

const SettingBar = () => {

    return (
        <div className="setting-bar">
            <label htmlFor='line-width'>Толщина линии</label>
            <input 
                onChange={e => toolState.setLineWidth(e.target.value)}
                id='line-width' 
                type="number" 
                defaultValue={1} />
            <label htmlFor='stroke-color'>Цвет обводки</label>
            <input 
                onChange={e => toolState.setStrokeColor(e.target.value)}
                type="color"
                id='stroke-color' />
        </div>
    )
}

export default SettingBar;

