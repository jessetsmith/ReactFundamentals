import React, {useState} from 'react';//import the use of react
import NytResults from './NytResults'; //import the NytResults file

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //naming variables for our url and key
const key = 'srFJ6roqbKltErzcoozNMdpFWBkG9fSP';

//create functional component to hold and run data
const NytApp = () => {

    const [search, setSearch] = useState(''); //array destructuring and seeing our startng state
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    const fetchResults = () => {//fetching results from our api 
       let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;//string interpolation to fill in our key, page number, and search terms
       url = startDate ? url + `&begin_date=${startDate}` : url;//if there is a start date, add to the url
       url = endDate ? url + `&end_date=${endDate}` : url;//same thing for the end date
       
       fetch(url)//pull completed url into the fetch
       .then(res => res.json()) //jsonify returned data
       .then(data => setResults(data.response.docs)) //update setResults on line 14
       .catch(err => console.log(err)); //error catch
    };

    const handleSubmit = (event) => {//defines an event listener for fomr submitting
        setPageNumber(0);//stops the page from refreshing
        fetchResults();//reset our page number to 0
        event.preventDefault();//get results
    }

   const changePageNumber = (event, direction) => {//pagination direction
        event.preventDefault()//prevents  the page from refreshing
        if(direction === 'down') { //down references the nytResults file
            if(pageNumber > 0) {// if more than one page, set page number
                setPageNumber(pageNumber - 1);//chnage page number down by one
                fetchResults();//get new results
            }
        }
        if(direction === 'up') {
            setPageNumber(pageNumber + 1);//change page up by one
            fetchResults();//get new results
        }

    }

    return (//return our results to our DOM, now written in JSX
        <div className='main'>
            <div className='mainDiv'>
                <form onSubmit={(e) => handleSubmit(e)}>{/*This is our form. onSubmit is our event, which calls the handle submit from above.*/}
                    <span>Enter a single search term(required) : </span> 
                    <input type='text' name='search' onChange={(e) => setSearch(e.target.value) } required /> {/*Looks for us to type in the field and onChange is our event to setSearch from above. */}
                    <br />
                    <span>Enter a start date: </span>
                    <input type='date' name='startDate' pattern='[0-9]{8}' onChange={(e) => setStartDate(e.target.value)} />{/*Same thing, except with the start date.*/}
                    <br />
                    <span>Enter an end date: </span>
                    <input type='date' name='endDate' pattern='[0-9]{8}' onChange={(e) => setEndDate(e.target.value)} />{/*Same thing, but with end date*/}
                    <br />
                    <button className='submit'>Submit search</button>{/*Our submit button, triggers onSubmit  */}
                </form>
                results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null{/*if there are results, we grab the results from our .js file, and we trigger changePageNumber if applicable */}
            </div>
        </div>
    )
}


export default NytApp; //export our component