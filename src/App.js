import React,{useState} from 'react';
import quote from './data'
import {ImQuotesRight, ImCircleRight, ImCircleLeft ,ImTwitter } from "react-icons/im";

function App() {
    const [index, setIndex] = useState(0);
    const { text, author, color } = quote[index];

    const checkNumber = (num) => {
        if (num > quote.length - 1) {
            return 0
        }
        if (num < 0){
          return  quote.length - 1
        }
        else {
            return num;
        }
    }

    const nextQuote = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
     const preQuote = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    return (
        
             <section className='wrapper' style={{background:color}}>
            <span className="qoute-icon"  >
                <ImQuotesRight />
            </span>
            <div id="quote-box" >
                <div id="text">
                    <p>{text}</p>
                </div>
                <div id="author">
                    <h6>-{author}</h6>
                </div>
                <a href="twitter.com/intent/tweet" id="tweet-quote"><ImTwitter /></a>
                <button id='new-quote' onClick={nextQuote}><ImCircleLeft /></button>
                <button id='pre-quote' onClick={preQuote}><ImCircleRight /></button>
            </div>

    </section>
      
)
}



export default App;