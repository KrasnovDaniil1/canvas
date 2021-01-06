import React , {Component} from 'react';
import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import Circle from '../../tools/Circle';
import Line from '../../tools/Line';
import Eraser from '../../tools/Eraser';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import './Toolbar.scss';

const Toolbar = () => {

const changeColor = e => {
    toolState.setStrokeColor(e.target.value)
    toolState.setFillColor(e.target.value)
}


        return (
            <div className="toolbar">
                <div>
                    <button className="button button-brash" onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
                    <button className="button button-rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}  />
                    <button className="button button-circle" onClick={() => toolState.setTool(new Circle(canvasState.canvas))} />
                    <button className="button button-eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))} />
                    <button className="button button-line" onClick={() => toolState.setTool(new Line(canvasState.canvas))}/>
                    <input type="color" className="button input-color" onChange={e => changeColor(e)}/>
                </div>
                <div>
                    <button className="button button-undo" onClick={() => canvasState.undo()} />
                    <button className="button button-redo" onClick={() => canvasState.redo()} />
                    <button className="button button-save" />
                </div>
            </div>
        )
    }



export default Toolbar;
