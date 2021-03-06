import react from "react";
import './Button.css';

export default props =>
    <button className={`
        button
        ${props.operation ? 'operation': ''}
        ${props.double ? 'double' : ''}
        ${props.tiple ? 'tiple' : ''}
    `} onClick={e => props.click && props.click(props.label)}>
        {props.label}
    </button>