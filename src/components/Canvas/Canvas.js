
import React, { useEffect, useRef } from 'react';
import './Canvas.scss';
import { observer } from "mobx-react-lite"
import toolState from '../../store/toolState'
import canvasState from '../../store/canvasState'
import Brush from '../../tools/Brush';


const Canvas = observer(() => {

const canvasRef = useRef()

useEffect(() => {
    canvasState.setCanvas(canvasRef.current) 
    toolState.setTool(new Brush(canvasRef.current))
    
    } , [] )

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())

    }

        return (
            <div className="canvas"> 
                <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} className="canvas-paint" width={600} height={400} />
            </div>
        );
});

    
export default Canvas; 
