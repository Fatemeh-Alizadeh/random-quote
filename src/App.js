import React,{useState} from 'react';
import quote from './data'
import {ImQuotesRight, ImCircleRight, ImCircleLeft ,ImTwitter } from "react-icons/im";

function App() {
    const [index, setIndex] = useState(0);
    const { id, text, author } = quote[index];

    return (
        
             <section className='wrapper'>
            <span className="qoute-icon">
                <ImQuotesRight />
            </span>
            <div id="quote-box">
                <div id="text">
                    <p>{text}</p>
                </div>
                <div id="author">
                    <h4>{author}</h4>
                </div>
                <a href="twitter.com/intent/tweet" id="tweet-quote"><ImTwitter /></a>
                <button id='new-qoute'><ImCircleLeft /></button>
                <button id='new-qoute'><ImCircleRight /></button>
            </div>

    </section>
      
)
}



export default App;