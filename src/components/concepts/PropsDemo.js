import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {

    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color : color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'white' ? setBackgroundColor('lightgrey') : setBackgroundColor('white');
    };

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    }

    return (
        <div className='Main'>
            <div className='mainDiv'>
                <div style={styles}>
                <FunctionalComponent string="Well" function={toggleColor} selectedStyle={ color }/>
                <FunctionalComponent string="Hello, there" function={toggleBackgroundColor} selectedStyle={ backgroundColor }/>
                <FunctionalComponent string="Who" function={toggleBorderRadius} selectedStyle={ borderRadius }/>
                <FunctionalComponent string="Are" function={toggleBorderStyle} selectedStyle={ borderStyle }/>
                <FunctionalComponent string="You?" function={toggleColor}/>
                </div>
            </div>
        </div>
    )
}

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={ props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'Well',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'What style?'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired

}

export default PropsDemo;