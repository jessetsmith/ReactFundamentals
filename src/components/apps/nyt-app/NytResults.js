import React from 'react'; //import react

const NytResults = (props) => {//functional component with a parameter for props
    return( 
        <div>
            <div>
            {props.results.map(result => { //we use .map to look through the data to see our results
                return (
                    <div key={result._id}>{/*key is a JSX attribute, giving a unique key our our results  */}
                        <h2>{result.headline.main}</h2>{/*display headline of the individual results  */}
                        {result.multimedia.length > 1 ? <img alt='article' src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : '' }{/*If more than one piece of media is available, we grab index 1 because index 0 will be too large  */}
                        <p>
                            {result.snippet}{/*We display a snippet of text under the image  */}
                            <br />
                            {result.keywords.length > 0 ? ' keywords: ' : ''} {/*add the phrase 'keywords :' if there are any  */}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}{/*Map over the keywords and display them as list items  */}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>{/*make the button take us to the article's page  */}
                    </div>
                )
            })}
            <div>
                <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>{/*pagination to tell the button what to do, to go to previous results  */}
                <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>{/*pagination to tell the button what to do, to go to next results  */}
            </div>
        </div>
    </div>
    )
}

export default NytResults; //export component