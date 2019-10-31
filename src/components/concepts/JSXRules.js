import React from 'react';

const JSXRules = () => {
    return(
        <div className="main">
            <div className='mainDiv'>
                <h1 className='selection-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavScript.</dd>
                    <dt>"React elements"</dt>
                    <dd>These are used to construct and update the DOM, or what you seeon the screen.</dd>
                    <dt>Not required</dt>
                    <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
                </dl>
                <hr/>
            </div>
            <NormalComponent/>
            <CreateElementComponent/>
        </div>

    );
}

const NormalComponent = () => {
    return(
        <div style={{border: '2px solid black'}}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="http://milosristic.com/wp-content/uploads/2018/08/rsz_32.png"/>
        </div>
    )
}

const CreateElementComponent = () => {
    return (
        React.createElement('div', {style: {border:'2px solid black'}},
        React.createElement('h1', null, 'CreateElement Component'),
        React.createElement('p', null, 'This was constructed with CreateElement calls in the return.'),
        React.createElement('img', {src:'https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png'}, null)
        
    )
    )
}

export default JSXRules;