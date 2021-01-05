import React , {Component} from 'react';
import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import './Toolbar.scss';

const Toolbar = () => {

        return (
            <div className="toolbar">
                <div>
                    <button className="button button-brash" onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
                    <button className="button button-rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}  />
                    <button className="button button-circle" />
                    <button className="button button-eraser" />
                    <button className="button button-line" />
                    <input type="color" className="button input-color" />
                </div>
                <div>
                    <button className="button button-undo" />
                    <button className="button button-redo" />
                    <button className="button button-save" />
                </div>
            </div>
        )
    }



export default Toolbar;
